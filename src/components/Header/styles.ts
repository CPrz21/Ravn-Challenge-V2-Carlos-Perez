import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 52px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  background-color: var(--ravn-black);
  padding: 0 33px;
  position: relative;
  img{
    display: none;
    margin-right: 12px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    padding: 0;
    img{
      position: absolute;
      left: 1rem;
      display: block;
    }
  }
`;