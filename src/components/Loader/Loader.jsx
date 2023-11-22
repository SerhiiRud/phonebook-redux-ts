import { TailSpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin
        height="20"
        width="20"
        color="#B2BEB5"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
};
