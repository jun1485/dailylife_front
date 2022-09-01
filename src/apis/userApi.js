import methodFormat from '../common/utils';
import client from './client';

const PATH = 'api/users';
const userApi = {
  postUserInfoForSignUp: methodFormat(async ({ userInfo }) => {
    const options = {
      params: {
        userId: userInfo.userId,
        userPassword: userInfo.password,
        userEmail: userInfo.email,
        userName: userInfo.username,
        userPhoneNumber: userInfo.phoneNumber,
      },
    };
    const response = await client.post(`${process.env.REACT_APP_HOST}/${PATH}/join`, options);
    console.log(response);
  }),
};

export default userApi;
