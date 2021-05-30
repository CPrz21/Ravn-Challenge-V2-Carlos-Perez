import { useRef, useEffect } from 'react';

import { SidebarWrapper } from "./styles"
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

type SideBarProps = {
  loading: boolean,
  error: boolean,
  show: boolean
}

export const Sidebar: React.FC<SideBarProps> = ({
  loading,
  error,
  children,
  show
}) => {

  return (
    <SidebarWrapper className={`${show ? 'hide' : ''}`}>
      {
        !loading && children
      }
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </SidebarWrapper>
  )
}
