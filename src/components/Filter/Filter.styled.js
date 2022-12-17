import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 0 30px;
`;

export const FilterInput = styled.input`
  width: 240px;
  height: 28px;
  margin: 8px 0;
  border-radius: 4px;
  border: 1px solid #a0a0a050;
  outline: none;

  :focus {
    border: 2px solid #2b407580;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;