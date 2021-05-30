import { HeaderWrapper } from './styles';
import LeftArrow from '../../assets/icons/left-arrow.svg'

type HeaderProps = {
  title: string,
  showCharacterTitle: boolean,
  onClick: ()=>void
}
export const Header: React.FC<HeaderProps> = ({
  title,
  showCharacterTitle,
  onClick,
}) => {
  return (
    <HeaderWrapper>
      {showCharacterTitle && <img src={LeftArrow} alt="left-arrow" onClick={() => onClick()} />}
      <h2 className="text-gray">{(window.innerWidth < 768 && showCharacterTitle) ? title : 'Ravn Star Wars Registry'}</h2>
    </HeaderWrapper>
  )
}
