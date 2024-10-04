type FeatureItem = {
	icon?: {
		src: string;
		alt: string;
	};
	text: string;
};

export type FeaturesListProps = {
	items: FeatureItem[];
	footerContent?: JSX.Element | string;
	image?: {
		src: string;
		alt: string;
	};
};

function FeaturesList({ items, footerContent, image }: FeaturesListProps) {
	return (
		<div class="features-list">
			{items.map((item) => {
				return (
					<div class="features-list__item">
						<span class="features-list__item-icon">
							{item.icon ? <img src={item.icon.src} alt={item.icon.alt} /> : null}
						</span>
						<span class="features-list__item-text">{item.text}</span>
					</div>
				);
			})}

			{footerContent ? <div class="features-list__footer">{footerContent}</div> : null}

			{image ? (
				<div class="image">
					<img src={image.src} alt={image.alt} />
				</div>
			) : null}
		</div>
	);
}

export default FeaturesList;
