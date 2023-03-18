import axios from 'axios';
import { useSelector } from 'react-redux';
import ACTION_TYPES from './ActionTypes';
import { fetchData, fetchSuccess, fetchError, loginSuccess, loginError, loginData, clearData, profileData, profileSuccess, profileError } from './ApiAction';

export const apiActionCreator = (auth) => async (dispatch) => {
  dispatch(fetchData());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    if (response.status === 200) {
      dispatch(fetchSuccess(response.data));
      return Promise.resolve(response.data);
    } else {
      dispatch(fetchError('Invalid response'));
      return Promise.reject('Invalid response');
    }
  } catch (error) {
    dispatch(fetchError(error.message));
    return Promise.reject(error.message);
  }

};

export const loginApi = ({ params }) => async (dispatch) => {

  dispatch(loginData());

  try {
    const response = await axios.post('https://dummyjson.com/auth/login', params);

    if (response.status === 200) {
      dispatch(loginSuccess(response.data));
      return Promise.resolve(response.data);
    } else {
      dispatch(loginError('Invalid response'));
      return Promise.reject('Invalid response');
    }
  } catch (error) {
    dispatch(loginError(error.message));
    return Promise.reject(error.message);
  }
};

export const AddProfile = ({ imageObject }) => async (dispatch) => {
 console.log('sfsffsffsfsf',imageObject)
  dispatch(profileData());
  const formData = new FormData();
  formData.append('image', {
    uri: imageObject.documentPath.uri,
    name: 'profile_photo',
    type: 'image/jpeg',
  });
  const config = {
    headers: { 'content-type': 'multipart/form-data' }
   }
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/photos', formData,config);
   
    if (response.status === 200) {
      alert('fff')
      dispatch(profileSuccess(response.data));
      return Promise.resolve(response.data);
    } else {
      dispatch(profileError('Invalid response'));
      return Promise.reject('Invalid response');
    }
  } catch (error) {
    dispatch(profileError(error.message));
    return Promise.reject(error.message);
  }
};

export const clearDataApi = () => {
  return dispatch => {
    dispatch({ type: ACTION_TYPES.CLEAR_STATE })
  }
}


