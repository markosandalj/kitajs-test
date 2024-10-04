import { Component, PropsWithChildren } from "@kitajs/html";

export enum ButtonVariant {
	primary = "primary",
	secondary = "secondary",
	tertiary = "tertiary",
}

export enum ButtonColor {
	red = "red",
	redGradient = "red-gradient",
	light = "light",
	dark = "dark",
	blue = "blue",
	grey = "grey",
}

export enum ButtonSize {
	small = "small",
	extraSmall = "extra-small",
	tiny = "tiny",
	squared = "squared",
	noPadding = "no-padding",
	fullWidth = "full-width",
}

export enum ButtonIconPosition {
	left = "left",
	right = "right",
}

export enum ButtonTag {
	button = "button",
	link = "a",
}

interface BaseButtonProps {
	variant: ButtonVariant;
	color: ButtonColor;
	size?: ButtonSize;
	icon?: string;
	iconPosition?: ButtonIconPosition;
	label: string;
	secondaryLabel?: string;
	attr?: Record<string, any>;
}

interface ButtonElementProps extends BaseButtonProps, JSX.HtmlButtonTag {
	tag: ButtonTag.button;
}

interface ButtonLinkProps extends BaseButtonProps, JSX.HtmlAnchorTag {
	tag: ButtonTag.link;
}

export type ButtonProps = ButtonElementProps | ButtonLinkProps;
