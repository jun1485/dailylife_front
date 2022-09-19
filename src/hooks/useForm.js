import { useState } from 'react';

import userApi from '../apis/userApi';

import { validate } from 'common/utils';

const useForm = (initialValues) => {
  const [values, setValues] = useState(
    initialValues,
  );
  const [errors, setErrors] = useState({});

  const handleChange = (event, formType) => {
    const { name, value } = event.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      ...validate(values[formType], formType),
    }));
  };

  const handleSubmit = (event) => {
    const isValidate = errors.length === 0;
    console.log(errors);
    if (isValidate) {
      userApi.postUserInfoForSignUp({
        userId: values.userId,
        userPassword: values.password,
        userEmail: values.email,
        userName: values.name,
        userPhoneNumber: values.phoneNumber,
      });
    } else {
      alert(
        '회원가입 형식이 올바르지 않습니다. 다시 확인해주세요.',
      );
    }
    event.preventDefault();
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
