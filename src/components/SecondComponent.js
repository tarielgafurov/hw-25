import { useDispatch, useSelector } from "react-redux"
import { setIsLoading, setIsValid, setSecondComponent } from "../features/user/userSlice"
import IsLoading from "./Isloading"
import './Secondcomponent.css'

const SecondComponent = () => {

    const dispatch=useDispatch()
    const isValid = useSelector(state=>state.user.setIsValid)
    const isLoading = useSelector(state => state.user.isLoading)

   
   function btnHandler(){
    dispatch(setIsLoading())
    setTimeout(()=>{
        dispatch(setIsValid())
        dispatch(setSecondComponent())
        dispatch(setIsLoading())
    },2000)
   }

    return (
        <div className="cont">
            <h1>Welcome !</h1>
            <button onClick={btnHandler}>Exit</button>
            {isLoading  &&  <div><IsLoading/></div>}
        </div>
    )
}

export default SecondComponent