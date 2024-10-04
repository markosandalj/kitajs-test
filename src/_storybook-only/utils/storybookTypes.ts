import type { Meta, StoryObj as StorybookStoryObject, Preview } from "@storybook/html";

type StoryObj<T> = Omit<StorybookStoryObject<T>, "render" | "args"> & {
	render: (args: T) => JSX.Element;
	args: T;
};

export type { Meta, StoryObj, Preview };
