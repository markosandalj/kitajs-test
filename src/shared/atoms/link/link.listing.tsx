import classNames from "classnames";

export type LinkProps = {
	color: "black" | "grey" | "blue" | "white";
	disabled: boolean;
	centered: boolean;
	noUnderline: boolean;
};

export type LinkListingProps = {
	links: LinkProps[];
};

function LinkListing({ links }: LinkListingProps) {
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			{links.map((link) => {
				const classes = classNames(
					"link",
					link.color && `link--${link.color}`,
					link.disabled && "disabled",
					link.centered && "link--centered",
					link.noUnderline && "link--no-underline",
				);

				return (
					<span style={{ padding: "1rem" }}>
						<a class={classes}>{link.color}</a>
					</span>
				);
			})}
		</div>
	);
}

export default LinkListing;
