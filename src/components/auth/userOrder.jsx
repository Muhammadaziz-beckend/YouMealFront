import { useState } from 'react'

import Close_open from '../../static/img/close_open.svg'
import Photo from '../../static/img/photo.png'

const UserOrder = ({ date }) => {
    const [open, setOpen] = useState(false)


    return (
        <div className="order_item">
            <div className="blok_item_hed">
                <span>{date?.date_create}</span>
                <span>{date?.id}</span>
                <span>{date?.total_price} ₽ </span>
                <span>{date?.type_order}</span>
                <div onClick={() => setOpen(!open)} className={`blok_icon_close_open ${open ? 'open' : ''}`}>
                    <img src={Close_open} />
                </div>
            </div>

            {open && (<div className="blok_items_main">

                {date?.cart.map(item => {
                    return (<div className="blok_item_main">
                        <div className="start">
                            <img src={item?.product?.image} alt="" />
                        </div>
                        <div className="center">
                            <span className='info_name'>{item?.product?.name}</span>
                            <span className='info_name'>{item?.count_product} шт</span>
                        </div>
                        <div className="address">
                            <h4>Адрес:</h4>
                            {date?.address?.street}
                            {date?.address?.house_number}
                        </div>
                        <span className="type_product">
                            Статус: {date?.status}
                        </span>
                        <div className="end">
                            <span className="price">
                                {item?.product?.price} * {item?.count_product} =
                            </span>
                            <br />
                            <span>{item?.final_tootle_prise} ₽</span>
                        </div>
                    </div>)
                })}

            </div>)}

        </div>
    )

}


export default UserOrder