import methodFormat from '../common/utils';
import client from './client';

const PATH = 'api/board';
const postApi = {
  getPostDataForRender: methodFormat(async ({ postData }) => {
    const option = {
      params: {
        key: postData.key,
        boardNum: postData.boardNum,
        src: postData.src,
        title: postData.title,
        content: postData.content,
        heartState: postData.heartState,
      },
    };
    const response = await client.get(`/${PATH}/getboard`, option);
    console.log(response);
  }),
};

export default postApi;
