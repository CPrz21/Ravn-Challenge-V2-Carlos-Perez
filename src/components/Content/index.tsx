import { Character } from "../../types"
import { InformationCell } from "./InformationCell"
import { ContentWrapper } from "./styles"

type ContentProps = {
  currentCharacter: Character | null
}
export const Content: React.FC<ContentProps> = ({
  currentCharacter
}) => {
  return (
    <ContentWrapper>
      {currentCharacter && (<>
        <h1>General Information</h1>
        <InformationCell
          title="Eye Color"
          suffix={currentCharacter.eyeColor} 
        />
        <InformationCell
          title="Hair Color"
          suffix={currentCharacter.hairColor}
        />
        <InformationCell
          title="Skin Color"
          suffix={currentCharacter.skinColor}
        />
        
        <InformationCell
          title="Birth Year"
          suffix={currentCharacter.birthYear}
        />
        
        {
          currentCharacter.vehicleConnection.vehicles?.length > 0 && (<>
            <h1>Vehicles</h1>
            {
              currentCharacter.vehicleConnection.vehicles?.map((vehicle)=><InformationCell title={vehicle.name} />)
            }
          </>)
        }
      </>)}
    </ContentWrapper>
  )
}
