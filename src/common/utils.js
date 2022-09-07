const methodFormat = (callbackfunc) => {
  const method = async (args) => {
    try {
      const data = await callbackfunc({
        ...args,
      });
      return {
        ok: true,
        data,
      };
    } catch (error) {
      return {
        ok: false,
        message: error.message,
      };
    }
  };
  return method;
};

const validate = (value, formType) => {
  let isValidate = true;
  const userIdRegex = /^[a-z][a-z\d]{3,11}$/;
  const userIdNumberRegex = /[0-9]/;
  const passwordRegexArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\\*!&]/];
  const nameRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
  const emailRegex = /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/;
  const errorMessage = {
    userId: '아이디는 영문자로 시작하고 숫자를 포함한 4~12글자입니다.',
    password: '비밀번호는 숫자/문자/특수문자를 포함한 8~15자리입니다.',
    name: '이름은 한글로 된 2글자 이상입니다.',
    email: '이메일 형식이 아닙니다. 다시 입력해주세요.',
  };
  const validtaionResult = {};

  if (formType === 'userId') {
    if (!(userIdRegex.test(value) || userIdNumberRegex.test(value))) {
      isValidate = false;
    }
  }
  if (formType === 'password') {
    passwordRegexArr.forEach((el) => {
      if (!el.test(value)) {
        isValidate = false;
      }
    });
  }
  if (formType === 'name') {
    if (!nameRegex.test(value)) {
      isValidate = false;
    }
  }
  if (formType === 'email') {
    if (!emailRegex.test(value)) {
      isValidate = false;
    }
  }

  if (!isValidate) {
    validtaionResult[formType] = errorMessage[formType];
  } else {
    validtaionResult[formType] = '';
  }
  return validtaionResult;
};

export { methodFormat, validate };
