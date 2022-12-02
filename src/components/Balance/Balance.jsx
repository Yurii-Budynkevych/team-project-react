import { BalanceStyled, Number, Text } from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectUseBalance } from '../../redux/Auth/authSelectors';
export const Balance = () => {
  const isBalance = useSelector(selectUseBalance);
  return (
    <BalanceStyled>
      <Text>Your balance</Text>

      <Number>₴ {isBalance}</Number>
    </BalanceStyled>
  );
};
