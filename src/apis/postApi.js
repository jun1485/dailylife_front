import { methodFormat } from '../common/utils';
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
    const response = await client.get(`/${PATH}/getBoardNotLogin`, option);
    console.log(response);
  }),

  /** 로그인 되어있지 않을 때 게시글 정보 받아오는 API */
  getItemByPage: methodFormat(async (currentPage) => {
    const response = await client.get(
      `/${PATH}/getBoardNotLogin?pg=${currentPage}`,
    );
    return response.data;
  }),

  /** 페이지네이션 구현을 위해 전체게시글 수를 받아오는 API */
  getTotalPostCount: methodFormat(async () => {
    const response = await client.get(`/${PATH}/getBoardCount`);
    return response.data;
  }),

  deleteBoardData: methodFormat(async (boardNum) => {
    const response = await client.delete(`/${PATH}/delete/${boardNum}`, {
      headers: {
        'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
      },
    });
    return response.data;
  }),
};
export default postApi;
