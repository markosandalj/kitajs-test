import type { Meta, StoryObj } from "@storybook/html";
import Button from "./button.template";
import { ButtonColor, ButtonProps, ButtonSize, ButtonTag, ButtonVariant } from "./button.types";
import ButtonListing, { ButtonListingProps } from "./button.listing";
import buttonsData from "./button.data";

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

type Story = StoryObj<ButtonProps>;
type ListingStory = StoryObj<ButtonListingProps>;

export const ButtonPrimary: Story = {
	render: (args) => Button(args) as string,
	args: {
		variant: ButtonVariant.primary,
		color: ButtonColor.red,
		label: "Button Primary",
	},
};

export const ButtonListStory: ListingStory = {
	render: (args) => ButtonListing(args) as string,
	args: { buttons: buttonsData },
};
