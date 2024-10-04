import type { Meta, StoryObj } from "src/_storybook-only/utils/storybookTypes";
import Test, { type TestProps } from "./test.template";
import { ButtonColor } from "@shared/atoms/button/button.types";

const meta: Meta<TestProps> = {
	title: "03 Test/Test",
};
export default meta;

export const TestTemplate: StoryObj<TestProps> = {
	render: (args) => <Test {...args} />,
	args: {
		content: {
			title: "Button Primary",
			description: "This is a primary button",
			button: {
				label: "Button Primary",
				href: "#",
				color: ButtonColor.blue,
			},
		},
		showContentOverlay: false,
	},
};
