import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  /* z-index: 1200; */
`;

export const ModalWindow = styled.div`
  position: absolute;
  right: 25px;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 220px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: white;
  padding: 10px;
`;

export const Text = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 8px;
  color: #4a56e2;
  width: 70px;
  height: 30px;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #e0e0e0;
  }
`;
