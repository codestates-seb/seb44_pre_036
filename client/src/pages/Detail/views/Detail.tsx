import { Page } from '../style.ts';
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
        console.log(item);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const item = useQuery('question', () => getListItem(id));

  const user = useSelector((state: RootState) => state.userInfo);

  return (
    <Page>
      <Header item={item?.data} user={user} />
      <Main item={item?.data} user={user} />
    </Page>
  );
};

export default Detail;

// const item: getItem = {
//   questionId: 1,
//   title: 'how to use react hook',
//   content: `I'm stucked with a simple configuration of Traefik to pass requests from my IP to my application.

//   Supposing my ip is 192.0.0.1, I need to pass all requests from this host to my application that is running inside this server on 0.0.0.0:8001. I've seen various configurations but nothing works :/. I don't know what am I doing wrong and I want to understand why and the operation of Traefik.`,
//   viewCount: 1,
//   createdAt: new Date().toLocaleDateString(),
//   updatedAt: new Date().toLocaleDateString(),
//   memberId: 1234,
//   name: 'Mooobi',
//   userAvatar:
//     'https://lh3.googleusercontent.com/a/AAcHTtf_r7CBglmE-aDKLINfK78xcsVPtrg5Q7sHnOHW=k-s256',
//   answers: [],
//   voteCount: 0,
// };
// 더미 데이터
