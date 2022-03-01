export const setError = (val) => {
  return {
    type: "ERROR",
    payload: val,
  };
};

export const setMessage = (val) => {
  return {
    type: "MESSAGE",
    payload: val,
  };
};

export const setSuccess = (val) => {
  return {
    type: "SUCCESS",
    payload: val,
  };
};

export const setSave = (val) => {
  return {
    type: "SAVE",
    payload: val,
  };
};

export const setIsConfirm = (val) => {
  return {
    type: "CONFIRM",
    payload: val,
  };
};

//#4 check if is_add is on reducer - go to reducer
export const setIsAdd = (val) => {
  return {
    type: "IS_ADD",
    payload: val,
  };
};

export const setIsSearch = (val) => {
  return {
    type: "IS_SEARCH",
    payload: val,
  };
};

export const setStartIndex = (val) => {
  return {
    type: "START_INDEX",
    payload: val,
  };
};

export const setIsDonate = (val) => {
  return {
    type: "IS_DONATE",
    payload: val,
  };
};

export const setIsSponsor = (val) => {
  return {
    type: "IS_SPONSOR",
    payload: val,
  };
};

//logins
export const setIsSignup = (val) => {
  return {
    type: "IS_SIGNUP",
    payload: val,
  };
};

export const setIsCreateEmailCheck = (val) => {
  return {
    type: "IS_CREATE_EMAIL_CHECK",
    payload: val,
  };
};

export const setIsCreatedAcc = (val) => {
  return {
    type: "IS_CREATE_ACC",
    payload: val,
  };
};

export const setIsForgotEmailCheck = (val) => {
  return {
    type: "IS_FORGOT_EMAIL_CHECK",
    payload: val,
  };
};

export const setIsCreatedPass = (val) => {
  return {
    type: "IS_CREATED_PASS",
    payload: val,
  };
};
