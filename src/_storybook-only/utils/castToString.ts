import { type PropsWithChildren, type Component } from "@kitajs/html";

export function castToString<TProps extends PropsWithChildren>(element: Component<TProps>) {
	return element as (props: TProps) => string;
}
