import { useState } from "react"

import Loading from '../../static/img/loading.gif'
import Post from "../../routes/post"


const ChangPassword = () => {

    const [errorPassword2, setErrorPassword2] = useState('')
    const [errorOldPassword, setErrorOldPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const user = localStorage.getItem('infoUserMeal')

    const SetTimeout = (setError, value, scend) => {
        scend = scend * 1000

        setTimeout(() => setError(value), scend)
    }

    const headerSubmit = (event) => {

        event.preventDefault()

        const formData = new FormData(event.target)
        const data = {}

        for (let [key, value] of formData.entries()) {
            data[key] = value
        }

        if (data?.password2 != data?.new_password) {
            setErrorPassword2('Пароли не совпадают!')
            SetTimeout(setErrorPassword2, '', 4)
        } else {

            // if (data?.new_password?.length < 7) {
            //     setErrorPassword2('Длина пароли должен быть больше 7 символов!')
            //     return SetTimeout(setErrorPassword2, '', 4)
            // }

            const { token } = JSON.parse(user)

            delete data?.password2


            setLoading(true)
            Post(`http://127.0.0.1:8000/api/v1/auth/chang-password/`, data, token).then(
                r => {
                    if (r?.status == 200) {
                        setErrorPassword2('Пароль успешно сменён')
                        SetTimeout(setErrorPassword2, '', 4)
                    } else {
                        setErrorOldPassword(r?.response?.data?.detail)
                        SetTimeout(setErrorOldPassword, '', 4)
                    }
                    setLoading(false)
                }
            )

        }
    }

    return (
        <>
            <section className="auth_section">
                <div className="auth_section_container">
                    <div className="auth_section_items">
                        <h2 className="info">Смене пароля</h2>

                        <form className="auth_section_form" method="post" onSubmit={headerSubmit}>
                            <label className="label">
                                <p className="info_input">Старый пароль</p>
                                <input required type="password" name="old_password" />
                                <p className="error">{errorOldPassword}</p>
                            </label>
                            <label className="label">
                                <p className="info_input">Новый пароль</p>
                                <input required type="password" name="new_password" />
                            </label>
                            <label className="label">
                                <p className="info_input">Повторите пароль</p>
                                <input required type="password" name="password2" />
                                <p className="error">{errorPassword2}</p>
                            </label>
                            <button type="submit">
                                {loading ? (
                                    <img src={Loading} />
                                ) : 'Изменить'}
                            </button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ChangPassword;