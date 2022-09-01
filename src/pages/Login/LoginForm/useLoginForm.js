import { useState } from 'react';

import userApi from '../../../apis/userApi';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
    // console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    userApi.postUserInfoForLogIn({
      userId: values.userId,
      userPassword: values.password,
    });
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
