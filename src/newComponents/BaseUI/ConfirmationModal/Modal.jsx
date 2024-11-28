import { Modal, Button } from "react-bootstrap";

const ConfirmationModal = ({ title, body, show, fullscreen, onHide, onConfirm }) => {

    return (
        <Modal show={show} fullscreen={fullscreen} onHide={() => onHide(false)}  centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button onClick={() => onHide(false)} variant="secondary">Cancel</Button>
                <Button onClick={() => onConfirm(false)} variant="primary">Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;