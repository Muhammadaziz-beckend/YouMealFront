import { useEffect, useState } from 'react'

import Photo from '../static/img/photo.png'
import Motor from '../static/img/moto.svg'
import CardItem from './card_item'
import Get from '../routes/get.jsx'

const Card = ({user,getCartUser,dataCard,countValueInCard,finalPrise}) => {

    const [openCard, setOpenCard] = useState(false)

    useEffect(() => {

        if (user) {

            getCartUser()
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

                        {dataCard.map(item => (

                            <CardItem getCartUser={getCartUser} user={user} data={item} countValue={item?.count_product}/>
                        ))}

                    </div>

                    <div className={`blok_final_price ${openCard ? 'none_model' : ''}`}>
                        <span>Итого</span>
                        <span>{finalPrise}₽</span>
                    </div>
                    
                    {dataCard && (<button className={`place_an_order ${openCard ? 'none_model' : ''}`}>
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