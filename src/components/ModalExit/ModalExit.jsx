import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Overlay, ModalWindow } from './ModalExit.styled';
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
        <p>Are you shure you want to exit?</p>
        <button
          type="button"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Exit
        </button>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
