export type ClassComponentConfiguration = {
	selector: string;
	Class: any;
	options?: any;
};

export type WebComponentConfiguration = {
	name: string;
	Class: any;
};

export function initializeClassComponents(componentConfiguration: Array<ClassComponentConfiguration>) {
	componentConfiguration.forEach((configuration) => {
		console.log(document.querySelectorAll(configuration.selector));
		document
			.querySelectorAll(configuration.selector)
			.forEach((element) => new configuration.Class(element, configuration.options));
	});
}

export function initializeWebComponents(componentConfiguration: Array<WebComponentConfiguration>) {
	componentConfiguration.forEach((configuration) => {
		if (!customElements.get(configuration.name)) {
			customElements.define(configuration.name, configuration.Class);
		}
	});
}
