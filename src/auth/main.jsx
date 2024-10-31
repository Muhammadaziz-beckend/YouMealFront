import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Login from './login.jsx'
import Logout from '../components/auth/logout.jsx'
import Register from './register.jsx';
import UserProfile from '../components/auth/userProfile.jsx';
import Left from '../components/auth/left.jsx';
import ChangPassword from '../components/auth/chengPassword.jsx';
import UserOrders from '../components/auth/userOrders.jsx';
import UserHistory from '../components/auth/hestory.jsx';

const MainAuth = ({ApiUrl}) => {



    let navigate = useNavigate()
    let locate = useLocation()
    const user = localStorage.getItem('infoUserMeal')


    useEffect(() => {
        if (!user) {
            navigate('/auth/login')
        } else if (locate.pathname === '/auth/register' && user) {
            navigate('/auth/register')
        } else if (user && (locate.pathname === '/auth/login' || locate.pathname === '/auth/register')) {
            navigate('/auth/')
        }
    }, [user])
    

    return (
        <Routes>
            <Route path='login/' element={<Login ApiUrl={ApiUrl}/>} />
            <Route path='register/' element={<Register ApiUrl={ApiUrl}/>} />
            <Route path='/' element={
                <div className='auth'>
                    <div className="container">
                        <div className="auth_items">
                            <Left ApiUrl={ApiUrl} />
                            <UserProfile ApiUrl={ApiUrl}/>
                        </div>
                    </div>
                </div>
            } />
            <Route path='/chang-password' element={
                <div className='auth'>
                    <div className="container">
                        <div className="auth_items">
                            <Left ApiUrl={ApiUrl}/>
                            <ChangPassword ApiUrl={ApiUrl}/>
                        </div>
                    </div>
                </div>
            } />
            <Route path='/logout' element={<Logout ApiUrl={ApiUrl}/>} />
            <Route path='/orders' element={
                <div className='auth'>
                    <div className="container">
                        <div className="auth_items">
                            <Left ApiUrl={ApiUrl}/>
                            <UserOrders ApiUrl={ApiUrl}/>
                        </div>
                    </div>
                </div>
            } />
            <Route path='/history' element={
                <div className='auth'>
                    <div className="container">
                        <div className="auth_items">
                            <Left ApiUrl={ApiUrl} />
                            <UserHistory ApiUrl={ApiUrl}/>
                        </div>
                    </div>
                </div>
            } />
        </Routes>
    )
}


export default MainAuth