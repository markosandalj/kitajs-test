import { cn } from "@shared/utils/cn";
import { castToString } from "@storybook-only/utils/castToString";

type ZigzagImagePosition = "left" | "right" | "center";

type ZigzagItemShadowAxis = "horizontal" | "vertical" | "diagonal";
type ZigzagItemShadowPosition = "top" | "bottom" | "left" | "right";

type ZigzagLayer = {
	axis: ZigzagItemShadowAxis;
	position: ZigzagItemShadowPosition[];
};

export type ZigzagItemProps = {
	imagePosition: "left" | "right" | "center";
	firstShadowLayer?: {
		desktop: ZigzagLayer;
		mobile: ZigzagLayer;
	};
	secondShadowLayer?: {
		desktop: ZigzagLayer;
		mobile: ZigzagLayer;
	};
	eyebrowTitle: string;
	title: string;
	description: string;
	link?: {
		label: string;
		href: string;
	};
	imageSrc: string;
};

const zigzagLayerToClass = (layer?: ZigzagLayer) => {
	return layer ? cn(layer.axis, layer.position.join(" ")) : undefined;
};

function ZigzagItem({
	imagePosition,
	firstShadowLayer,
	secondShadowLayer,
	description,
	eyebrowTitle,
	title,
	link,
	imageSrc,
}: ZigzagItemProps) {
	const imagePositionClasses: Record<ZigzagImagePosition, string> = {
		left: "zigzag-item--image-left",
		right: "zigzag-item--image-right",
		center: "zigzag-item--image-center",
	};

	const firstShadowClasses = zigzagLayerToClass(firstShadowLayer?.desktop);
	const mobileFirstShadowClasses = zigzagLayerToClass(firstShadowLayer?.mobile);

	const secondShadowClasses = zigzagLayerToClass(secondShadowLayer?.desktop);
	const mobileSecondShadowClasses = zigzagLayerToClass(secondShadowLayer?.mobile);

	return (
		<div class={cn("zigzag-item", imagePositionClasses[imagePosition])}>
			<div class="zigzag-item__image-wrapper">
				<div class="zigzag-item__image">
					{firstShadowLayer && (
						<div
							class={cn("parallax-element", firstShadowClasses)}
							data-desktop-shadow={firstShadowClasses}
							data-mobile-shadow={mobileFirstShadowClasses}
						>
							<div
								class={cn("parallax-element", secondShadowClasses || "d-block d-sm-none")}
								data-desktop-shadow={secondShadowClasses || "d-block d-sm-none"}
								data-mobile-shadow={mobileSecondShadowClasses}
							></div>
						</div>
					)}

					<img src={imageSrc} alt="" />
				</div>
			</div>
			<div class="zigzag-item__content">
				<div class="zigzag-item__eyebrow-title">{eyebrowTitle}</div>
				<h2 class="zigzag-item__title">{title}</h2>
				<p class="zigzag-item__description">{description}</p>

				{link && (
					<a
						class="zigzag-item__link button button--secondary button--blue button--small"
						href={link.href}
					>
						{link.label}
					</a>
				)}
			</div>
		</div>
	);
}

export default castToString(ZigzagItem);
