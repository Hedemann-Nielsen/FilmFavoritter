import ReactModal from "react-modal";
import "./Styles.Modal.sass";

ReactModal.setAppElement("#root");

export function Modal({ isOpen, onRequestClose, children }) {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Modal"
			className="modal"
			overlayClassName="overlay">
			{children}
		</ReactModal>
	);
}
