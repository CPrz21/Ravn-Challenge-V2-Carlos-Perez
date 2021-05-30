// Styles
import { InformationCellWrapper } from './styles';

type InformationCellProps = {
  title: string,
  suffix?: string
}

export const InformationCell: React.FC<InformationCellProps> = ({
  title,
  suffix
}) => {
  return (
    <InformationCellWrapper>
      <h2 className="text-light">{title}</h2>
      {suffix && <h2>{suffix}</h2>}
    </InformationCellWrapper>
  )
};
