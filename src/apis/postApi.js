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
<<<<<<< HEAD
  /** 임시로 생성,  */
  getPostDataForNotLoginUser: methodFormat(async ({ postData }) => {
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
    const response = await client.get(`/${PATH}/getboardNotLogin`, option);
    console.log(response);
  }),
=======
>>>>>>> 125acc679df9b6ac55e91d539f76247c7b61e5b6
};

export default postApi;
