import { BalanceStyled, Number, Text } from './Balance.styled';

export const Balance = () => {
  //   const isBalance = useSelector(getIsBalance);
  return (
    <BalanceStyled>
      <Text>Your balance</Text>
      {/* for example */}
      <Number>₴ 24 000.00</Number>
    </BalanceStyled>
  );
};
