export type ClassComponentConfiguration = {
	selector: string;
	Class: new (element: Element, options?: unknown) => unknown;
	options?: unknown;
};

export type WebComponentConfiguration = {
	name: string;
	Class: CustomElementConstructor;
	options?: ElementDefinitionOptions;
};

export function initializeClassComponents(componentConfiguration: Array<ClassComponentConfiguration>) {
	componentConfiguration.forEach((configuration) => {
		document
			.querySelectorAll(configuration.selector)
			.forEach((element) => new configuration.Class(element, configuration.options));
	});
}

export function initializeWebComponents(componentConfiguration: Array<WebComponentConfiguration>) {
	componentConfiguration.forEach((configuration) => {
		if (!customElements.get(configuration.name)) {
			customElements.define(configuration.name, configuration.Class, configuration.options);
		}
	});
}
