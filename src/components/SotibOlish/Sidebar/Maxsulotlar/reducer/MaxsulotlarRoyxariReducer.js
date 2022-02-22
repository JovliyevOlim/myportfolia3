import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'maxsulotlar',
    initialState: {
        maxsulotlar: []

    },
    reducers: {
        getFrom: (state, action) => {
            state.maxsulotlar = action.payload.object
            console.log(action.payload.object);
            console.log("OLIB_KELINDI_MAXSULOT");
        },
        savefrom: (state,action) => {
            console.log(action.payload)
            state.maxsulotlar.unshift(action.payload)
            console.log('SAQLANDI_MAXSULOT');
        },
        editfrom: (state,action) => {
            state.maxsulotlar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
        },
        deletefrom:(state,action)=>{
            console.log('DELETED_MAXSULOTLAR');
        }
    }
});

export const getMaxsulotRuyxati=()=>apiCall({
    url: '/product/get-by-business/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getCategory=()=>apiCall({
    url: '/get-by-category/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveMaxsulotRuyxati=(data)=>apiCall({
    url: '/product',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editMaxsulotRuyxati=(data)=>apiCall({
    url: '/product',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteMaxsulotRuyxati=(data)=>apiCall({
    url: '/product/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer