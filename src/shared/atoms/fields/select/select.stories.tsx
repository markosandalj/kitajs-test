import type { Meta, StoryObj } from "@storybook/html";
import Select, { SelectProps } from "./select.template";
import { sharedArgTypes } from "../field-base.types";

const meta: Meta<SelectProps> = {
	title: "01 Style Guide/Fields",
	argTypes: {
		...sharedArgTypes,
	},
};
export default meta;

type Story = StoryObj<SelectProps>;

export const SelectStory: Story = {
	render: (args) => Select(args) as string,
	args: {
		name: "select",
		id: "select",
		label: "Select",
		helpText: "This is a help text",
		options: [
			{
				value: "1",
				label: "Option 1",
				selected: false,
			},
			{
				value: "2",
				label: "Option 2",
				selected: false,
			},
			{
				value: "3",
				label: "Option 3",
				selected: false,
			},
		],
	},
	name: "Select",
};
