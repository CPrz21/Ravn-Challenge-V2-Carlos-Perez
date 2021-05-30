import styled from 'styled-components';

export const CharacterCellWrapper = styled.button`
    width: 100%;
    min-height: 69px;
    padding: 0 18px 0 0;
    background-color: var(--white);
    cursor: pointer;
    outline: none;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover{
      background-color: var(--gray);
    }
`;