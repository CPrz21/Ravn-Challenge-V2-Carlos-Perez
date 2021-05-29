import styled, {keyframes} from 'styled-components';

const Spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 14px;
  padding: 18px 14px 18px 0;
  img{
    animation: ${Spinner} 0.6s linear infinite;
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;