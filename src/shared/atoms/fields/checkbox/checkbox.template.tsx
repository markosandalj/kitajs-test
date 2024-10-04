import classNames from "classnames";
import {
	fieldBaseClasses,
	fieldHelpTextClasses,
	fieldInputClasses,
	fieldLabelClasses,
	type FieldBaseProps,
} from "../field-base.types";

export type CheckboxProps = {
	type: "checkbox";
	checked?: boolean;
} & FieldBaseProps;

function Checkbox({
	type = "checkbox",
	name,
	id,
	checked = false,
	disabled = false,
	required = false,
	label,
	helpText,
	attr,
	inputAttr,
	labelAttr,
}: CheckboxProps) {
	const fieldClasses = classNames(fieldBaseClasses, "field-checkbox", attr?.class || "");

	const inputClasses = classNames(fieldInputClasses, "field-checkbox__input", inputAttr?.class || "");

	const labelClasses = classNames(fieldLabelClasses, "field-checkbox__label", labelAttr?.class || "");

	const helpTextClasses = classNames(fieldHelpTextClasses, "field-checkbox__help-text");

	return (
		<div {...attr} class={fieldClasses}>
			<label for={id} class="field-checkbox__wrapper">
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
				<span {...labelAttr} class={labelClasses}>
					{label}
				</span>
				<span class="field-checkbox__indicator"></span>
				<span class="field-checkbox__backdrop"></span>
			</label>
			{helpText && <div class={helpTextClasses}>{helpText}</div>}
		</div>
	);
}

export default Checkbox;
