import { axiosWithAuth } from '../../utilities/axiosWithAuth';

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUp = credentials => dispatch => {
  dispatch({ type: SIGN_UP_START });
  return axiosWithAuth()
    .post('/api/auth/register', credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.saved));
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.saved });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SIGN_UP_FAILURE,
        payload: err || 'Something went wrong'
      });
    });
};

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/api/auth/login', credentials)
    .then(res => {
      console.log('login res', res);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const LOGOUT = 'LOGOUT';

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const GET_GUIDES_START = 'GET_GUIDES_START';
export const GET_GUIDES_SUCCESS = 'GET_GUIDES_SUCCESS';
export const GET_GUIDES_FAILURE = 'GET_GUIDES_FAILURE';

export const getGuides = () => dispatch => {
  dispatch({ type: GET_GUIDES_START });

  return axiosWithAuth()
    .get('/api/guides')
    .then(res => {
      dispatch({ type: GET_GUIDES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_GUIDES_FAILURE });
    });
};

export const GET_GUIDE_BY_ID_START = 'GET_GUIDE_BY_ID_START';
export const GET_GUIDE_BY_ID_SUCCESS = 'GET_GUIDE_BY_ID_SUCCESS';
export const GET_GUIDE_BY_ID_FAILURE = 'GET_GUIDE_BY_ID_FAILURE';

export const getGuideById = id => dispatch => {
  dispatch({ type: GET_GUIDE_BY_ID_START });
  return axiosWithAuth()
    .get(`/api/guides/${id}`)
    .then(res => {
      dispatch({ type: GET_GUIDE_BY_ID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_GUIDE_BY_ID_FAILURE });
    });
};

export const GET_GUIDES_BY_USER_START = 'GET_GUIDES_BY_USER_START';
export const GET_GUIDES_BY_USER_SUCCESS = 'GET_GUIDES_BY_USER_SUCCESS';
export const GET_GUIDES_BY_USER_FAILURE = 'GET_GUIDES_BY_USER_FAILURE';

export const getGuidesByUserId = userId => dispatch => {
  dispatch({ type: GET_GUIDES_BY_USER_START });
  return axiosWithAuth()
    .get(`/api/guides/user/${userId}`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_GUIDES_BY_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_GUIDES_BY_USER_FAILURE });
    });
};

export const DELETE_GUIDE_START = 'DELETE_GUIDE_START';
export const DELETE_GUIDE_SUCCESS = 'DELETE_GUIDE_SUCCESS';
export const DELETE_GUIDE_FAILURE = 'DELETE_GUIDE_FAILURE';

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

export const ADD_GUIDE_START = 'ADD_GUIDE_START';
export const ADD_GUIDE_SUCCESS = 'ADD_GUIDE_SUCCESS';
export const ADD_GUIDE_FAILURE = 'ADD_GUIDE_FAILURE';

export const addGuide = guide => dispatch => {
  dispatch({ type: ADD_GUIDE_START });
  return axiosWithAuth()
    .post('/api/guides', guide)
    .then(res => {
      dispatch({ type: ADD_GUIDE_SUCCESS, payload: res.data.body });
      return res;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_GUIDE_FAILURE });
    });
};

export const UPDATE_GUIDE_START = 'UPDATE_GUIDE_START';
export const UPDATE_GUIDE_SUCCESS = 'UPDATE_GUIDE_SUCCESS';
export const UPDATE_GUIDE_FAILURE = 'UPDATE_GUIDE_FAILURE';

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

export const ADD_STEP_START = 'ADD_STEP_START';
export const ADD_STEP_SUCCESS = 'ADD_STEP_SUCCESS';
export const ADD_STEP_FAILURE = 'ADD_STEP_FAILURE';

export const addStep = (step, id) => dispatch => {
  dispatch({ type: ADD_STEP_START });
  return axiosWithAuth()
    .post(`/api/steps`, step)
    .then(res => {
      dispatch({ type: ADD_STEP_SUCCESS, payload: res.data.body });
    })
    .catch(err => {
      dispatch({ type: ADD_STEP_FAILURE });
    });
};

export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_START });

  return axiosWithAuth()
    .get('/api/users')
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_USERS_FAILURE });
    });
};

export const GET_SINGLE_USER_START = 'GET_SINGLE_USER_START';
export const GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS';
export const GET_SINGLE_USER_FAILURE = 'GET_SINGLE_USER_FAILURE';

export const getSingleUser = id => dispatch => {
  dispatch({ type: GET_SINGLE_USER_START });
  return axiosWithAuth()
    .get(`/api/users/${id}`)
    .then(res => {
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: res.data.body });
    })
    .catch(err => {
      dispatch({ type: GET_SINGLE_USER_FAILURE });
    });
};

export const GET_SINGLE_PHOTO_START = 'GET_SINGLE_PHOTO_START';
export const GET_SINGLE_PHOTO_SUCCESS = 'GET_SINGLE_PHOTO_SUCCESS';
export const GET_SINGLE_PHOTO_FAILURE = 'GET_SINGLE_PHOTO_FAILURE';

export const getSinglePhoto = id => dispatch => {
  dispatch({ type: GET_SINGLE_PHOTO_START });
  return axiosWithAuth()
    .get(`/api/photos/one/${id}`)
    .then(res => {
      console.log('getSinglePhoto res', res);
      dispatch({ type: GET_SINGLE_PHOTO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SINGLE_PHOTO_FAILURE });
    });
};

export const GET_GUIDE_PHOTOS_START = 'GET_GUIDE_PHOTOS_START';
export const GET_GUIDE_PHOTOS_SUCCESS = 'GET_GUIDE_PHOTOS_SUCCESS';
export const GET_GUIDE_PHOTOS_FAILURE = 'GET_GUIDE_PHOTOS_FAILURE';

export const getGuidePhotos = guideId => dispatch => {
  dispatch({ type: GET_GUIDE_PHOTOS_START });
  return axiosWithAuth()
    .get(`/api/photos/${guideId}`)
    .then(res => {
      console.log('getGuidePhotos res', res);
      dispatch({ type: GET_GUIDE_PHOTOS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_GUIDE_PHOTOS_FAILURE });
    });
};

export const ADD_PHOTO_START = 'ADD_PHOTO_START';
export const ADD_PHOTO_SUCCESS = 'ADD_PHOTO_SUCCESS';
export const ADD_PHOTO_FAILURE = 'ADD_PHOTO_FAILURE';

export const addPhoto = photo => dispatch => {
  dispatch({ type: ADD_PHOTO_START });
  return axiosWithAuth()
    .post('/api/photos/', photo)
    .then(res => {
      console.log('addPhoto res', res);
      dispatch({ type: ADD_PHOTO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_PHOTO_FAILURE });
    });
};

export const DELETE_PHOTO_START = 'DELETE_PHOTO_START';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';
export const DELETE_PHOTO_FAILURE = 'DELETE_PHOTO_FAILURE';

export const deletePhoto = id => dispatch => {
  dispatch({ type: DELETE_PHOTO_START });
  return axiosWithAuth()
    .delete(`/api/photos/${id}`)
    .then(res => {
      console.log('deletePhoto res', res);
      dispatch({ type: DELETE_PHOTO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_PHOTO_FAILURE });
    });
};
