import { configureStore } from "@reduxjs/toolkit";
import users from './slices/users';

//configura con todos mis reducer en uno solo y lo conecta al store
export default configureStore({
    reducer:{
       users
    }
});