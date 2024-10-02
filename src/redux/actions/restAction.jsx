import ActionTypes from "../actionTypes";
import api from "../../utils/api";

export const setLoading = (payload) => ({
  type: ActionTypes.REST_LOADING,
});
export const setRestaurants = (payload) => ({
  type: ActionTypes.REST_SUCCESS,
  payload,
});
export const setError = (payload) => ({
  type: ActionTypes.REST_ERROR,
  payload,
});

//THUNK FONKSİONU
//FONKSİON RETURN EDER
//thunk bu fonksiyon aksiyon tetiklendiği anda algılar ve çalıştırır.

export const getRestaurants = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    api
      .get("/restaurants")
      .then((res) => dispatch(setRestaurants(res.data)))
      .catch((err) => dispatch(setError(err)));
  };
};
