export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };

    case "SAVE":
      return {
        ...state,
        isSave: action.payload,
      };

    case "CONFIRM":
      return {
        ...state,
        isConfirm: action.payload,
      };
    case "IS_ADD":
      return {
        ...state,
        isAdd: action.payload,
      };

    case "IS_SEARCH":
      return {
        ...state,
        isSearch: action.payload,
      };

    case "START_INDEX":
      return {
        ...state,
        startIndex: action.payload,
      };

    case "IS_DONATE":
      return {
        ...state,
        isDonate: action.payload,
      };

    case "IS_SPONSOR":
      return {
        ...state,
        isSponsor: action.payload,
      };

    //LOGIN
    case "IS_SIGNUP":
      return {
        ...state,
        isSignup: action.payload,
      };

    case "IS_CREATE_EMAIL_CHECK":
      return {
        ...state,
        isCreateEmailCheck: action.payload,
      };

    case "IS_CREATE_ACC":
      return {
        ...state,
        isCreatedAcc: action.payload,
      };

    case "IS_FORGOT_EMAIL_CHECK":
      return {
        ...state,
        isForgotEmailCheck: action.payload,
      };

    case "IS_CREATED_PASS":
      return {
        ...state,
        isCreatedPass: action.payload,
      };

    default:
      return state;
  }
};
