import { InformationCellWrapper } from './styles';

type InformationCellProps = {
  enableSuffix?: boolean
}

export const InformationCell: React.FC<InformationCellProps> = ({
  enableSuffix
}) => {
  return (
    <InformationCellWrapper>
      <h2 className="text-light">Eye Color</h2>
      {enableSuffix && <h2>Blue</h2>}
    </InformationCellWrapper>
  )
};
