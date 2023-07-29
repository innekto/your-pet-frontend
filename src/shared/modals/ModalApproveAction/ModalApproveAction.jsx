import PropTypes from "prop-types";
import Modal from "../modalPort/modal";
import {
  ButtonlWrap,
  CancelButton,
  CloseButton,
  ModalWrap,
  SuccesButton,
  Text,
  Title,
} from "./ModalApproveAction.styled";
import { ReactComponent as CloseSvg } from "../../../assets/icons/cross-small.svg";
import { ReactComponent as DeletteSvg } from "../../../assets/icons/shape.svg";

const ModalApproveAction = ({ onSucces, toggleModal }) => (
  <Modal toggleModal={toggleModal}>
    <ModalWrap>
      <Title>Delete adverstiment?</Title>
      <Text>
        Are you sure you want to delete
        <strong> “Cute dog looking for a home”</strong>?
        <br /> You can`t undo this action.
      </Text>
      <ButtonlWrap>
        <CancelButton type="button" onClick={toggleModal}>
          Cancel
        </CancelButton>
        <SuccesButton type="button" onClick={onSucces}>
          Yes
          <DeletteSvg />
        </SuccesButton>
      </ButtonlWrap>

      <CloseButton onClick={toggleModal}>
        <CloseSvg />
      </CloseButton>
    </ModalWrap>
  </Modal>
);

export default ModalApproveAction;

ModalApproveAction.propTypes = {
  onSucces: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
