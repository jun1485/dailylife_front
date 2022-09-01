import { useState } from 'react';

import userApi from '../../apis/userApi';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
    // console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    userApi.postUserInfoForSignUp({
      userId: values.userId,
      userPassword: values.password,
      userEmail: values.email,
      userName: values.name,
      userPhoneNumber: values.phoneNumber,
    });
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
