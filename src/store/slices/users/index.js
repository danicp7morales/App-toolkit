import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//esto slice es un reducer llamado userSlice
export const userSlice= createSlice({
    name: 'users',
    initialState:{
        list:[]
    },

    reducers:{
        setUsersList:(state, action) => {
            state.list = action.payload;

        }

    }
})

export default userSlice.reducer;

export const {setUsersList} = userSlice.actions

export const fetchAllUsers= () => (dispatch) => {
  axios.get('https://reqres.in/api/users?per_page=12')
  .then((response)  => {
    dispatch(setUsersList(response.data.data));
  } )
  .catch((error) => console.log(error));
}