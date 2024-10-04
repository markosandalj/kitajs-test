import type { Meta, StoryObj } from "@storybook/html";
import Checkbox, { CheckboxProps } from "./checkbox.template";
import { sharedArgTypes } from "../field-base.types";

const meta: Meta<CheckboxProps> = {
	title: "01 Style Guide/Fields",
	argTypes: {
		checked: {
			control: { type: "boolean" },
		},
		...sharedArgTypes,
	},
};
export default meta;

type Story = StoryObj<CheckboxProps>;

export const CheckboxStory: Story = {
	render: (args) => Checkbox(args) as string,
	args: {
		name: "checkbox",
		id: "checkbox",
		label: "Checkbox",
		helpText: "This is a help text",
		disabled: false,
	},
	name: "Checkbox",
};
