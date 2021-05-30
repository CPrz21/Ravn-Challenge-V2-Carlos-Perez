import { useRef, useEffect } from 'react';

import { SidebarWrapper } from "./styles"
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

// Hooks
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

type SideBarProps = {
  loading: boolean,
  error: boolean,
  loadMoreData: Function,
  show: boolean
}

export const Sidebar: React.FC<SideBarProps> = ({
  loading,
  error,
  loadMoreData,
  children,
  show
}) => {

  const ref = useRef(null);

  const isBottomVisible = useIntersectionObserver(
    ref,
    {
      threshold: 0
    },
    false
  );

  useEffect(() => {
    isBottomVisible && loadMoreData();
  }, [isBottomVisible]);

  console.log("🚀 ~ file: index.tsx ~ line 31 ~ isBottomVisible", isBottomVisible)

  return (
    <SidebarWrapper className={`${show ? 'hide' : ''}`}>
      {
        !loading && children
      }
      <div ref={ref} style={{ width: "100%", height: "20px" }} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </SidebarWrapper>
  )
}
