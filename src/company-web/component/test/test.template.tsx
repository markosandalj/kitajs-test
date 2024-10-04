import type { ButtonColor } from "@shared/atoms/button/button.types";
import { castToString } from "../../../_storybook-only/utils/castToString";
import Button from "../../../shared/atoms/button/button.template";
import EditableContentOverlay, {
	type ContentTemplate,
} from "../../../_storybook-only/EditableContentOverlay/EditableContentOverlay.template";

export type TestProps = ContentTemplate<{
	title: string;
	description?: string;
	button?: {
		label: string;
		href: string;
		color: ButtonColor;
	};
}>;

function Test({ content: { title, button, description }, showContentOverlay }: TestProps) {
	return (
		<div class="test">
			<EditableContentOverlay label="title" isActive={showContentOverlay}>
				<h1>{title}</h1>
			</EditableContentOverlay>

			<EditableContentOverlay label="description" isActive={showContentOverlay}>
				<p>{description}</p>
			</EditableContentOverlay>

			{button && (
				<EditableContentOverlay label="button.label" isActive={showContentOverlay}>
					<Button
						tag="a"
						color={button.color}
						label={button.label}
						href={button.href}
						variant="primary"
					/>
				</EditableContentOverlay>
			)}
		</div>
	);
}

export default castToString(Test);
