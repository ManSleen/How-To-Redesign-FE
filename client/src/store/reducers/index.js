import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GET_GUIDES_START,
  GET_GUIDES_SUCCESS,
  GET_GUIDES_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_GUIDE_BY_ID_START,
  GET_GUIDE_BY_ID_SUCCESS,
  GET_GUIDE_BY_ID_FAILURE,
  DELETE_GUIDE_START,
  DELETE_GUIDE_SUCCESS,
  DELETE_GUIDE_FAILURE,
  ADD_GUIDE_START,
  ADD_GUIDE_SUCCESS,
  ADD_GUIDE_FAILURE,
  UPDATE_GUIDE_START,
  UPDATE_GUIDE_SUCCESS,
  UPDATE_GUIDE_FAILURE,
  ADD_STEP_START,
  ADD_STEP_SUCCESS,
  ADD_STEP_FAILURE,
  GET_SINGLE_USER_START,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILURE,
  GET_GUIDES_BY_USER_START,
  GET_GUIDES_BY_USER_SUCCESS,
  GET_GUIDES_BY_USER_FAILURE,
  GET_SINGLE_PHOTO_START,
  GET_SINGLE_PHOTO_SUCCESS,
  GET_SINGLE_PHOTO_FAILURE,
  GET_GUIDE_PHOTOS_START,
  GET_GUIDE_PHOTOS_SUCCESS,
  GET_GUIDE_PHOTOS_FAILURE,
  ADD_PHOTO_START,
  ADD_PHOTO_SUCCESS,
  ADD_PHOTO_FAILURE,
  DELETE_PHOTO_START,
  DELETE_PHOTO_SUCCESS,
  DELETE_PHOTO_FAILURE
} from '../actions';

const initialState = {
  user: null,
  currentUser: JSON.parse(localStorage.getItem('user')) || null,
  currentUsersGuides: [],
  users: null,
  guide: null,
  guides: [],
  error: '',
  isLoading: false,
  isLoggedIn: localStorage.getItem('token') ? true : false,
  fetchingData: false,
  photo: null,
  guidePhotos: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        isLoading: true,
        fetchingData: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: '',
        isLoading: false,
        fetchingData: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: 'Login failed, please try again',
        isLoading: false,
        fetchingData: false
      };
    case LOGOUT:
      return {
        ...state,
        guides: null,
        user: null,
        currentUser: null,
        error: '',
        isLoading: false,
        fetchingData: false
      };
    case GET_GUIDES_START:
      return {
        ...state,
        guides: null,
        error: '',
        isLoading: true,
        fetchingData: true
      };
    case GET_GUIDES_SUCCESS:
      return {
        ...state,
        guides: action.payload,
        error: '',
        isLoading: false,
        fetchingData: false
      };
    case GET_GUIDES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        fetchingData: false
      };
    case SIGN_UP_START:
      return {
        ...state,
        user: null,
        users: null,
        guides: [],
        error: '',
        isLoading: true,
        fetchingData: false
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: '',
        isLoading: false,
        fetchingData: false
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.message,
        isLoading: false,
        fetchingData: false
      };
    case GET_USERS_START:
      return {
        ...state,
        users: null,
        error: '',
        isLoading: true,
        fetchingData: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: '',
        isLoading: false,
        fetchingData: false
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        error: 'Error getting all users',
        isLoading: false,
        fetchingData: false
      };
    case GET_GUIDE_BY_ID_START:
      return {
        ...state,
        error: '',
        isLoading: false,
        fetchingData: false
      };
    case GET_GUIDE_BY_ID_SUCCESS:
      return {
        ...state,
        guide: action.payload,
        error: '',
        isLoading: false,
        fetchingData: false
      };
    case GET_GUIDE_BY_ID_FAILURE:
      return {
        ...state,
        error: 'Error fetching item by ID',
        isLoading: false,
        fetchingData: false
      };
    case DELETE_GUIDE_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case DELETE_GUIDE_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case DELETE_GUIDE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_GUIDE_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case ADD_GUIDE_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case ADD_GUIDE_FAILURE:
      return {
        ...state,
        error: 'Error adding guide',
        isLoading: false
      };
    case UPDATE_GUIDE_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case UPDATE_GUIDE_SUCCESS:
      return {
        ...state,
        guides: [...state.guides],
        error: '',
        isLoading: false
      };
    case UPDATE_GUIDE_FAILURE:
      return {
        ...state,
        error: 'Error updating guide',
        isLoading: false
      };
    case ADD_STEP_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case ADD_STEP_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case ADD_STEP_FAILURE:
      return {
        ...state,
        error: 'Error adding a step',
        isLoading: false
      };

    case GET_SINGLE_USER_START:
      return {
        ...state,
        user: null,
        error: '',
        isLoading: true,
        fetchingData: true
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload[0],
        error: '',
        isLoading: false,
        fetchingData: false
      };
    case GET_SINGLE_USER_FAILURE:
      return {
        ...state,
        error: 'Error getting single user',
        isLoading: false,
        fetchingData: false
      };
    case GET_GUIDES_BY_USER_START:
      return {
        ...state,
        error: '',
        isLoading: true,
        fetchingData: true,
        currentUsersGuides: []
      };
    case GET_GUIDES_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchingData: false,
        currentUsersGuides: action.payload
      };
    case GET_GUIDES_BY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        fetchingData: false,
        error: 'Error getting guides by user'
      };

    case GET_SINGLE_PHOTO_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        photo: null
      };
    case GET_SINGLE_PHOTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        photo: action.payload
      };
    case GET_SINGLE_PHOTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_GUIDE_PHOTOS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        guidePhotos: null
      };
    case GET_GUIDE_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        guidePhotos: action.payload
      };
    case GET_GUIDE_PHOTOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_PHOTO_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ADD_PHOTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case ADD_PHOTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_PHOTO_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case DELETE_PHOTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case DELETE_PHOTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
