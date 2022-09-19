import { methodFormat } from '../common/utils';
import client from './client';

const PATH = 'api/reply';
const replyApi = {
  postCreateReply: methodFormat(
    async ({ replyData }) => {
      const options = {
        params: {},
      };
      const response = await client.post(
        `${PATH}insert`,
        options,
      );
      console.log(response);
    },
  ),
};

export default replyApi;
