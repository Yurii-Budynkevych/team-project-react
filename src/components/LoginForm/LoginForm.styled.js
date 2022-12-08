import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'utils/sizes';

// import { BsFillPersonFill } from 'react-icons/bs';
// import { RiLockPasswordFill } from 'react-icons/ri';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;

  @media screen and (${breakpoints.desktop}) {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const Title = styled.h2`
  font-family: 'popins';
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  color: #000000;
  margin-top: 0;
  margin-bottom: 60px;
  @media ${breakpoints.maxMobile} {
  }
`;

export const ErrBox = styled.div`
  color: #ff6565;
  padding: 0.5em 0.2em;
  height: 1em;
  position: absolute;
  font-size: 0.8em;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 60px 60px 60px;
  /* width: 533px;
  height: 468px; */
  border-radius: 20px;
  background-color: #fff;

  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

export const StyledLable = styled.label``;

export const StyledWrapper = styled.div`
  position: relative;
  margin-bottom: 42px;
  text-align: center;
`;

export const StyledInput = styled.input`
  padding-left: 45px;
  width: 410px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  &:focus-visible {
    outline: 1px solid transparent;
    border-bottom: 1px solid black;
  }
  &.error {
    border-bottom: 1px solid #ff6565;
  }

  @media screen and (max-width: 500px) {
    width: 280px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 300px;
  height: 50px;
  background-color: #24cca7;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  background-color: transparent;
  color: #4a56e2;
  border: 1px solid #4a56e2;
  border-radius: 20px;

  text-align: center;
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;

  @media ${breakpoints.minTablet} {
    display: inline;
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: -5px;
  left: 5px;
  width: 24px;
  height: 24px;
`;
