// import { BsFillPersonFill } from 'react-icons/bs';
// import { RiLockPasswordFill } from 'react-icons/ri';
// import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'utils/sizes';

export const Title = styled.h2`
  font-family: 'Poppins';
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
  align-items: center;
  width: 533px;
  height: 468px;
  border-radius: 20px;

  background-color: #fff;
`;

export const StyledWrapper = styled.div`
  margin-bottom: 42px;
  text-align: center;
`;

export const StyledLable = styled.label``;

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
`;

export const Btn = styled.button`
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

// export const StyledIconMan = styled(BsFillPersonFill)`
//   width: 32px;
//   height: 32px;
//   margin-top: 10px;
//   margin-right: 10px;
// `;

// export const StyledIconPW = styled(RiLockPasswordFill)`
//   width: 32px;
//   height: 32px;
//   margin-top: 10px;
//   margin-right: 10px;
// `;

// export const StyledIconEmail = styled(MdAlternateEmail)`
//   width: 32px;
//   height: 32px;
//   margin-top: 10px;
//   margin-right: 10px;
// `;
