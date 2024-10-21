import type { Meta, StoryObj } from "src/_storybook-only/utils/storybookTypes";
import type { CampaignProps } from "./campaign.template";
import Campaign from "./campaign.template";
import campaignData from "./campaign.data";

const meta: Meta<CampaignProps> = {
	title: "Campaign",
};
export default meta;

export const CampaignStory: StoryObj<CampaignProps> = {
	render: (args) => <Campaign {...args} />,
	args: campaignData,
};
