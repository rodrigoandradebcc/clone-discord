import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;
  padding: 24px;

  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  > span {
    text-transform: uppercase; //deixa o texo maiusculo
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCateoryIcon = styled(Add)`
  height: 21px;
  width: 21px;

  color: var(--symbol);
  cursor: pointer;
`;
