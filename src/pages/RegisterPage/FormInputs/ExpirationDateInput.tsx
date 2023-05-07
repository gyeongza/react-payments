import { useContext } from 'react';
import styled from 'styled-components';
import { LENGTH, REGEX } from 'constants/constants';
import { useInputHandler } from 'pages/RegisterPage/FormInputs/hooks/useInputHandler';
import InputBox from 'components/InputBox';
import { StyledInput } from 'components/Input';
import { AddCardContext } from 'context/CardContext';
import { StyledHyphen } from 'components/Hypen';
import { Expiration } from 'types/Card';
import { showDateHyphen } from 'utils/hyphenStyles';
import { StyledCaption } from 'components/Caption';
import { showDateCaption } from 'utils/captionStyles';

const ExpirationDateInput = () => {
  const { date, setDate } = useContext(AddCardContext);

  const dateValidator = (name: string, value: string) => {
    const validDate = Number(value);
    return name === 'month' && (validDate > 12 || validDate < 0) ? '' : value;
  };

  const { handleInput: handleDate, handleRef: handleInputRef } =
    useInputHandler(setDate, {
      length: LENGTH.EXPIRATION,
      regex: REGEX.ONLY_NUMBER,
      validator: dateValidator,
    });

  return (
    <>
      <label className="label-text" htmlFor="date-label">
        만료일
      </label>
      <InputBox width={44}>
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
        <DateHyphen date={date} />
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
      <DateCaption date={Object.values(date)}>
        카드에 표기된 월/연도 순으로 입력해주세요. ex&#41; 01/28
      </DateCaption>
    </>
  );
};

const ExpirationInput = styled(StyledInput)`
  width: 24%;
`;

const DateHyphen = styled(StyledHyphen)<{ date?: Expiration }>`
  visibility: ${(props) => showDateHyphen(props.date?.month)};
`;

const DateCaption = styled(StyledCaption)<{ date: string[] }>`
  visibility: ${({ date }) => showDateCaption(date)};
`;

export default ExpirationDateInput;
