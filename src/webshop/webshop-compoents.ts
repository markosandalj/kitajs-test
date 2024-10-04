import { sharedClassComponents, sharedWebComponents } from "../shared/shared";

import Availability from "./services-funnel/shared/availability/availability";

export const classComponentsConfiguration = [
	...sharedClassComponents,
	{
		Class: Availability,
		selector: ".availability",
	},
];

export const webComponentsConfiguration = [...sharedWebComponents];
