import type { Meta, StoryObj } from "@storybook/html";
import TextInput, { TextInputProps } from "./text-input.template";
import { sharedArgTypes } from "../field-base.types";

const meta: Meta<TextInputProps> = {
	title: "01 Style Guide/Fields",
	argTypes: {
		...sharedArgTypes,
	},
};
export default meta;

type Story = StoryObj<TextInputProps>;

export const TextInputStory: Story = {
	render: (args) => TextInput(args) as string,
	args: {
		name: "text-input",
		id: "text-input",
		label: "Testiramo",
		helpText: "This is a help text",
		placeholder: "Placeholder",
	},
	name: "Text input",
};
