export const swapPlaceholderWithElements = (text: string, elements: JSX.Element[]) => {
	const elementsPrefixSuffix = elements.map((element) => {
		const stringElement = element.toString();

		if (stringElement.includes("</")) {
			let [prefix, suffix] = stringElement.split("</");
			suffix = "</" + suffix;
			prefix = prefix?.trim();

			return { prefix, suffix };
		} else if (stringElement.includes("/>")) {
			const tag = stringElement.substring(1).split(" ")[0];
			const prefix = stringElement.split("/>")[0] + ">";
			const suffix = "</" + tag + ">";

			return { prefix, suffix };
		} else {
			console.error("Invalid element passed to swapPlaceholderWithElements: ", element);
			return { prefix: "", suffix: "" };
		}
	});

	const a = text.split("%%");

	let result = "";

	a.forEach((segment, index) => {
		const isInsideElement = index % 2 === 1;
		const elementIndex = (index - 1) / 2;
		console.log({ index, elementIndex, isInsideElement });

		if (isInsideElement) {
			const element = elementsPrefixSuffix[elementIndex];
			console.log({ element });

			if (!element) {
				console.error("[swapPlaceholderWithElements] Element not found for index: ", elementIndex);
				return;
			}

			result += `${element.prefix}${segment}${element.suffix}`;
		} else {
			result += segment;
		}
	});

	return result;
};
