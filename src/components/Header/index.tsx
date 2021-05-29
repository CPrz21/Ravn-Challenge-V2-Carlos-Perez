import { HeaderWrapper } from './styles';
import LeftArrow from '../../assets/icons/left-arrow.svg'

export const Header = () => {
  return (
    <HeaderWrapper>
      <img src={LeftArrow} alt="left-arrow" />
      <h2 className="text-gray">Ravn Star Wars Registry</h2>
    </HeaderWrapper>
  )
}
