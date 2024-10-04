import type { Meta, StoryObj } from "@storybook/html";
import Button from "./button.template";
import { ButtonColor, ButtonProps, ButtonSize, ButtonTag, ButtonVariant } from "./button.types";
import ButtonListing, { ButtonListingProps } from "./button.listing";
import buttonsData from "./button.data";
import { castToString } from "src/_storybook-only/utils/castToString";

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

const a = <Button variant="primary" color="blue" label="Button Primary" tag="a" size="extra-small" />;

export const ButtonPrimary: Story = {
	render: (args) => castToString(<Button {...args} />),
	args: {
		variant: ButtonVariant.primary,
		color: "blue",
		label: "Button Primary",
		tag: "a",
		size: "extra-small",
	},
};

export const ButtonListStory: ListingStory = {
	render: (args) => <ButtonListing {...args} />,
	args: { buttons: buttonsData },
};

export const ButtonTest: Story = {
	args: {
		variant: "primary",
		color: "dark",
		label: "Button Primary",
		tag: "a",
		size: "extra-small",
	},

	render: (args) => Button(args) as string,
};
