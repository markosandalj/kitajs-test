import type { Meta, StoryObj } from "@storybook/html";
import LinkListing, { LinkProps, LinkListingProps } from "./link.listing";
import { linksData } from "./link.data";

const meta: Meta<LinkProps> = {
	title: "01 Style Guide/Link",
};
export default meta;

type Story = StoryObj<LinkProps>;
type ListingStory = StoryObj<LinkListingProps>;

export const LinkListStory: ListingStory = {
	render: (args) => LinkListing(args) as string,
	args: { links: linksData },
};
