import Button from "@shared/atoms/button/button.template";
import type { TestProps } from "./test.types";

export default function Test({ buttonHref, buttonLabel, description, title }: TestProps) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
			<Button href={buttonHref} color="blue" label={buttonLabel} tag="a" variant="primary" />
		</div>
	);
}
