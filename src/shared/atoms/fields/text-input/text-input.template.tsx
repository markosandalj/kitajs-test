import classNames from "classnames";
import {
	fieldBaseClasses,
	fieldHelpTextClasses,
	fieldInputClasses,
	fieldLabelClasses,
	FieldBaseProps,
} from "../field-base.types";

export type TextInputProps = FieldBaseProps & {
	type: "text";
	placeholder?: string;
	inputPrefix?: string;
	inputSufix?: string;
};

function TextInput({
	type = "text",
	inputPrefix,
	inputSufix,
	disabled = false,
	required = false,
	name,
	id,
	label,
	helpText,
	placeholder,
	attr,
	inputAttr,
	labelAttr,
}: TextInputProps) {
	const fieldClasses = classNames(fieldBaseClasses, "field-text", attr?.class || "");

	const inputClasses = classNames(fieldInputClasses, "field-text__input", inputAttr?.class || "");

	const labelClasses = classNames(fieldLabelClasses, "field-text__label", labelAttr?.class || "");

	const helpTextClasses = classNames(fieldHelpTextClasses, "field-text__help-text");

	const InputPrefix = inputPrefix ? <span class="field-text__input-prefix">{inputPrefix}</span> : null;

	const InputSufix = inputSufix ? <span class="field-text__input-sufix">{inputSufix}</span> : null;

	const Label = label ? (
		<label {...labelAttr} for={id} class={labelClasses}>
			{label}
		</label>
	) : null;

	const HelpText = helpText ? <div class={helpTextClasses}>{helpText}</div> : null;

	return (
		<div class={fieldClasses}>
			{InputPrefix}
			{InputSufix}
			<input
				{...inputAttr}
				type={type}
				disabled={disabled}
				required={required}
				placeholder={placeholder}
				name={name}
				id={id}
				class={inputClasses}
			/>
			{Label}
			{HelpText}
		</div>
	);
}

export default TextInput;
