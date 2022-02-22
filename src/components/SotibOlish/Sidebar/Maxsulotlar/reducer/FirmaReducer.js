import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";

const slice = createSlice({
    name: 'firmalar',
    initialState: {
        firmalar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.firmalar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.firmalar.unshift(action.payload)
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.firmalar.map((item,index)=>{
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

export const getFirma=()=>apiCall({
    url: '/brand/by-businessId/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveFirma=(data)=>apiCall({
    url: '/brand',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editFirma=(data)=>apiCall({
    url: '/brand',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteFirma=(data)=>apiCall({
    url: '/brand/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer