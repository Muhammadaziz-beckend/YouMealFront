import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Login from './login.jsx'
import { useEffect } from 'react';
import Register from './register.jsx';

const MainAuth = () => {

    let navigate = useNavigate()
    let locate = useLocation()
    const user = localStorage.getItem('infoUserMeal')

    
    useEffect(() => {
        
        if (user !== 'undefined' && user) {
            
            navigate('/auth/')
        }else if (locate?.pathname === '/auth/register/') {

        }
        else  {
            navigate('/auth/login/')
        }

    },[navigate])

    return (
        <Routes>
            <Route path='login/' element={<Login/>}/>
            <Route path='register/' element={<Register/>}/>
        </Routes>
    )
}


export default MainAuth