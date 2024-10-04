/// <reference types="@kitajs/html/jsx.d.ts" />

import classNames from "classnames";
import { ButtonIconPosition, type ButtonProps, ButtonTag } from "./button.types";
import { castToString } from "src/_storybook-only/utils/castToString";

function Button({
	tag = ButtonTag.button,
	variant,
	color,
	size,
	label,
	icon,
	iconPosition,
	secondaryLabel,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	attr,
	...rest
}: ButtonProps) {
	const classes = classNames(
		"button",
		variant && `button--${variant}`,
		color && `button--${color}`,
		size && `button--${size}`,
		rest.class,
	);

	const buttonIconMarkup = icon ? (
		<span class="button__icon">
			<img src={icon} alt="icon" />
		</span>
	) : null;

	return (
		<tag {...rest} of={tag} class={classes}>
			{iconPosition === ButtonIconPosition.left ? buttonIconMarkup : null}

			{secondaryLabel ? (
				<div class="button__label-container">
					<span class="button__label js-button-label">{label}</span>
					<span class="button__label button__label--secondary">{secondaryLabel}</span>
				</div>
			) : (
				buttonIconMarkup
			)}

			{iconPosition === ButtonIconPosition.right ? buttonIconMarkup : null}
		</tag>
	);
}

export default castToString(Button);
