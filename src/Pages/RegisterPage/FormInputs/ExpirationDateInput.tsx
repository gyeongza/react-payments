import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { HIDDEN_ELEMENT_STYLE, LENGTH, REGEX } from 'constants/constants';
import { Card } from 'types/Card';
import { useInputHandler } from 'hooks/useInputHandler';
import InputBox from 'components/InputBox';
import { StyledInput } from 'components/Input';

type Date = Pick<Card, 'month' | 'year'>;

interface Props {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

const ExpirationDateInput = (props: Props) => {
  const { date, setDate } = props;

  const DateValidatior = (name: string, value: string) => {
    const ValidDate = Number(value);
    return name === 'month' && (ValidDate > 12 || ValidDate < 0) ? '' : value;
  };

  const { handleInput: handleDate, handleRef: handleInputRef } =
    useInputHandler(setDate, {
      length: LENGTH.EXPIRATION,
      regex: REGEX.ONLY_NUMBER,
      validator: DateValidatior,
    });

  return (
    <>
      <label className="label-text" htmlFor="date-label">
        만료일
      </label>
      <InputBox width={40}>
        <ExpirationInput
          type="text"
          name="month"
          id="date-label"
          aria-labelledby="date-label"
          maxLength={LENGTH.EXPIRATION}
          inputMode="numeric"
          value={date.month}
          ref={(el) => handleInputRef(el, 0)}
          onChange={handleDate}
          placeholder="MM"
          required
        />
        <Hyphen month={date.month}>/</Hyphen>
        <ExpirationInput
          type="text"
          name="year"
          aria-labelledby="date-label"
          maxLength={LENGTH.EXPIRATION}
          inputMode="numeric"
          value={date.year}
          ref={(el) => handleInputRef(el, 1)}
          onChange={handleDate}
          placeholder="YY"
          required
        />
      </InputBox>
      <Caption date={Object.values(date)}>
        카드에 표기된 월/연도 순으로 입력해주세요. ex&#41; 01/28
      </Caption>
    </>
  );
};

const ExpirationInput = styled(StyledInput)`
  width: 22vw;
`;

const Hyphen = styled.p<{ month: string }>`
  font-weight: 900;
  align-self: center;
  visibility: ${({ month }) =>
    month.length !== LENGTH.EXPIRATION && `${HIDDEN_ELEMENT_STYLE}`};
`;

const Caption = styled.p<{ date: string[] }>`
  color: var(--caption-color);
  font-size: 12px;
  margin: 8px 0 16px 4px;
  visibility: ${({ date }) =>
    date.join('').length === LENGTH.EXPIRATION * 2 &&
    `${HIDDEN_ELEMENT_STYLE}`};
`;

export default ExpirationDateInput;