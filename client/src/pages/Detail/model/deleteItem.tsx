import axios from 'axios';
import { LISTCRUD_URL } from '../../../common/utils/enum';

export const deleteItem = async (questionId: number) => {
  await axios.delete(`${LISTCRUD_URL}/api/questions/${questionId}`);
};
