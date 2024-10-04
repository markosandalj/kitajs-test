declare namespace JSX {
	// @ts-expect-error this is a hack to make sure that the global JSX.Element is string
	type Element = string;
}
