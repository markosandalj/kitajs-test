import { swapPlaceholderWithElements } from "@shared/utils/swapPlaceholderWithElements";
import ZigzagItem, { type ZigzagItemProps } from "./partials/zigzag-item/zigzag-item.template";
import { castToString } from "@storybook-only/utils/castToString";

export type CampaignProps = {
	mainEyebrowTitle: string;
	mainTitle: string;
	zigzagIntro: string;
	zigzagItems: ZigzagItemProps[];
};

function Campaign({ mainEyebrowTitle, mainTitle, zigzagIntro, zigzagItems }: CampaignProps) {
	return (
		<main class="campaign js-parallax-root js-draw-line-parallax">
			<div class="container container--sm">
				<div class="campaign__intro col-10 offset-1">
					<div class="campaign__intro-eyebrow">{mainEyebrowTitle}</div>
					<h1 class="campaign__title">
						{swapPlaceholderWithElements(mainTitle, [<span class="campaign__red" />])}
					</h1>
				</div>

				<div class="campaign__video-wrapper">
					<video
						width="100%"
						preload="auto"
						autoPlay
						loop
						muted
						playsInline
						class="js-responsive-video"
						data-desktop-vid="https://ssc.a1.hr/documents/10307706/1453677226/VIDEO-RENTANET-MOJ-A1.mp4"
						data-mobile-vid="https://ssc.a1.hr/documents/10307706/1461439119/naocale_608x760_900kbps.mp4"
					/>
				</div>

				<p class="campaign__zigzag-intro col-10 offset-1">{zigzagIntro}</p>

				<section class="campaign__zig-zag-section">
					<div class="campaign__zigzag-background">
						<svg
							width="870"
							height="2453"
							viewBox="0 0 870 2453"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								id="curved-line"
								d="M170.501 1.50977C202.001 48.0098 222.132 89.1552 318.501 48.0099C445.001 -5.99982 489 78.0002 445.001 181.5C381.662 330.497 807.501 501.5 608.501 501.5C534.001 501.5 698.501 348 773.501 412.5C846.606 475.37 135 991.5 232.5 771C417.271 353.134 415.363 1294.64 598 1320.5C771 1345 734.501 1439.2 694.501 1510C644.501 1598.5 580.501 1496 629.001 1496C677.501 1496 630.66 1827.5 315.001 1827.5C297.002 1827.5 90.0255 1788.58 44.0023 1827.5C-56.4991 1912.5 47.0007 2040.5 126.501 2023.5C206.001 2006.5 267.499 1913.33 214 1934C191.999 1942.5 64.5006 2110 234.501 2088C404.501 2066 499.34 2054.67 482.001 1999.5C471.001 1964.5 379.001 1936 417.501 2073C448.301 2182.6 609.001 2110.33 685.501 2103C823 2080 811.501 2138.5 780.501 2148C716.812 2167.52 683.501 2017.5 811.501 2044.5C939.501 2071.5 839.501 2437 611.001 2451.5"
								stroke="#551EE6"
								strokeOpacity="0.1"
								strokeWidth="3"
								strokeLinecap="round"
							/>
						</svg>
					</div>

					{zigzagItems.map((item) => (
						<ZigzagItem {...item} />
					))}
				</section>
			</div>
		</main>
	);
}

export default castToString(Campaign);
