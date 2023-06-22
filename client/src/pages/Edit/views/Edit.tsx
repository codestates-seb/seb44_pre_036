import { item } from '../../Board/type';
import BodyInput from '../components/BodyInput';
import Buttons from '../components/Buttons';
import Preview from '../components/Preview';
import TitleInput from '../components/TitleInput';
import { Page } from '../style';

const Edit = () => {
  const item: item = {
    id: '1234',
    title: 'how to use react hook',
    date: new Date().toLocaleDateString(),
    author: {
      id: '1234',
      name: 'Mooobi',
      avatar:
        'https://lh3.googleusercontent.com/a/AAcHTtf_r7CBglmE-aDKLINfK78xcsVPtrg5Q7sHnOHW=k-s256',
    },
    question: `I'm stucked with a simple configuration of Traefik to pass requests from my IP to my application.
    
        Supposing my ip is 192.0.0.1, I need to pass all requests from this host to my application that is running inside this server on 0.0.0.0:8001. I've seen various configurations but nothing works :/. I don't know what am I doing wrong and I want to understand why and the operation of Traefik.`,
    voteCount: 0,
  };
  // 더미 데이터

  return (
    <Page>
      <TitleInput item={item} />
      <BodyInput item={item} />
      <Preview />
      <Buttons />
    </Page>
  );
};

export default Edit;
