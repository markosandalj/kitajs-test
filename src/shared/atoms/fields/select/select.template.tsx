import classNames from "classnames";

import {
	fieldBaseClasses,
	fieldHelpTextClasses,
	fieldInputClasses,
	fieldLabelClasses,
	FieldBaseProps,
} from "../field-base.types";

type SelectOption = JSX.HtmlOptionTag & {
	value: string;
	label: string;
};

export type SelectProps = FieldBaseProps & {
	label?: string;
	placeholder?: string;
	options: Array<SelectOption>;
	inputAttr: JSX.HtmlSelectTag;
};

function Select({
	name,
	id,
	disabled = false,
	required = false,
	label,
	placeholder,
	helpText,
	attr,
	inputAttr,
	labelAttr,
	options,
}: SelectProps) {
	const fieldClasses = classNames(fieldBaseClasses, "field-select", attr?.class || "");

	const inputClasses = classNames(fieldInputClasses, "field-select__input", inputAttr?.class || "");

	const labelClasses = classNames(fieldLabelClasses, "field-select__label", labelAttr?.class || "");

	const helpTextClasses = classNames(fieldHelpTextClasses, "field-select__help-text");

	const Label = label ? (
		<label {...labelAttr} for={id} class={labelClasses}>
			{label}
		</label>
	) : null;

	const Placeholder = placeholder ? (
		<option value="" disabled selected>
			{placeholder}
		</option>
	) : null;

	const HelpText = helpText ? <div class={helpTextClasses}>{helpText}</div> : null;

	return (
		<div class={fieldClasses}>
			{Label}
			<div class="field-select__wrapper">
				<select
					{...inputAttr}
					name={name}
					title={name}
					id={id}
					disabled={disabled}
					required={required}
					class={inputClasses}
				>
					{Placeholder}
					{options.map((option) => (
						<option value={option.value} selected={option.selected}>
							{option.label}
						</option>
					))}
				</select>
			</div>
			{HelpText}
		</div>
	);
}

export default Select;
