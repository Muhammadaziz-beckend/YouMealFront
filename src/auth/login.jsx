import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Phone from "../components/auth/phone";
import Eye_open from '../static/img/eye_open.png'
import Eye_close from '../static/img/eye_close.png'
import Post from "../routes/post";
import Loading from '../static/img/loading.gif'

const Login = ({ApiUrl}) => {

    const navigate = useNavigate()

    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)

    const [phone, setPhone] = useState(null)
    const [imgEye, setImgEye] = useState(Eye_close)

    const [error, setError] = useState(false)
    const [errorPhone, setPhoneError] = useState('');
    const [errorPassword, setErrorPassword] = useState('')

    const handleChange = (value) => {
        setPhone(value);
        // Проверка длины номера
        if (value.length < 10) {
            setPhoneError('Номер телефона слишком короткий');
        } else {
            setPhoneError('');
        }
    };

    const FuControlPasswordType = () => {
        if (passwordRef.current.type === 'password') {
            passwordRef.current.type = 'text'
            setImgEye(Eye_open)
        } else {
            passwordRef.current.type = 'password'
            setImgEye(Eye_close)
        }
    }

    const headerSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = {}

        formData.append('phone', '+' + phone)

        for (let [key, value] of formData.entries()) {
            data[key] = value
        }

        if (!errorPhone && !errorPassword) {
            setLoading(true)
            Post(`${ApiUrl}api/v1/auth/login/`, data).then(
                r => {
                    if (r?.status == 200) {
                        localStorage.setItem('infoUserMeal', JSON.stringify(r?.data))
                        return navigate('/auth/')
                    } else {
                        setError(r?.response?.data?.detail)

                        setTimeout(() => {
                            setError('')
                        }, 3500)
                    }
                    setLoading(false)
                }
            )
        }

    }

    return (

        <div className="container_form">

            <div className={error ? "error_from" : 'error_from_none'}>
                <p>
                    {error}
                </p>
            </div>

            <form method="post" className="auth_login" onSubmit={headerSubmit}>

                <label className="label">
                    <Phone handleChange={handleChange} phone={phone} setPhone={setPhone} />
                    {errorPhone && <p className="error" style={{ color: 'red' }}>{errorPhone}</p>}
                </label>

                <label className="label">
                    <input required ref={passwordRef} className="input" type="password" name="password" placeholder="Выведите пароль" />
                    <button onClick={FuControlPasswordType} className="control_type_password" type="button">
                        <img src={imgEye} alt="" />
                    </button>
                    {errorPassword && <p className="error" style={{ color: 'red' }}>{errorPassword}</p>}
                </label>

                <div className="info">
                    <button type="submit">
                        {loading ?
                            (
                                <img src={Loading} alt="" />
                            )
                            : 'Войти'
                        }

                    </button>
                    <NavLink to={'/auth/register/'} className="text">Вы ешё не зарегистрированы?</NavLink>
                </div>
            </form>
        </div>
    )
}


export default Login;