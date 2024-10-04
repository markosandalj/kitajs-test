import type { Meta, StoryObj } from "@storybook/html";
import LocationAutocomplete, { LocationAutocompleteProps } from "./location-autocomplete.template";
import { locationAutocompleteData } from "./location-autocomplete.data";

const meta: Meta<LocationAutocompleteProps> = {
	title: "01 Style Guide/Location Autocomplete",
	argTypes: {},
};
export default meta;

type Story = StoryObj<LocationAutocompleteProps>;

export const LocationAutocompleteStory: Story = {
	name: "Location Autocomplete",
	render: (args) => (<form>{LocationAutocomplete(args)}</form>) as string,
	args: {
		...locationAutocompleteData,
	},
};
