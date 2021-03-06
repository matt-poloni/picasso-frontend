import axios from 'axios';
import axiosAuth from '../utils/axiosAuth';

export const baseURL = 'https://bw-picasso.herokuapp.com';
export const testURL = 'https://quiet-shore-93010.herokuapp.com';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post(`${baseURL}/auth/login`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response
      })
    });
}

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios.post(`${baseURL}/auth/register`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.token
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: SIGNUP_FAILURE,
        payload: err.response
      })
    });
}

export const FETCH_STYLES_START = 'FETCH_STYLES_START';
export const FETCH_STYLES_SUCCESS = 'FETCH_STYLES_SUCCESS';
export const FETCH_STYLES_FAILURE = 'FETCH_STYLES_FAILURE';
export const fetchStyleImages = () => dispatch => {
  dispatch({ type: FETCH_STYLES_START });
  return axios.get(`${testURL}/images/styles/`)
    .then(res => {
      dispatch({
        type: FETCH_STYLES_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_STYLES_FAILURE,
        payload: err.response
      })
    });
}

export const SUBMIT_PAYLOAD_START = 'SUBMIT_PAYLOAD_START';
export const SUBMIT_PAYLOAD_SUCCESS = 'SUBMIT_PAYLOAD_SUCCESS';
export const SUBMIT_PAYLOAD_FAILURE = 'SUBMIT_PAYLOAD_FAILURE';
export const submitPayload = formData => dispatch => {
  dispatch({ type: SUBMIT_PAYLOAD_START });
  return axios.post(`${testURL}/images/process/`, formData)
    .then(res => {
      dispatch({
        type: SUBMIT_PAYLOAD_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: SUBMIT_PAYLOAD_FAILURE,
        payload: err.response,
      })
    });
}

export const SUBMIT_DEEP_PAYLOAD_START = 'SUBMIT_DEEP_PAYLOAD_START';
export const SUBMIT_DEEP_PAYLOAD_SUCCESS = 'SUBMIT_DEEP_PAYLOAD_SUCCESS';
export const SUBMIT_DEEP_PAYLOAD_FAILURE = 'SUBMIT_DEEP_PAYLOAD_FAILURE';
export const submitDeepPayload = formData => dispatch => {
  dispatch({ type: SUBMIT_DEEP_PAYLOAD_START });
  return axiosAuth().post(`${testURL}/images/process-deep/`, formData)
    .then(res => {
      dispatch({
        type: SUBMIT_DEEP_PAYLOAD_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: SUBMIT_DEEP_PAYLOAD_FAILURE,
        payload: err.response,
      })
    });
}

export const FETCH_REQUEST_START = 'FETCH_REQUEST_START';
export const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
export const FETCH_REQUEST_FAILURE = 'FETCH_REQUEST_FAILURE';
export const fetchRequest = key => dispatch => {
  dispatch({ type: FETCH_REQUEST_START });
  return axios.get(`${testURL}/images/public/${key}`)
    .then(res => {
      dispatch({
        type: FETCH_REQUEST_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_REQUEST_FAILURE,
        payload: err.response
      })
    })
}

export const FETCH_GALLERY_START = 'FETCH_GALLERY_START';
export const FETCH_GALLERY_SUCCESS = 'FETCH_GALLERY_SUCCESS';
export const FETCH_GALLERY_FAILURE = 'FETCH_GALLERY_FAILURE';
export const fetchGallery = () => dispatch => {
  dispatch({ type: FETCH_GALLERY_START });
  return axios.get(`${testURL}/images/public`)
    .then(res => {
      dispatch({
        type: FETCH_GALLERY_SUCCESS,
        payload: res.data.reverse(),
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_GALLERY_FAILURE,
        payload: err.response
      })
    })
}
