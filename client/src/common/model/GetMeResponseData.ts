import { IUserInfo } from './UserInfo';
// 응답에서 data 객체의 구조를 정의
export interface IGetMeResponseData {
  user?: IUserInfo | null;
  accessToken?: string;
}
