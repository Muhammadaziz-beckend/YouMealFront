import { useEffect, useState } from 'react'

import Motor from '../static/img/moto.svg'
import CardItem from './card_item'
import Bey from './bey'

const Card = ({ user, getCartUser, dataCard, countValueInCard,ApiUrl, finalPrise,arrIdCard , blokBey, setBlokBey }) => {

    const [openCard, setOpenCard] = useState(false)

    useEffect(() => {

        if (user) {

            getCartUser()
        }

    }, [])


    return (
        <>
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

                                <CardItem ApiUrl={ApiUrl} getCartUser={getCartUser} user={user} data={item} countValue={item?.count_product} />
                            ))}

                        </div>

                        {dataCard?.length ?
                            (
                                <>
                                    <div className={`blok_final_price ${openCard ? 'none_model' : ''}`}>
                                        <span>Итого</span>
                                        <span>{finalPrise}₽</span>
                                    </div>

                                    {dataCard && (<button onClick={() => {
                                        setBlokBey(!blokBey)
                                    }} className={`place_an_order ${openCard ? 'none_model' : ''}`}>
                                        Оформить заказ
                                    </button>)}

                                    <div className={`info ${openCard ? 'none_model' : ''}`}>
                                        <img src={Motor} alt="" />
                                        <span>Бесплатная доставка</span>
                                    </div>
                                </>
                            ) :
                            (
                                <div className={`info`}>
                                    <span>Тут пока пусто :(</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </aside>
            {blokBey && (<Bey ApiUrl={ApiUrl} arrIdCard={arrIdCard} blokBey={blokBey} setBlokBey={setBlokBey}/>)}
        </>
    )
}

export default Card