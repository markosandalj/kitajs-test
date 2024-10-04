import classNames from "classnames";
import {
	fieldBaseClasses,
	fieldHelpTextClasses,
	fieldInputClasses,
	fieldLabelClasses,
	FieldBaseProps,
} from "../field-base.types";

export type RadioProps = FieldBaseProps & {
	type: "radio";
	checked?: boolean;
	icon?: string;
};

function Radio({
	type = "radio",
	name,
	id,
	checked = false,
	disabled = false,
	required = false,
	label,
	icon,
	helpText,
	attr,
	inputAttr,
	labelAttr,
}: RadioProps) {
	const fieldClasses = classNames(fieldBaseClasses, "field-radio", attr?.class || "");

	const inputClasses = classNames(fieldInputClasses, "field-radio__input", inputAttr?.class || "");

	const labelClasses = classNames(fieldLabelClasses, "field-radio__label", labelAttr?.class || "");

	const helpTextClasses = classNames(fieldHelpTextClasses, "field-radio__help-text");

	const Icon = icon ? (
		<img class="field-radio__label-image" src="{{ icon }}" alt="" loading="lazy" />
	) : null;

	const HelpText = helpText ? <div class={helpTextClasses}>{helpText}</div> : null;

	return (
		<div {...attr} class={fieldClasses}>
			<input
				{...inputAttr}
				disabled={disabled}
				required={required}
				type={type}
				name={name}
				id={id}
				checked={checked}
				class={inputClasses}
			/>
			<label for={id} class="field-radio__wrapper">
				<span class="field-radio__indicator"></span>
				<span class="field-radio__backdrop"></span>
				<span {...labelAttr} class={labelClasses}>
					{Icon}
					{label}
				</span>
			</label>
			{HelpText}
		</div>
	);
}

export default Radio;
