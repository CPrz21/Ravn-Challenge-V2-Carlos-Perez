import { SidebarWrapper } from "./styles"
import { CharacterCell } from "./CharacterCell"
import { Loader } from "../Loader"

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <CharacterCell />
      <CharacterCell />
      <CharacterCell />
      <Loader />
    </SidebarWrapper>
  )
}
