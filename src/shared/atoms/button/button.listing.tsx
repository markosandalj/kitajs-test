import Button from "./button.template";
import { ButtonProps } from "./button.types";

export type ButtonListingProps = {
	buttons: Array<ButtonProps>;
};

function ButtonListing({ buttons }: ButtonListingProps) {
	return (
		<div style={{ padding: "2rem" }}>
			{buttons.map((button) => (
				<div style={{ padding: "2rem" }}>{<Button {...button} />}</div>
			))}
		</div>
	);
}

export default ButtonListing;
