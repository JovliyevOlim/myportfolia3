import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'mahsulotlar',
    initialState: {
        mahsulotlar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.mahsulotlar = action.payload
            console.log(action.payload);
        },
        savefrom: (state,action) => {
            state.mahsulotlar.unshift(action.payload)
        },
        editfrom: (state,action) => {
            state.mahsulotlar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{

            // toast.info('O`chirildi')
        }
    }
});

export const getMahsulot=()=>apiCall({
    url: '/user',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveMahsulot=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editMahsulot=(data)=>apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteMahsulot=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer