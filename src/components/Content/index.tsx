import { InformationCell } from "./InformationCell"
import { ContentWrapper } from "./styles"

export const Content = () => {
  return (
    <ContentWrapper>
      <h1>General Information</h1>
      <InformationCell enableSuffix />
      <InformationCell enableSuffix />
      <InformationCell enableSuffix />
      <InformationCell enableSuffix />
      
      <h1>Vehicles</h1>
      <InformationCell />
      <InformationCell />
      <InformationCell />
    </ContentWrapper>
  )
}
