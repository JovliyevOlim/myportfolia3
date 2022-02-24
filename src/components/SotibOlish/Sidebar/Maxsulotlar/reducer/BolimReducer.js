import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'bolimlar',
    initialState: {
        bolimlar: [],
        current :0
    },
    reducers: {
        getFrom: (state, action) => {
            state.bolimlar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.bolimlar.unshift(action.payload)
            state.current+=1
            console.log('SAQLANDI_BOLIM')
            console.log(action.payload)
        },
        editfrom: (state,action) => {
            state.bolimlar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{
            console.log('DELETED_BOLIM')
            // toast.info('O`chirildi')
        }
    }
});

export const getBolim=(data)=>apiCall({
    url: '/category/get-by-businessId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveBolim=(data)=>apiCall({
    url: '/category',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editBolim=(data)=>apiCall({
    url: '/category/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteBolim=(data)=>apiCall({
    url: '/category/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer