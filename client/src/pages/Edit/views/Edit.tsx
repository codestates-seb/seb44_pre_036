import { useMutation } from 'react-query';
import BodyInput from '../components/BodyInput';
import Buttons from '../components/Buttons';
import Preview from '../components/Preview';
import TitleInput from '../components/TitleInput';
import { Page, Wrapper } from '../style';
import { updateData } from '../model/updateData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../common/store/RootStore';
import { getItem } from '../../../common/type';
import { createUserInfo } from '../../../common/store/UserInfoStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const user = useSelector((state: RootState) => state.userInfo);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  let item = useSelector((state: RootState) => state.item);

  const updatedItem = useSelector((state: RootState) => state.edit);

  const updateMutation = useMutation((data: getItem) =>
    updateData(item.questionId, data),
  );

  useEffect(() => {
    if (!user.memberId) {
      navigate('/login');
    }
  });

  const handleUpdate = () => {
    item = {
      ...item,
      title: updatedItem.title,
      content: updatedItem.content,
      updatedAt: new Date().toLocaleDateString(),
    };
    updateMutation.mutate(item);
    dispatch(
      createUserInfo({
        ...user,
        modifiedTime: new Date().toLocaleDateString(),
      }),
    );
  };

  return (
    <Wrapper>
      <Page>
        <TitleInput item={item} />
        <BodyInput item={item} />
        <Preview />
        <Buttons handleUpdate={handleUpdate} />
      </Page>
    </Wrapper>
  );
};

export default Edit;
