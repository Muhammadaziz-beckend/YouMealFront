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
                        <NavLink className={`link ${navigate.pathname == '/auth/orders' ? 'cheng' : null }`} to={'/auth/orders/'}>Заказы</NavLink>
                        <NavLink className={`link ${navigate.pathname == '/auth/' ? 'cheng' : null }`} to={'/auth/'}>Профиль</NavLink>
                        <NavLink className={`link ${navigate.pathname == '/auth/history' ? 'cheng' : null }`} to={'/auth/history/'}>История заказов</NavLink>
                        <NavLink className={`link ${navigate.pathname == '/auth/chang-password' ? 'cheng' : null }`} to={'/auth/chang-password/'}>Сменить пароль</NavLink>
                        <NavLink className={'link'} to={'/auth/logout/'}>Выйти</NavLink>
                    </div>
                </div>
            </aside>
        </>
    )
}


export default Left