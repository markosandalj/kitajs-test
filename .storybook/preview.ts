import type { Preview } from "@storybook/html";

import "../src/_storybook-only/storybook-only.ts";
import { useEffect } from "@storybook/addons";

import { sharedClassComponents, sharedWebComponents } from "../src/shared/shared";
import {
	classComponentsConfiguration as webshopClassComponents,
	webComponentsConfiguration as webshopWebComponents,
} from "../src/webshop/webshop-compoents";
import {
	classComponentsConfiguration as companyWebClassComponents,
	webComponentsConfiguration as companyWebWebComponents,
} from "../src/company-web/company-web-components";
import addDocumentEventListeners from "../src/shared/utils/add-document-event-listeners";

const classComponentsConfiguration = [
	...sharedClassComponents,
	...webshopClassComponents,
	...companyWebClassComponents,
];
const webComponentsConfiguration = [
	...sharedWebComponents,
	...webshopWebComponents,
	...companyWebWebComponents,
];

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
			disableSaveFromUI: true,
		},
		html: {
			prettier: {
				tabWidth: 4,
				useTabs: false,
				htmlWhitespaceSensitivity: "ignore",
			},
			highlighter: {
				showLineNumbers: true, // default: false
				wrapLines: false, // default: true
			},
		},
	},
	decorators: [
		(story) => {
			useEffect(() => {
				addDocumentEventListeners({ classComponentsConfiguration, webComponentsConfiguration });
			}, []);

			return story();
		},
	],
};

export default preview;
