import type { Meta, StoryObj } from "@storybook/html";
import Modal, { ModalProps } from "./modal.template";
import FeaturesList from "@webshop/shared/features-list/features-list.template";

const meta: Meta<ModalProps> = { title: "01 Style Guide/Modal" };
export default meta;

type Story = StoryObj<ModalProps>;

export const ModalStory: Story = {
	render: (args) => Modal(args) as string,
	args: {},
	name: "Modal",
};

export const ModalFeaturesListStory: Story = {
	name: "Modal - features list",
	render: (args) => Modal(args) as string,
	args: {
		id: "modal-5",
		title: "Osiguranje ekrana",
		hidden: false,
		children: (
			<>
				{FeaturesList({
					items: [
						{
							icon: {
								src: "/images/icons/icon-mobile.svg",
								alt: "mobile-icon",
							},
							text: "Svaka peta osoba u prvih godinu dana ošteti svoj uređaj.",
						},
						{
							icon: {
								src: "/images/icons/icon-euro.svg",
								alt: "euro-icon",
							},
							text: "Prosječan trošak zamjene ekrana iznosi 132,72 €.",
						},
						{
							icon: {
								src: "/images/icons/icon-documents.svg",
								alt: "documents-icon",
							},
							text: "Osiguranje plaćaš ovisno o cijeni tvog uređaja, a plaćaš ga mjesečno putem A1 računa bez ugovorne obveze, možeš ga otkazati bilo kada.",
						},
						{
							icon: {
								src: "/images/icons/icon-shopping-cart.svg",
								alt: "shopping-cart-icon",
							},
							text: "Osiguranje plaćaš ovisno o cijeni tvog uređaja, a plaćaš ga mjesečno putem A1 računa bez ugovorne obveze, možeš ga otkazati bilo kada.",
						},
					],
					footerContent: (
						<>
							Saznaj više na{" "}
							<span class="link link--black">
								https://www.a1.hr/privatni/mobiteli/osiguranje-ekrana
							</span>
							.
						</>
					),
					image: {
						src: "/images/gallery/4.jpeg",
						alt: "shopping-cart-icon",
					},
				})}
			</>
		),
	},
};
