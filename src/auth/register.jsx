import { useRef, useState } from "react"
import Phone from "../components/auth/phone"
import { NavLink, useNavigate } from "react-router-dom"

import Eye_open from '../static/img/eye_open.png'
import Eye_close from '../static/img/eye_close.png'
import Loading from '../static/img/loading.gif'
import Post from "../routes/post"


const Register = () => {
    const navigate = useNavigate()

    const passwordRef = useRef()
    const password2Ref = useRef()

    const [error, setError] = useState('')
    const [errorPhone, setPhoneError] = useState()

    const [phone, setPhone] = useState()
    const [imgEye, setImgEye] = useState(Eye_close)
    const [imgEye2, setImgEye2] = useState(Eye_close)
    const [loading, setLoading] = useState(false)

    const headerSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = {}

        if (phone) {

            formData.append('phone', '+' + phone)
        } else {
            setError('Вы не указали телефон номер')

            setTimeout(() => {
                setError('')
            }, 3550)
        }

        for (let [key, value] of formData.entries()) {
            data[key] = value

        }
        if (data?.cheng_password === data?.password) {

            if (data?.password.length > 7) {

                setLoading(true)
                Post('http://127.0.0.1:8000/api/v1/auth/register/', data).then(
                    r => {

                        if (r?.status === 201) {
                            localStorage.setItem('infoUserMeal', JSON.stringify(r?.data))
                            navigate('/auth/')
                        } else {
                            if (r?.response?.data?.detail) {

                                setError(r?.response?.data?.detail)
                            } else {
                                let text = ''
                                for (let i in r?.response?.data) {
                                    console.log(r?.response?.data[i])
                                    if (r?.response?.data[i][0] !== 'Обязательное поле.') {

                                        text += r?.response?.data[i] + '\n'
                                    } else {
                                        text += 'Вы не указали телефон номер' + '\n'
                                    }
                                }

                                setError(text)
                            }

                            setTimeout(() => {
                                setError('')
                            }, 3550)
                        }
                        setLoading(false)
                    }
                )
            } else {
                setError('Длина пароля меньше 8')

                setTimeout(() => {
                    setError('')
                }, 3550)
            }

        } else {
            setError('Пороли не совпадают')

            setTimeout(() => {
                setError('')
            }, 3550)
        }

    }

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

    const FuControlPasswordType2 = () => {
        if (password2Ref.current.type === 'password') {
            password2Ref.current.type = 'text'
            setImgEye2(Eye_open)
        } else {
            password2Ref.current.type = 'password'
            setImgEye2(Eye_close)
        }
    }

    return (
        <>
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
                        <input required type="text" className="input" name="first_name" placeholder="Имя" />
                    </label>

                    <label className="label">
                        <input required type="text" className="input" name="last_name" placeholder="Фамилия" />
                    </label>

                    <label className="label">
                        <input required type="email" className="input" name="email" placeholder="Email" />
                    </label>

                    <label className="label">
                        <input required ref={passwordRef} type="password" className="input" name="password" id="" placeholder="Пароль" />
                        <button onClick={FuControlPasswordType} className="control_type_password" type="button">
                            <img src={imgEye} alt="" />
                        </button>
                    </label>

                    <label className="label">
                        <input required ref={password2Ref} type="password" className="input" name="cheng_password" placeholder="Повторите пароль" />
                        <button onClick={FuControlPasswordType2} className="control_type_password" type="button">
                            <img src={imgEye2} alt="" />
                        </button>
                    </label>

                    <div className="info">
                        <button type="submit">
                            {loading ?
                                (
                                    <img src={Loading} alt="" />
                                )
                                : 'Регистрироваться'
                            }

                        </button>

                        <NavLink to={'/auth/login/'} className="text">У вас есть аккаунт?</NavLink>
                    </div>

                </form>
            </div>
        </>
    )
}


export default Register