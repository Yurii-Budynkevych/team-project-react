import styled from 'styled-components';

export const Name = styled.p`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #bdbdbd;
  margin: 0;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #bdbdbd;
  background-color: transparent;
  margin: 0 0 0 12px;
  height: 30px;
  border: none;
  border-left: 1px solid #bdbdbd;
  cursor: pointer;
  padding: 0px 12px;

  @media screen and (max-width: 767px) {
    border: none;
    margin: 0 0 0 8px;
    padding: 0;
  }
`;

export const Img = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;
