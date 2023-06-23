import { Page, Wrapper } from '../style.ts';
import Header from '../components/Header.tsx';
import Main from '../components/Main.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../common/store/RootStore.tsx';
import { useEffect } from 'react';
import { setItem } from '../store/ItemStore.tsx';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getListItem } from '../model/getListItem.tsx';

const Detail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const item = await getListItem(id);
        dispatch(setItem(item));
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const item = useQuery('question', () => getListItem(id));

  const user = useSelector((state: RootState) => state.userInfo);

  return (
    <Wrapper>
      <Page>
        <Header item={item?.data} user={user} />
        <Main item={item?.data} user={user} />
      </Page>
    </Wrapper>
  );
};

export default Detail;
