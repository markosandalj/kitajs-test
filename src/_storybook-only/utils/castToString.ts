export function castToString<TProps extends Object>(element: (props: TProps) => JSX.Element) {
	return element as (props: TProps) => string;
}
