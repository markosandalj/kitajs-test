import type { Meta, StoryObj } from "src/_storybook-only/utils/storybookTypes";
import type { TestProps } from "./test.types";
import Test from "./test.template";

const meta: Meta<TestProps> = {
	title: "02 Test/Test",
};
export default meta;

type TestStory = StoryObj<TestProps>;

const TestStory: TestStory = {
	render: (args) => <Test {...args} />,
	args: {
		buttonHref: "AAAAAAA",
		buttonLabel: "BBBBBBB",
		description: "description",
	},
};
