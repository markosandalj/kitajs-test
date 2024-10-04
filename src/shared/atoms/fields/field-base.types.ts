export const fieldBaseClasses = "field js-form-field";
export const fieldInputClasses = "field__input js-form-input";
export const fieldLabelClasses = "field__label js-form-label";
export const fieldHelpTextClasses = "field__help-text";

export type FieldBaseProps = {
	id: string;
	name: string;
	label: string;
	disabled?: boolean;
	required?: boolean;
	helpText?: string;
	attr?: JSX.HtmlTag;
	inputAttr?: JSX.HtmlInputTag;
	labelAttr?: JSX.HtmlTag;
};

export const sharedArgTypes = {
	required: {
		control: { type: "boolean" },
	},
	disabled: {
		control: { type: "boolean" },
	},
	name: {
		control: false,
		table: {
			disable: true,
		},
	},
	id: {
		control: false,
		table: {
			disable: true,
		},
	},
} as const;
