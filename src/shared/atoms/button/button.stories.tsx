import Button from "./button.template";
import { ButtonColor, ButtonProps, ButtonSize, ButtonTag, ButtonVariant } from "./button.types";
import ButtonListing, { ButtonListingProps } from "./button.listing";
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

type Story = Omit<StoryObj<ButtonProps>, "render"> & {
	render: (args: ButtonProps) => JSX.Element;
};

type CutomStory<T> = Omit<StoryObj<T>, "render"> & {
	render: (args: T) => JSX.Element;
};
type ListingStory = CutomStory<ButtonListingProps>;

export const ButtonPrimary: Story = {
	render: (args) => <Button {...args} />,
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
