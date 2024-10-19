import { castToString } from "../utils/castToString";

export type ContentTemplate<T extends object> = { content: T; showContentOverlay: boolean };

function EditableContentOverlay({
	label,
	children,
	isActive,
}: {
	label: string;
	children: JSX.Element;
	isActive: boolean;
}) {
	if (isActive)
		return (
			<div class="content-wrapper">
				<div class="content-wrapper__overlay">{label}</div>
				{children}
			</div>
		);

	return children;
}

export default castToString(EditableContentOverlay);
