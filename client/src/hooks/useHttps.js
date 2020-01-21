import { useReducer, useCallback } from "react";

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null };
    case "RESPONSE":
      return { ...httpState, loading: false, data: action.responseData };
    case "ERROR":
      return { loading: false, error: action.ErrorMessage };
    case "CLEAR":
      return { ...httpState, error: null };
    default:
      throw new Error("Handle all actions!");
  } //switch
}; //httpReducer

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    userData: null
  });

  const sendRequest = useCallback((url, { type }) => {
    dispatchHttp({ type: "SEND" });
    fetch(`http://localhost:4000/api/posts/${url}`, {
      method: type,
      header: {
        "Content-type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        dispatchHttp({
          type: "RESPONSE",
          responseData: responseData
        });
        console.log(responseData);
      })
      .catch(err => {
        dispatchHttp({ type: "ERROR", errorMessage: "Handle all Actions!" });
        console.log(err);
      }); //fetch
  }, []); //sendRequest function useCallback is returning

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest
  }; //return statement
}; //useHttp

export default useHttp;
