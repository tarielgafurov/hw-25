import './Password.css'
import { useSelector } from "react-redux"

const Password = () => {

    const password = useSelector((state) => state.user.password)

    return (
        <div className="password" >{password}</div>
    )

}

export default Password