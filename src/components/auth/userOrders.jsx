import { useEffect, useState } from "react"
import Get from '../../routes/get.jsx'

import UserOrder from "./userOrder"



const UserOrders = () => {

    const [data,setData] = useState([])

    const user = JSON.parse(localStorage.getItem('infoUserMeal'))

    useEffect(() => {

        const {token} = user
        Get('http://127.0.0.1:8000/api/v1/auth/order/',token).then(
            r => {
                setData(r?.data)
            }
        )

    },[])
    

    return (
        <>
            <div className="orders">
                <div className="orders_container">
                    <div className="orders_items">
                        <div className="hed_info">
                            <span>Дата</span>
                            <span>Номер заказа</span>
                            <span>Сумма заказа</span>
                            <span>Статус</span>
                        </div>

                        <div className="orders_main">
                            <div className="orders_items">
                                {data?.map(item => (<UserOrder date={item}/>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserOrders