import ACTION_TYPES from './ActionTypes.js';

export const fetchData = () => ({
  type: ACTION_TYPES.API_PENDING,
});

export const fetchSuccess = (data) => ({
  type: ACTION_TYPES.API_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: ACTION_TYPES.API_ERROR,
  payload: error,
});

export const loginData =()=>({
  type:ACTION_TYPES.API_PENDING
});

export const loginSuccess=(data)=>({
  type:ACTION_TYPES.LOGIN_SUCCESS,
  payload:data
});
export const loginError=(error)=>({
  type:ACTION_TYPES.LOGIN_SUCCESS,
  payload:error
})

export const clearData=(data)=>({
  type:ACTION_TYPES.CLEAR_STATE,
  
})

export const profileData =()=>({
  type:ACTION_TYPES.PROFILE_REQUEST
});

export const profileSuccess=(data)=>({
  type:ACTION_TYPES.PROFILE_SUCCESS,
  payload:data
});
export const profileError=(error)=>({
  type:ACTION_TYPES.PROFILE_FAIL,
  payload:error
})