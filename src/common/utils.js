const methodFormat = (callbackfunc) => {
  const method = async (...args) => {
    try {
      const data = await callbackfunc(...args);
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
  // const usernameRegex = /^[a-z][a-z\d]{2,}$/;
  const usernameRegex = /^[a-z0-9]{2,16}$/;
  const emailRegex = /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/;
  const errorMessage = {
    userId: '아이디는 영문자로 시작하고 숫자를 포함한 4~12글자입니다.',
    password: '비밀번호는 숫자/문자/특수문자를 포함한 8~15자리입니다.',
    username: '닉네임은 2글자 이상입니다.',
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
  if (formType === 'username') {
    if (!usernameRegex.test(value)) {
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

const getCommentDate = (replyDate) => {
  const [sec, min, hour, day, week] = [
    1,
    60,
    3600,
    86400,
    86400 * 7,
    2592000,
    2592000 * 12,
  ];
  const today = new Date();
  const formattedDate = new Date(
    `${replyDate[0]}-${replyDate[1]}-${replyDate[2]} ${
      (replyDate[3] + 9) % 24
    }:${replyDate[4]}:${replyDate[5]}`,
  );
  const elapsedTime = Math.trunc(
    (today.getTime() - formattedDate.getTime()) / 1000,
  );
  let elapsedText = '';

  if (elapsedTime < sec || elapsedTime === undefined) elapsedText = '지금';
  else if (elapsedTime < min) elapsedText = `${elapsedTime}초`;
  else if (elapsedTime < hour)
    elapsedText = `${Math.trunc(elapsedTime / min)}분`;
  else if (elapsedTime < day)
    elapsedText = `${Math.trunc(elapsedTime / hour)}시간`;
  else if (elapsedTime < week)
    elapsedText = `${Math.trunc(elapsedTime / day)}일`;
  else elapsedText = `${Math.trunc(elapsedTime / week)}주`;

  return elapsedText;
};

export { methodFormat, validate, getCommentDate };
