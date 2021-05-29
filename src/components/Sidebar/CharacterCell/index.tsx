import { CharacterCellWrapper } from "./styles";
import RightArrow from '../../../assets/icons/right-arrow.svg';

export const CharacterCell = () => {
  return (
    <CharacterCellWrapper>
      <div>
        <h2>Luke Skywalker</h2>
        <p className="text-light">Human from Tatooine</p>
      </div>
      <img src={RightArrow} alt="arrow-right" />
    </CharacterCellWrapper>
  )
}
