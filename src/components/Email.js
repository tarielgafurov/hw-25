import './Email.css'

import { useSelector } from "react-redux"

const Email = () => {
    const name = useSelector((state) => state.user.email)
    return <div className='Email'>{name}</div>
}

export default Email