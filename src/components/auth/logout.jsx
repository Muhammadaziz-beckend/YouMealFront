import { useNavigate } from "react-router-dom"
import Post from "../../routes/post"


const Logout = ({ApiUrl}) => {
    let navigate = useNavigate()

    if (!localStorage.getItem('infoUserMeal')) return navigate('/auth/login')

    let { token } = JSON.parse(localStorage.getItem('infoUserMeal'))
    console.log(token);


    Post(`${ApiUrl}api/v1/auth/logout/`, null, token).then(
        r => {
            localStorage.removeItem('infoUserMeal')
            return navigate('/')
        }
    )
}

export default Logout