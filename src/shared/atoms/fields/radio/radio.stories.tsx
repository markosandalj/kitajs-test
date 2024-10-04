import type { Meta, StoryObj } from "@storybook/html";
import Radio, { RadioProps } from "./radio.template";
import { sharedArgTypes } from "../field-base.types";

const meta: Meta<RadioProps> = {
	title: "01 Style Guide/Fields",
	argTypes: {
		checked: {
			control: { type: "boolean" },
		},
		...sharedArgTypes,
	},
};
export default meta;

type Story = StoryObj<RadioProps>;

export const RadioStory: Story = {
	render: (args) => Radio(args) as string,
	args: {
		name: "radio",
		id: "radio",
		label: "Radio",
		helpText: "This is a help text",
	},
	name: "Radio",
};
