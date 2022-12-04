import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Overlay, ModalWindow, Text, Btn } from './ModalExit.styled';
import { togleModal } from '../../redux/Modal/modalSlice';
import { logout } from 'redux/Auth/authOperations';

const modalRoot = document.querySelector('#modal-root');

export const ModalExit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', onModalClose);
    return () => {
      window.removeEventListener('keydown', onModalClose);
    };
  });

  const onModalClose = e => {
    const { target, currentTarget, code } = e;
    if (target === currentTarget || code === 'Escape') {
      dispatch(togleModal());
    }
  };
  return createPortal(
    <Overlay
      onClick={e => {
        onModalClose(e);
      }}
    >
      <ModalWindow>
        <Text>Do you want to exit?</Text>
        <Btn
          type="button"
          onClick={() => {
            dispatch(logout());
            dispatch(togleModal());
          }}
        >
          Exit
        </Btn>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
