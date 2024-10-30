import { useNavigate } from "react-router-dom"
import Post from "../../routes/post"
import { useEffect } from "react"


const Logout = () => {
    let navigate = useNavigate()

    if (!localStorage.getItem('infoUserMeal')) return navigate('/auth/login')

    let { token } = JSON.parse(localStorage.getItem('infoUserMeal'))
    console.log(token);


    Post(`http://127.0.0.1:8000/api/v1/auth/logout/`, null, token).then(
        r => {
            if (r?.status == 200) {
                localStorage.removeItem('infoUserMeal')
                navigate('/')
            }
        }
    )
}

export default Logout