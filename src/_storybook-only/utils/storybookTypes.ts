import type { Meta, StoryObj as StorybookStoryObject, Preview } from "@storybook/html";

type StoryObj<T> = Omit<StorybookStoryObject<T>, "render"> & {
	render: (args: T) => JSX.Element;
};

export type { Meta, StoryObj, Preview };
