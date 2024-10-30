import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Login from './login.jsx'
import Logout from '../components/auth/logout.jsx'
import Register from './register.jsx';
import UserOrders from '../components/auth/userProfilte.jsx';
import Left from '../components/auth/left.jsx';
import ChangPassword from '../components/auth/chengPassword.jsx';

const MainAuth = () => {


    let navigate = useNavigate()
    let locate = useLocation()
    const user = localStorage.getItem('infoUserMeal')


    useEffect(() => {

        if (!user) { navigate('/auth/login') }
        else if (locate?.pathname == '/auth/register' && !user) { }
        else if (user && (locate.pathname == '/auth/login' || locate.pathname == '/auth/register')) {
            navigate('/auth/')
        }

    }, [navigate,locate?.pathname,user])

    return (
        <Routes>
            <Route path='login/' element={<Login />} />
            <Route path='register/' element={<Register />} />
            <Route path='/' element={
                <div className='auth'>
                    <div className="container">
                        <div className="auth_items">
                            <Left />
                            <UserOrders />
                        </div>
                    </div>
                </div>
            } />
            <Route path='/chang-password' element={
                <div className='auth'>
                    <div className="container">
                        <div className="auth_items">
                            <Left />
                            <ChangPassword />
                        </div>
                    </div>
                </div>
            } />
             <Route path='/logout' element={<Logout />} />
        </Routes>
    )
}


export default MainAuth