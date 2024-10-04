/// <reference types="@kitajs/html/jsx.d.ts" />

import classNames from "classnames";
import { ButtonIconPosition, ButtonProps, ButtonTag } from "./button.types";

function Button({
	tag = ButtonTag.button,
	variant,
	color,
	size,
	label,
	icon,
	iconPosition,
	secondaryLabel,
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

	const ButtonIcon = icon ? (
		<span class="button__icon">
			<img src={icon} alt="icon" />
		</span>
	) : null;

	const ButtonLabel = <span class="button__label js-button-label">{label}</span>;

	return (
		<tag {...rest} of={tag} class={classes}>
			{iconPosition === ButtonIconPosition.left ? ButtonIcon : null}

			{secondaryLabel ? (
				<div class="button__label-container">
					{ButtonLabel}
					<span class="button__label button__label--secondary">{secondaryLabel}</span>
				</div>
			) : (
				ButtonLabel
			)}

			{iconPosition === ButtonIconPosition.right ? ButtonIcon : null}
		</tag>
	);
}

export default Button;
