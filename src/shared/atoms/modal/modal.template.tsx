export type ModalProps = {
	id: string;
	hidden?: boolean;
	title?: string;
	description?: string;
	image?: string;
	children: JSX.Element | string;
	footerContent?: JSX.Element | string;
	headerContent?: JSX.Element | string;
};

function Modal({
	id,
	hidden = true,
	children,
	title,
	description,
	image,
	footerContent,
	headerContent,
}: ModalProps) {
	const Header = headerContent ? <div class="modal__header">{headerContent}</div> : null;
	const Footer = footerContent ? <div class="modal__footer">{footerContent}</div> : null;

	const Image = image ? <img src={image} alt="modal-image" class="modal__image" /> : null;
	const Title = title ? <div class="modal__title title-h3">{title}</div> : null;
	const Description = description ? <p>{description}</p> : null;

	const shouldShowText = title || description || image;

	return (
		<div class="modal js-modal-container" id={id} hidden={hidden}>
			<div class="modal__backdrop js-modal-backdrop"></div>

			<div class="modal__content js-modal-content">
				<div class="modal__close-button js-modal-close"></div>

				{Header}

				<div class="modal__body">
					{shouldShowText ? (
						<div class="modal__text">
							{Title}
							{Image}
							{Description}
						</div>
					) : null}

					{children}
				</div>

				{Footer}
			</div>
		</div>
	);
}

export default Modal;
