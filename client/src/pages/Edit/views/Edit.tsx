import { useMutation } from 'react-query';
import { getItem } from '../../Board/type';
import BodyInput from '../components/BodyInput';
import Buttons from '../components/Buttons';
import Preview from '../components/Preview';
import TitleInput from '../components/TitleInput';
import { Page } from '../style';
import { updateData } from '../model/updateData';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store/RootStore';

const Edit = () => {
  // const item = useSelector((state: RootState) => state.item);

  const updatedItem = useSelector((state: RootState) => state.edit);

  let item: getItem = {
    questionId: 4,
    title: 'how to use react hook',
    content: `I'm stucked with a simple configuration of Traefik to pass requests from my IP to my application.
  `,
    viewCount: 1,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    memberId: 1234,
    name: 'Mooobi',
    userAvatar:
      'https://lh3.googleusercontent.com/a/AAcHTtf_r7CBglmE-aDKLINfK78xcsVPtrg5Q7sHnOHW=k-s256',
    answers: [],
    voteCount: 0,
  };
  // 더미 데이터

  const updateMutation = useMutation((data: getItem) =>
    updateData(item.questionId, data),
  );

  const handleUpdate = () => {
    item = {
      ...item,
      title: updatedItem.title,
      content: updatedItem.content,
      updatedAt: new Date().toLocaleDateString(),
    };
    updateMutation.mutate(item);
  };

  return (
    <Page>
      <TitleInput item={item} />
      <BodyInput item={item} />
      <Preview />
      <Buttons handleUpdate={handleUpdate} />
    </Page>
  );
};

export default Edit;
