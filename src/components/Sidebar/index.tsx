import { SidebarWrapper } from "./styles"
import { CharacterCell } from "./CharacterCell"
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

type SideBarProps = {
  loading: boolean,
  error: boolean
}

export const Sidebar: React.FC<SideBarProps> = ({
  loading,
  error,
  children
}) => {
  return (
    <SidebarWrapper>
      {
        !loading && children
      }
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </SidebarWrapper>
  )
}
