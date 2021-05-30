// Styles
import { CharacterCellWrapper } from "./styles";

// Icons
import RightArrow from '../../assets/icons/right-arrow.svg';

// Types
import { Character } from "../../types";

type CharacterCellProps = {
  character: Character,
  onClick: (character: Character)=>void
}

export const CharacterCell: React.FC<CharacterCellProps> = ({
  character,
  onClick
}) => {

  return (
    <CharacterCellWrapper onClick={()=>onClick(character)}>
      <div>
        <h2>{character.name}</h2>
        <p className="text-light">Human from {character.homeworld?.name || ''}</p>
      </div>
      <img src={RightArrow} alt="right-arrow" />
    </CharacterCellWrapper>
  )
}
