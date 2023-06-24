import { useDispatch, useSelector } from 'react-redux';
import { TabButton, TabContainer } from '../style';
import { RootState } from '../../../common/store/RootStore';
import { setTab } from '../store/TabStore';
import { useNavigate } from 'react-router-dom';

const Tab = () => {
  const user = useSelector((state: RootState) => state.userInfo);
  const dispatch = useDispatch();
  const currentTab = useSelector((state: RootState) => state.tab);
  const navigate = useNavigate();

  const handleCurrentTab = (tab: string) => {
    dispatch(setTab(tab));
    navigate(`/mypage/${user.memberId}/${user.name}/${tab.toLowerCase()}`);
  };

  const renderTabButton = (text: string) => (
    <TabButton
      key={text}
      onClick={() => handleCurrentTab(text)}
      className={currentTab === text ? 'current' : ''}
    >
      {text}
    </TabButton>
  );

  return (
    <TabContainer>
      {['Profile', 'Activity', 'Saves', 'Settings'].map(renderTabButton)}
    </TabContainer>
  );
};

export default Tab;
