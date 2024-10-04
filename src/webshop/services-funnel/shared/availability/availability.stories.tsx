import type { Meta, StoryObj } from "@storybook/html";
import Availability, { AvailabilityProps } from "./availability.template";
import { locationAutocompleteData } from "@shared/components/location-autocomplete/location-autocomplete.data";
import { availabilityData } from "./availability.data";

const meta: Meta<AvailabilityProps> = {
	title: "05 WS Fixed - Intershop/01 Availability",
	argTypes: {},
};
export default meta;

type Story = StoryObj<AvailabilityProps>;

export const AvailabilityStory: Story = {
	render: (args) => Availability(args) as string,
	args: {
		...availabilityData,
		locationAutocompleteData,
	},
};
