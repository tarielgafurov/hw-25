import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email : '',
    password : '' ,
    isLoading : false,
    secondComponent : false,
    isValid: true,
    validEmail : false,
    validPassword : false,
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setEmail : (state , action) => {
            state.email = action.payload
            if(state.email.includes('@')){
                state.validEmail = true
            }else{
                state.validEmail = false
            }

        },
        setPassword : (state , action) => {
            state.password = action.payload
            if(state.password.trim().length > 5){
                state.validPassword = true
            }else{
                state.validPassword = false
            }
        },

        setIsLoading : (state) => {
            state.isLoading = !state.isLoading
            // return state.isLoading
        },

        setSecondComponent : (state) => {
            state.secondComponent = !state.secondComponent
        },

        setIsValid (state){
            state.isValid = !state.isValid
        }
    },
})


export const { setEmail , setPassword , setIsLoading , setSecondComponent,setIsValid } = userSlice.actions
export default userSlice.reducer