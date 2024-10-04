export function castToString<TProps extends object>(element: (props: TProps) => JSX.Element) {
	return element as (props: TProps) => string;
}
