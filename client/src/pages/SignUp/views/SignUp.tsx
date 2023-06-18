import SignUpForm from '../components/SignUpForm';
// 로그인한 유저 정보 상태 접근을 위해 useSelector 사용
import { useSelector } from 'react-redux';
// 매개변수에 지정할 RootState 타입을 가져온다.
import { RootState } from '../../../common/store/RootStore';

function SignUp() {
  // useSelector를 사용하여 store에 저장된 유저 정보를 가져온다.
  const myInfo = useSelector((store: RootState) => store.userInfo);
  console.log(myInfo);
  return (
    <div>
      <img src={myInfo.profileImageUrl} alt="프로필 사진" />
      <h1>{myInfo.name}</h1>
      <h2>{myInfo.email}</h2>
      <SignUpForm />
    </div>
  );
}
export default SignUp;
