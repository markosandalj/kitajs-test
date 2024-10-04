import {
	initializeClassComponents,
	initializeWebComponents,
	type ClassComponentConfiguration,
	type WebComponentConfiguration,
} from "./initialize-components";

type Props = {
	classComponentsConfiguration: Array<ClassComponentConfiguration>;
	webComponentsConfiguration: Array<WebComponentConfiguration>;
};

export default function ({ classComponentsConfiguration = [], webComponentsConfiguration = [] }: Props) {
	const boundInitializeClassComponents = initializeClassComponents.bind(null, classComponentsConfiguration);
	const boundInitializeWebComponents = initializeWebComponents.bind(null, webComponentsConfiguration);

	console.log("DOMContentLoaded");

	if (document.readyState !== "loading") {
		initializeClassComponents(classComponentsConfiguration);
		initializeWebComponents(webComponentsConfiguration);
	} else {
		document.addEventListener("DOMContentLoaded", boundInitializeClassComponents);
		document.addEventListener("DOMContentLoaded", boundInitializeWebComponents);
	}
}
