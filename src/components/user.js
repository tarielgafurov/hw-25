import React from "react"
import Email from "./Email"
import Password from "./Password"
import { useDispatch,useSelector } from "react-redux"
import {setEmail, setIsValid , setPassword, setIsLoading , setSecondComponent  } from '../features/user/userSlice'
import IsLoading from "./Isloading"
import './User.css'

const User = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.user.isLoading)
    const validEmail = useSelector(state=>state.user.validEmail)
    const validPassword = useSelector(state => state.user.validPassword)
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(setIsLoading())
        setTimeout(() => {
            dispatch(setIsValid())
            dispatch(setSecondComponent())
            dispatch(setIsLoading())
        } , 2000)
    }


    return (
        <form onSubmit={formHandler}>
        <div className="container">
            <div className="mini-container" >
                <h1>Login</h1>
            <input onChange={(e) => {dispatch(setEmail(e.target.value))}}  type="text" placeholder="Email" /><br/>
            <input onChange={(e) => {dispatch(setPassword(e.target.value))}} type="password" placeholder="PassWord" /><br/>
            <button>Login</button>
            </div>
               {isLoading  &&  <div><IsLoading/></div>}
            <div>
            {!validEmail && <p style={{color : "red"}}>Некорректный Email('@')</p>}
               <span style={{color : "blue" , width: "250px" , height : "20px" , backgroundColor : "chartreuse"}} >Email :<Email/> </span>
            </div>
            <div>
            {!validPassword && <p style={{color : "red"}} >Пароль должен быть больше 5</p>}
            <span style={{color : "blue" , width: "250px" , height : "20px" , backgroundColor : "chartreuse"}}  > PassWord :<Password/> </span>
            </div>
        </div>
        </form>
        
    )
}

export default User