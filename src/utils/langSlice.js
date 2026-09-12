import {createSlice} from '@reduxjs/toolkit';
import lang from './lang';

const langSlice=createSlice({
    name:'language',
    initialState:{
        language:lang[0],
        
    },
    reducers:{
        addLanguage:(state,action)=>{
             state.language=action.payload;
        },
    
    },
});

export const {addLanguage}=langSlice.actions;
export default langSlice.reducer;