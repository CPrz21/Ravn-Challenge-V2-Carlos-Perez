import { SidebarWrapper } from "./styles"
import { CharacterCell } from "./CharacterCell"
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <CharacterCell />
      <CharacterCell />
      <CharacterCell />
      <Loader />
      <ErrorMessage />
    </SidebarWrapper>
  )
}
