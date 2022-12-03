import { BalanceStyled, Number, Text } from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectUseBalance } from '../../redux/Auth/authSelectors';
import { selectBalanceAfter } from '../../redux/Transactions/transactionsSelectors';
export const Balance = () => {
  const isBalance = useSelector(selectUseBalance);
  const isBalanceAfter = useSelector(selectBalanceAfter);
  return (
    <BalanceStyled>
      <Text>Your balance</Text>
      <Number>₴ {isBalanceAfter ? isBalanceAfter : isBalance}</Number>
    </BalanceStyled>
  );
};
