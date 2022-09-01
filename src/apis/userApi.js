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
    const response = await client.post(`/${PATH}/join`, options);
    console.log(response);
  }),
  postUserInfoForLogIn: methodFormat(async ({ userInfo }) => {
    const options = {
      params: {
        userId: userInfo.userId,
        userPassword: userInfo.userPassword,
      },
    };
    const response = await client.post(`/${PATH}/login`, options);
    console.log(response);
  }),
};

export default userApi;
