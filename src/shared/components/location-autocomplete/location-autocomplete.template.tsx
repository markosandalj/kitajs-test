import Button from "@shared/atoms/button/button.template";
import { ButtonColor, ButtonSize, ButtonTag, ButtonVariant } from "@shared/atoms/button/button.types";

type LocationAutocompleteInput = JSX.HtmlInputTag & {
	freeEntryErrorMsg?: string;
	errorMsg?: string;
	lengthLimit?: number;
	label: string;
};

export type LocationAutocompleteProps = {
	isReadOnly?: boolean;
	extraHiddenInputs?: Array<JSX.HtmlInputTag>;
	styleModifier?: string;
	cityInput?: LocationAutocompleteInput;
	streetInput?: LocationAutocompleteInput;
	streetNumberInput?: LocationAutocompleteInput;
	floorInput?: LocationAutocompleteInput;
	btnText: string;
	fieldsWrapperClass?: string;
};

const LocationAutocomplete = ({
	isReadOnly,
	styleModifier,
	extraHiddenInputs,
	cityInput,
	streetInput,
	streetNumberInput,
	fieldsWrapperClass,
	floorInput,
	btnText,
}: LocationAutocompleteProps) => {
	return (
		<section class={`location-autocomplete ${isReadOnly ? "disabled" : ""}`} data-location-autocomplete>
			<div class={`form-layout ${styleModifier}`}>
				<fieldset class="location-autocomplete__hidden">
					{extraHiddenInputs &&
						extraHiddenInputs.map((input) => (
							<input
								hidden
								name={input.name}
								value={input.value}
								data-field-type={input.type}
							/>
						))}
					{cityInput && (
						<input hidden name={cityInput.name} value={cityInput.value} data-field-type="city" />
					)}
					{streetInput && (
						<input
							hidden
							name={streetInput.name}
							value={streetInput.value}
							data-field-type="street"
						/>
					)}
					{streetNumberInput && (
						<input
							hidden
							name={streetNumberInput.name}
							value={streetNumberInput.value}
							data-field-type="streetNumber"
						/>
					)}
				</fieldset>
				<fieldset class="location-autocomplete-step-1">
					<div class={`form-layout ${styleModifier} ${fieldsWrapperClass}`}>
						<div class="field field-text js-form-field">
							{cityInput && (
								<div class="city">
									<div
										contenteditable="true"
										class="field-text__input js-form-input content-editable content-editable-mjesto"
										placeholder={cityInput.placeholder}
										aria-autocomplete="list"
										data-hidden-input-name={cityInput.name}
										data-error-msg={cityInput.errorMsg}
										data-free-entry-error-msg={cityInput.freeEntryErrorMsg}
										required={cityInput.required}
										disabled={cityInput.disabled}
									>
										{cityInput.value}
									</div>
									{cityInput.label && (
										<label for={cityInput.name} class="field-text__label">
											{cityInput.label}
										</label>
									)}
								</div>
							)}
						</div>
					</div>
				</fieldset>
				<fieldset class={`location-autocomplete-step-2 ${!isReadOnly ? "d-none" : ""}`}>
					<div class={`form-layout ${styleModifier} ${fieldsWrapperClass}`}>
						<div class="field field-text js-form-field">
							{streetInput && (
								<div class="street">
									<div
										contenteditable="true"
										class="field-text__input js-form-input content-editable content-editable-street"
										placeholder={streetInput.placeholder}
										aria-autocomplete="list"
										data-hidden-input-name={streetInput.name}
										data-error-msg={streetInput.errorMsg}
										data-max-length={streetInput.lengthLimit}
										required={streetInput.required}
										disabled={streetInput.disabled || isReadOnly}
									>
										{streetInput.value}
									</div>
									{streetInput.label && (
										<label for={streetInput.name} class="field-text__label">
											{streetInput.label}
										</label>
									)}
								</div>
							)}
						</div>
						<div class="field field--two-fifths-width field-text js-form-field">
							{streetNumberInput && (
								<div class="streetnumber">
									<div
										contenteditable="true"
										class="field-text__input js-form-input content-editable content-editable-street-number"
										placeholder={streetNumberInput.placeholder}
										aria-autocomplete="list"
										data-hidden-input-name={streetNumberInput.name}
										data-error-msg={streetNumberInput.errorMsg}
										data-max-length={streetNumberInput.lengthLimit}
										required={streetNumberInput.required}
										disabled={streetNumberInput.disabled}
									>
										{streetNumberInput.value}
									</div>
									{streetNumberInput.label && (
										<label for={streetNumberInput.name} class="field-text__label">
											{streetNumberInput.label}
										</label>
									)}
								</div>
							)}
						</div>
						{floorInput && (
							<div class="field">
								<input
									type="number"
									name={floorInput.name}
									value={floorInput.value}
									required
									min="-1"
									max="100"
									placeholder="1"
								/>
							</div>
						)}
						{btnText && (
							<Button
								tag={ButtonTag.button}
								variant={ButtonVariant.primary}
								color={ButtonColor.red}
								size={ButtonSize.fullWidth}
								label={btnText}
								class={
									"js-button-order loader-button js-submit-button js-loader-button js-has-recaptcha grecaptcha"
								}
								attr={{
									"data-callback": "onSubmit",
								}}
							/>
						)}
					</div>
				</fieldset>
			</div>
		</section>
	);
};

export default LocationAutocomplete;
