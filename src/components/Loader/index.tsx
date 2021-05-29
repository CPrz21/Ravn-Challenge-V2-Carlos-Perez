import { LoaderWrapper  } from './styles';
import Spinner from '../../assets/icons/spinner.png'

export const Loader = () => {
  return (
    <LoaderWrapper>
      <img  
        src={Spinner}
        alt="loading data"
      />
      <h2 className="text-light">Loading</h2>
    </LoaderWrapper>
  )
}
