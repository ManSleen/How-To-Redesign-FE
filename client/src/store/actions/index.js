import { axiosWithAuth } from "../../utilities/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/api/auth/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.body.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const LOGOUT = "LOGOUT";

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem("token");
};

export const GET_GUIDES_START = "GET_GUIDES_START";
export const GET_GUIDES_SUCCESS = "GET_GUIDES_SUCCESS";
export const GET_GUIDES_FAILURE = "GET_GUIDES_FAILURE";

export const getGuides = () => dispatch => {
  dispatch({ type: GET_GUIDES_START });

  return axiosWithAuth()
    .get("/api/guides")
    .then(res => {
      dispatch({ type: GET_GUIDES_SUCCESS, payload: res.data.body });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_GUIDES_FAILURE });
    });
};

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = credentials => dispatch => {
  dispatch({ type: SIGN_UP_START });
  return axiosWithAuth()
    .post("/api/auth/register", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.body.token);
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGN_UP_FAILURE });
    });
};

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_START });

  return axiosWithAuth()
    .get("/api/users")
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_USERS_FAILURE });
    });
};

export const GET_GUIDE_BY_ID_START = "GET_GUIDE_BY_ID_START";
export const GET_GUIDE_BY_ID_SUCCESS = "GET_GUIDE_BY_ID_SUCCESS";
export const GET_GUIDE_BY_ID_FAILURE = "GET_GUIDE_BY_ID_FAILURE";

export const getGuideById = id => dispatch => {
  dispatch({ type: GET_GUIDE_BY_ID_START });
  return axiosWithAuth()
    .get(`/api/guides/${id}`)
    .then(res => {
      dispatch({ type: GET_GUIDE_BY_ID_SUCCESS, payload: res.data.body });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_GUIDE_BY_ID_FAILURE });
    });
};

export const DELETE_GUIDE_START = "DELETE_GUIDE_START";
export const DELETE_GUIDE_SUCCESS = "DELETE_GUIDE_SUCCESS";
export const DELETE_GUIDE_FAILURE = "DELETE_GUIDE_FAILURE";

export const deleteGuide = id => dispatch => {
  dispatch({ type: DELETE_GUIDE_START });
  return axiosWithAuth()
    .delete(`/api/guides/${id}`)
    .then(res => {
      dispatch({ type: DELETE_GUIDE_SUCCESS, payload: res.data.body });
      return true;
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_GUIDE_FAILURE });
    });
};

export const ADD_GUIDE_START = "ADD_GUIDE_START";
export const ADD_GUIDE_SUCCESS = "ADD_GUIDE_SUCCESS";
export const ADD_GUIDE_FAILURE = "ADD_GUIDE_FAILURE";

export const addGuide = guide => dispatch => {
  dispatch({ type: ADD_GUIDE_START });
  return axiosWithAuth()
    .post("/api/guides", guide)
    .then(res => {
      dispatch({ type: ADD_GUIDE_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_GUIDE_FAILURE });
    });
};

export const UPDATE_GUIDE_START = "UPDATE_GUIDE_START";
export const UPDATE_GUIDE_SUCCESS = "UPDATE_GUIDE_SUCCESS";
export const UPDATE_GUIDE_FAILURE = "UPDATE_GUIDE_FAILURE";

export const editGuide = (guide, id) => dispatch => {
  dispatch({ type: UPDATE_GUIDE_START });
  return axiosWithAuth()
    .put(`/api/guides/${id}`, guide)
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_GUIDE_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      dispatch({ type: UPDATE_GUIDE_FAILURE });
    });
};

export const ADD_STEP_START = "ADD_STEP_START";
export const ADD_STEP_SUCCESS = "ADD_STEP_SUCCESS";
export const ADD_STEP_FAILURE = "ADD_STEP_FAILURE";

export const addStep = (step, id) => dispatch => {
  dispatch({ type: ADD_STEP_START });
  return axiosWithAuth()
    .post(`/api/v1/step/${id}/lifehack`, step)
    .then(res => {
      dispatch({ type: ADD_STEP_SUCCESS, payload: res.data.body });
    })
    .catch(err => {
      dispatch({ type: ADD_STEP_FAILURE });
    });
};

export const GET_SINGLE_USER_START = "GET_SINGLE_USER_START";
export const GET_SINGLE_USER_SUCCESS = "GET_SINGLE_USER_SUCCESS";
export const GET_SINGLE_USER_FAILURE = "GET_SINGLE_USER_FAILURE";

export const getSingleUser = id => dispatch => {
  dispatch({ type: GET_SINGLE_USER_START });
  return axiosWithAuth()
    .get(`/api/users/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: res.data.body });
    })
    .catch(err => {
      dispatch({ type: GET_SINGLE_USER_FAILURE });
    });
};
