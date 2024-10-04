import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@whitespace/storybook-addon-html",
	],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
	core: {
		builder: "@storybook/builder-vite",
	},
};
export default config;
