import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import List from '../components/List';
import { getList } from '../model/getList';
import { Page, Wrapper } from '../style';
import { RootState } from '../../../common/store/RootStore';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import { useEffect } from 'react';
import { setFilter } from '../../../common/store/FilterStore';
import { setPage } from '../../../common/store/PageStore';
import { setList } from '../../../common/store/ListStore';
import Pagination from '../components/Pagination';

const Board = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list);
  const tab = useSelector((state: RootState) => state.filter) || 'Newest';
  const page = useSelector((state: RootState) => state.page);
  const size = 10;
  const user = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    dispatch(setFilter('Newest'));
    dispatch(setPage(1));
  }, []);

  useEffect(() => {
    const fetchList = async () => {
      const data = await getList(`${LISTCRUD_URL}/questions`, page, size, tab);
      dispatch(setList(data));
    };
    fetchList();
  }, [page, tab]);

  const handleNextPage = () => {
    if (list && list.data.length === size) {
      dispatch(setPage(page + 1));
    } else if (list && list.data.length === 0) {
      dispatch(setPage(page - 1));
    }
  };

  const handlePrevPage = () => {
    if (list && list.data && page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <Wrapper>
      <Page>
        {list && <Header pageInfo={list.pageInfo} user={user} />}
        {list && <List data={list.data} user={user} />}
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </Page>
    </Wrapper>
  );
};

export default Board;
