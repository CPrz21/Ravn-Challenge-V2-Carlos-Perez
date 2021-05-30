// Styles
import { ContentWrapper } from "./styles"

// Component
import { InformationCell } from "./InformationCell"

// Types
import { Character } from "../../types"

type ContentProps = {
  currentCharacter: Character | null,
  show: boolean
}
export const Content: React.FC<ContentProps> = ({
  currentCharacter,
  show
}) => {
  return (
    <ContentWrapper className={`${show ? '' : 'hide'}`}>
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
              currentCharacter.vehicleConnection.vehicles?.map((vehicle)=>(
                <InformationCell
                  key={`${currentCharacter.id}${vehicle.name}`}
                  title={vehicle.name} 
                />
              ))
            }
          </>)
        }
      </>)}
    </ContentWrapper>
  )
}
