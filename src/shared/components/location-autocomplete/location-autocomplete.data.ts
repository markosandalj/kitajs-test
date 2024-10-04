export const locationAutocompleteData = {
	cityInput: {
		name: "TechnologyAvailabilityForm_City",
		placeholder: "Npr. Zagreb",
		label: "Mjesto",
		errorMsg: "Mjesto ne može biti prazno",
		freeEntryErrorMsg: "Odaberi mjesto iz liste",
		required: true,
	},
	streetInput: {
		name: "TechnologyAvailabilityForm_Street",
		placeholder: "Npr. Savska",
		label: "Ulica",
		errorMsg: "Molimo upišite ulicu za nastavak",
		required: true,
	},
	streetNumberInput: {
		name: "TechnologyAvailabilityForm_StreetNumber",
		placeholder: "Npr. 32",
		label: "Kućni broj",
		errorMsg: "Molimo upišite kućni broj za nastavak",
		required: true,
	},
	extraHiddenInputs: [
		{
			name: "SynchronizerToken",
			value: "0878e280007239be8a93c9c1e07860a2fffbd9519ed7e46056ccd2b4a86a62be",
		},
		{
			name: "TechnologyAvailabilityForm_Country",
			type: "Country",
		},
		{
			name: "TechnologyAvailabilityForm_PostalCode",
			type: "PostalCode",
		},
		{
			name: "TechnologyAvailabilityForm_LMID",
			type: "LMID",
		},
	],
	btnText: "Provjera dostupnosti",
};
