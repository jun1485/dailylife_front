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
export default methodFormat;
