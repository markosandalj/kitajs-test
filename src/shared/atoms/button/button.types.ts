import type { PropsWithChildren } from "@kitajs/html";

export const ButtonVariant = {
	primary: "primary",
	secondary: "secondary",
	tertiary: "tertiary",
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export const ButtonColor = {
	red: "red",
	redGradient: "red-gradient",
	light: "light",
	dark: "dark",
	blue: "blue",
	grey: "grey",
} as const;

export type ButtonColor = (typeof ButtonColor)[keyof typeof ButtonColor];

export const ButtonSize = {
	small: "small",
	extraSmall: "extra-small",
	tiny: "tiny",
	squared: "squared",
	noPadding: "no-padding",
	fullWidth: "full-width",
} as const;
export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

export const ButtonIconPosition = {
	left: "left",
	right: "right",
} as const;
export type ButtonIconPosition = (typeof ButtonIconPosition)[keyof typeof ButtonIconPosition];

export const ButtonTag = {
	button: "button",
	link: "a",
} as const;
export type ButtonTag = (typeof ButtonTag)[keyof typeof ButtonTag];

interface BaseButtonProps {
	variant: ButtonVariant;
	color: ButtonColor;
	size?: ButtonSize;
	icon?: string;
	iconPosition?: ButtonIconPosition;
	label: string;
	secondaryLabel?: string;
	attr?: Record<string, string>;
}

interface ButtonElementProps extends BaseButtonProps, JSX.HtmlButtonTag {
	tag: "button";
}

interface ButtonLinkProps extends BaseButtonProps, JSX.HtmlAnchorTag {
	tag: "a";
}

export type ButtonProps = PropsWithChildren & (ButtonElementProps | ButtonLinkProps);
