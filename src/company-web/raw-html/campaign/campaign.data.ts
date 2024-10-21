import type { CampaignProps } from "./campaign.template";

const campaignData: CampaignProps = {
	mainTitle: 'Sve što želim je <span class="campaign__red">sve!</span>',
	mainEyebrowTitle: "Nova A1 ponuda",
	zigzagIntro:
		"Kako svakodnevica postaje sve užurbanija, potrebe naših korisnika mijenjaju se iz dana u dan. Zato ti na jednom mjestu želimo pružiti praktična rješenja koja olakšavaju život. Od sada pronađi još više usluga na jednom mjestu i aktiviraj ih u samo nekoliko klikova.",
	zigzagItems: [
		{
			title: "Neograničeni internet u svim tarifama",
			eyebrowTitle: "Mobilne tarife",
			description:
				"Surfaj neograničeno na svom mobitelu uz nove tarife na pretplatu koje ti osiguravaju bezbrižnost. Sada možeš iskoristiti i besplatni probni period na naše dodatne usluge iz svijeta osiguranja, internet sigurnosti i zabave.",
			link: { href: "/privatni/mobiteli/tarife-na-pretplatu", label: "Pogledaj detalje" },
			imageSrc: "/images/campaign-1.png",
			imagePosition: "left",
			firstShadowLayer: {
				desktop: { axis: "vertical", position: ["top"] },
				mobile: { axis: "horizontal", position: ["left"] },
			},
			secondShadowLayer: undefined,
		},
		{
			title: "Nove gigabitne brzine interneta",
			eyebrowTitle: "Internet",
			description:
				"Surfaj uz brzine do 2 Gbit/s i iskusi najbolju WiFi pokrivenost u svakom kutku svog doma. Još bolja oprema omogućuje bezbrižno korištenje interneta svim ukućanima.",
			link: { href: "/privatni/internet/kucni-internet", label: "Saznaj više" },
			imageSrc: "/images/campaign-2.png",
			imagePosition: "right",
			firstShadowLayer: {
				desktop: { axis: "horizontal", position: ["right"] },
				mobile: { axis: "horizontal", position: ["right"] },
			},
			secondShadowLayer: {
				desktop: { axis: "horizontal", position: ["right"] },
				mobile: { axis: "horizontal", position: ["right"] },
			},
		},
		{
			title: "TV usluga dostupna na svim ekranima",
			eyebrowTitle: "A1 TV usluga",
			description:
				"Gledaj omiljeni TV sadržaj na televizoru, mobitelu, računalu ili tabletu - u bilo kojoj sobi i bez dodatnih kablova.",
			link: { href: "/privatni/televizija", label: "Kreni" },
			imageSrc: "/images/campaign-3.png",
			imagePosition: "left",
			firstShadowLayer: {
				desktop: { axis: "horizontal", position: ["left"] },
				mobile: { axis: "horizontal", position: ["left"] },
			},
			secondShadowLayer: undefined,
		},
		{
			title: "Dodatne usluge za ugodniju svakodnevicu",
			eyebrowTitle: "Dodatne usluge",
			description:
				"Od sada pronađi još više rješenja iz različitih životnih sfera na jednom mjestu. U nekoliko klikova isprobaj naše dodatne usluge iz svijeta osiguranja, internet sigurnosti, gaminga i zabave koje ti olakšavaju i obogaćuju život.",
			link: { href: "/privatni/dodatne-usluge", label: "Upoznaj nove usluge" },
			imageSrc: "/images/campaign-3.png",
			imagePosition: "right",
			firstShadowLayer: {
				desktop: { axis: "diagonal", position: ["bottom", "right"] },
				mobile: { axis: "horizontal", position: ["right"] },
			},
			secondShadowLayer: {
				desktop: { axis: "diagonal", position: ["bottom", "right"] },
				mobile: { axis: "horizontal", position: ["right"] },
			},
		},
		{
			title: "Povezivanje usluga donosi uštede",
			eyebrowTitle: "MOZAIK",
			description:
				"Složi svoju jedinstvenu kombinaciju u MOZAIK-u i ostvari mjesečne uštede. Isprobaj i naše dodatne usluge koje ti olakšavaju i obogaćuju život.",
			link: { href: "/privatni/mozaik", label: "Idi na MOZAIK" },
			imageSrc: "/images/campaign-3.png",
			imagePosition: "left",
			firstShadowLayer: {
				desktop: { axis: "vertical", position: ["bottom"] },
				mobile: { axis: "horizontal", position: ["left"] },
			},
			secondShadowLayer: {
				desktop: { axis: "vertical", position: ["bottom"] },
				mobile: { axis: "horizontal", position: ["left"] },
			},
		},
		{
			title: "Apsolutno sve na tvom dlanu",
			eyebrowTitle: "Moj A1 aplikacija",
			description:
				"Preuzmi Moj A1 aplikaciju s kojom brzo i jednostavno upravljaš uslugama i troškovima na jednom mjestu. Uz to, u samo nekoliko klikova aktiviraj naše dodatne usluge iz svijeta osiguranja, internet sigurnosti, gaminga i zabave.",
			link: { href: "/moj-a1", label: "Saznaj više" },
			imageSrc: "/images/campaign-3.png",
			imagePosition: "center",
			firstShadowLayer: {
				desktop: { axis: "horizontal", position: ["left"] },
				mobile: { axis: "horizontal", position: ["right"] },
			},
			secondShadowLayer: {
				desktop: { axis: "horizontal", position: ["left"] },
				mobile: { axis: "horizontal", position: ["right"] },
			},
		},
	],
};

export default campaignData;
