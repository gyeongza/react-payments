import { LENGTH } from 'constants/constants';
import styled from 'styled-components';
import { Card } from 'types/Card';

const CardPreview = ({ cardInfo }: { cardInfo: Card }) => {
  return (
    <S.Card>
      <S.Chip />
      <S.CardInfo>
        <S.Numbers>
          <S.Span>{cardInfo.number1}</S.Span>
          <S.Span>{cardInfo.number2}</S.Span>
          <S.Secret>{cardInfo.number3.replaceAll(/[0-9]/gi, 'ㆍ')}</S.Secret>
          <S.Secret>{cardInfo.number4.replaceAll(/[0-9]/gi, 'ㆍ')}</S.Secret>
        </S.Numbers>
        <S.Wrapper>
          <p>{cardInfo.name}</p>
          <S.Date>{`${cardInfo.month} ${
            cardInfo.month.length === LENGTH.EXPIRATION ? '/' : ''
          } ${cardInfo.year}`}</S.Date>
        </S.Wrapper>
      </S.CardInfo>
    </S.Card>
  );
};

const S = {
  Card: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: 213px;
    height: 133px;
    padding: 0 15px;
    margin: 30px auto 26px;
    border-radius: 5px;
    font-size: 14px;
    background: var(--darken-color);
    box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 5px;
  `,

  Chip: styled.div`
    width: 40px;
    height: 26px;
    margin: 0 auto 0 1px;
    background: #cbba64;
    border-radius: 4px;
  `,

  CardInfo: styled.div`
    color: #fff;
  `,

  Numbers: styled.p`
    margin: 10px 0 12px;
    letter-spacing: 2px;

    & span {
      display: inline-block;
      width: 44px;
    }
  `,

  Span: styled.span`
    &:nth-child(1) {
      margin-right: 2px;
    }
  `,

  Secret: styled.span`
    letter-spacing: -2px;

    &:nth-child(3) {
      margin-right: 4.8px;
    }
  `,

  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 12px;
  `,

  Date: styled.p`
    text-align: right;
  `,
};
export default CardPreview;
