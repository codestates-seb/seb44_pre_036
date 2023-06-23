// import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import List from '../components/List';
// import { getList } from '../model/getList';
import { Page } from '../style';
import { list } from '../type';
import { RootState } from '../../../common/store/RootStore';
// import { LISTCRUD_URL } from '../../../common/utils/enum';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../common/store/RootStore';

const Board = () => {
  // const page = 1;
  // const size = 10;
  // const tab = 'Newest';

  // const { data } = useQuery('questionList', () => getList(`${LISTCRUD_URL}/questions`, page, size, tab));

  const data: list = [
    {
      questionId: 1,
      title: 'how to use react hook',
      content: `I'm stucked with a simple configuration of Traefik to pass requests from my IP to my application.

    Supposing my ip is 192.0.0.1, I need to pass all requests from this host to my application that is running inside this server on 0.0.0.0:8001. I've seen various configurations but nothing works :/. I don't know what am I doing wrong and I want to understand why and the operation of Traefik.`,
      viewCount: 1,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      memberId: 1234,
      name: 'Mooobi',
      userAvatar:
        'https://lh3.googleusercontent.com/a/AAcHTtf_r7CBglmE-aDKLINfK78xcsVPtrg5Q7sHnOHW=k-s256',
      voteCount: 0,
    },
  ];
  // 더미 데이터

  const user = useSelector((state: RootState) => state.userInfo);
  console.log(user);

  // 더미 데이터

  return (
    <Page>
      <Header data={data} user={user} />
      <List data={data} user={user} />
    </Page>
  );
};

export default Board;
