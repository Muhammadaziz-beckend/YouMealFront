import { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"



const Left = () => {
    let navigate = useLocation()
    const [chang,setChang] = useState('')

    console.log(navigate.pathname);
    
    return (
        <>
            <aside className="aside">
                <div className="aside_container">
                    <div className="aside_items">
                        <h2>Аккаунт</h2>
                        <NavLink className={'link'} to={''}>Заказы</NavLink>
                        <NavLink className={`link ${navigate.pathname == '/auth/' ? 'cheng' : null }`} to={'/auth/'}>Профиль</NavLink>
                        <NavLink className={'link'} to={''}>История заказов</NavLink>
                        <NavLink className={`link ${navigate.pathname == '/auth/chang-password' ? 'cheng' : null }`} to={'chang-password'}>Сменить пароль</NavLink>
                        <NavLink className={'link'} to={''}>Выйти</NavLink>
                    </div>
                </div>
            </aside>
        </>
    )
}


export default Left