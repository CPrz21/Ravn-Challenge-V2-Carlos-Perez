import styled from 'styled-components';

export const ContentWrapper = styled.section`
  width: calc(100% - 350px);
  height: 100%;
  padding: 0 10%;
  overflow: auto;
  h1{
    margin: 0;
    padding-top: 32px;
  }
  @media (max-width: 768px) {
    width: 100%;
    &.hide{
        display: none;
    }
  }
`;