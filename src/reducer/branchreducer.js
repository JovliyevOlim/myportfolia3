import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import * as url from "url";

export const slice=createSlice({
    name:'branch',
    initialState:{
        branch:[]
    },
    reducers:{
        save:(state,action)=>{
                state.branch.push(action.payload.object)
        }
    }
})

export const getbranch=(data)=>apiCall({
    url:'/branch/'+data,
    method:'get',
    data,
    onSuccess:slice.actions.save.type
})

export default slice.reducer