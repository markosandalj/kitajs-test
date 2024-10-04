import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator((name) => `https://example.com/rule/${name}`);

export const rule = createRule({
	name: "file-extension-imports",
	meta: {
		type: "problem",
		docs: {
			description: "Description of the rule",
		},
		messages: {
			template:
				"Files ending in .template.tsx should not be imported into js files that will end up in the bundle",
			data: "Files ending in .data.ts should not be imported into js files that will end up in the bundle",
			storybook:
				"Files starting with @storybook-only/ should be imported should only be imported in other files inside the storybook-only/ directory",
			webshop:
				"Files starting with @webshop/ should be imported should only be imported in other files inside the webshop/ directory. If something is supposed to be shared between sites add it to shared/ folder",
			companyweb:
				"Files starting with @company-web/ should be imported should only be imported in other files inside the company-web/ directory. If something is supposed to be shared between sites add it to shared/ folder",
			storybookhtml:
				"Types shouldn't be imported directly from @storybook/html. Instead import them, and if needed re-export them from src/_storybook-only/utils/storybookTypes",
		},
		schema: [], // no options
	},
	defaultOptions: [],
	create(context) {
		return {
			ImportDeclaration(node) {
				const isImportingTemplateFile = node.source.value.endsWith(".template.tsx");
				const isCurrentFileTemplate = context.filename.endsWith(".template.tsx");

				if (!isCurrentFileTemplate && isImportingTemplateFile) {
					context.report({
						node,
						messageId: "template",
					});
				}

				const isImportingDataFile = node.source.value.endsWith(".data.ts");
				const isCurrentFileData = context.filename.endsWith(".data.ts");
				const isCurrentFileStory = context.filename.endsWith(".stories.(tsx|ts)");

				if (isImportingDataFile && !isCurrentFileData && !isCurrentFileStory) {
					context.report({
						node,
						messageId: "data",
					});
				}

				const isImportingStorybookOnlyFile =
					node.source.value.startsWith("@storybook-only/") ||
					node.source.value.includes("_storybook-only");
				const isCurrentFileStorybookOnly = context.filename.includes("storybook-only");

				if (isImportingStorybookOnlyFile && !isCurrentFileStorybookOnly) {
					context.report({
						node,
						messageId: "storybook",
					});
				}

				const isImportingWebshopFile =
					node.source.value.startsWith("@webshop/") || node.source.value.includes("webshop/");
				const isCurrentFileWebshop = context.filename.startsWith("webshop/");

				if (isImportingWebshopFile && !isCurrentFileWebshop) {
					context.report({
						node,
						messageId: "webshop",
					});
				}

				const isImportingCompanyWebFile =
					node.source.value.startsWith("@company-web/") ||
					node.source.value.includes("company-web/");
				const isCurrentFileCompanyWeb = context.filename.startsWith("company-web/");

				if (isImportingCompanyWebFile && !isCurrentFileCompanyWeb) {
					context.report({
						node,
						messageId: "companyweb",
					});
				}

				const isImportingStorybookHtmlTypes = node.source.value === "@storybook/html";
				const isImportingToDesignatedRexportFile = context.filename === "storybookTypes.ts";
				if (isImportingStorybookHtmlTypes && !isImportingToDesignatedRexportFile) {
					context.report({
						node,
						messageId: "storybookhtml",
					});
				}
			},
		};
	},
});
