import Button from "./Button.template";
import { ButtonColor, type ButtonProps, ButtonSize, ButtonTag, ButtonVariant } from "./button.types";
import ButtonListing, { type ButtonListingProps } from "./button.listing";
import buttonsData from "./button.data";
import type { Meta, StoryObj } from "src/_storybook-only/utils/storybookTypes";

const meta: Meta<ButtonProps> = {
	title: "01 Style Guide/Button",
	argTypes: {
		variant: {
			options: Object.values(ButtonVariant),
			control: { type: "select" },
		},
		tag: {
			options: Object.values(ButtonTag),
			control: { type: "select" },
		},
		color: {
			options: Object.values(ButtonColor),
			control: { type: "select" },
		},
		size: {
			options: Object.values(ButtonSize),
			control: { type: "select" },
		},
	},
};
export default meta;

export const ButtonPrimary: StoryObj<ButtonProps> = {
	render: (args) => <Button {...args} />,
	args: {
		variant: ButtonVariant.primary,
		color: "blue",
		label: "Button Primary",
		tag: "a",
		size: "extra-small",
	},
};

export const ButtonListStory: StoryObj<ButtonListingProps> = {
	render: (args) => <ButtonListing {...args} />,
	args: { buttons: buttonsData },
};
