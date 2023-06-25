import { useSelector } from 'react-redux';
import { PreviewContainer } from '../style';
import { RootState } from '../../../common/store/RootStore';

const Preview = () => {
  const preview = useSelector((state: RootState) => state.preview);

  return (
    <PreviewContainer>
      <div dangerouslySetInnerHTML={{ __html: preview }} />
    </PreviewContainer>
  );
};

export default Preview;
