import { useEffect, useState } from 'react'

import Photo from '../static/img/photo.png'
import Motor from '../static/img/moto.svg'
import CardItem from './card_item'
import Get from '../routes/get.jsx'

const Card = () => {

    const [openCard, setOpenCard] = useState(false)

    const [data, setData] = useState([])
    const [countValueInCard, setCountValueInCard] = useState(0)
    const [finalPrise, setFinalPrise] = useState(0)

    const user = localStorage.getItem('infoUserMeal')

    const updateFinalPrise = () => {
        
    }

    useEffect(() => {

        if (user) {

            const { token } = JSON.parse(user)

            Get('http://127.0.0.1:8000/api/v1/cards/', token).then(
                r => {
                    if (r?.status == 200) {
                        
                        setCountValueInCard(r.data.carts.length)
                        setData(r?.data?.carts)
                        setFinalPrise(r.data?.final_prise)
                    }

                }
            )
        }

    }, [])

    return (
        <aside className="aside">
            <div className="aside_container">
                <div className={`aside_items ${openCard ? "hidden" : ""}`}>

                    <div className="aside_blok_info" onClick={() => setOpenCard(!openCard)}>
                        <h3>Корзина</h3>
                        <span className="count_card_items">
                            {countValueInCard}
                        </span>
                    </div>

                    <div className={`aside_items_products ${openCard ? 'none_model' : ''}`}>

                        {data.map(item => (

                            <CardItem user={user} data={item} countValue={item?.count_product}/>
                        ))}

                    </div>

                    <div className={`blok_final_price ${openCard ? 'none_model' : ''}`}>
                        <span>Итого</span>
                        <span>{finalPrise}₽</span>
                    </div>
                    
                    {data && (<button className={`place_an_order ${openCard ? 'none_model' : ''}`}>
                        Оформить заказ
                    </button>)}
                    

                    <div className={`info ${openCard ? 'none_model' : ''}`}>
                        <img src={Motor} alt="" />
                        <span>Бесплатная доставка</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Card