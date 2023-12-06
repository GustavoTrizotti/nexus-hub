export const handlePromise = async (
  promiseFunction,
  successCallback,
  errorCallback
) => {
  try {
    const result = await promiseFunction();
    if (result.length <= 0) {
      errorCallback("No data found");
    }
    successCallback(result);
    return result;
  } catch (error) {
    errorCallback(error);
  }
};
