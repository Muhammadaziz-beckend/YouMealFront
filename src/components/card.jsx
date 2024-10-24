import Photo from '../static/img/photo.png'
import Motor from '../static/img/moto.svg'
import { useState } from 'react'

const Card = () => {

    const [openCard,setOpenCard] = useState(false)

    return (
        <aside className="aside">
            <div className="aside_container">
                <div className={`aside_items ${openCard ? "hidden": "" }`}>

                    <div className="aside_blok_info" onClick={() => setOpenCard(!openCard)}>
                        <h3>Корзина</h3>
                        <span className="count_card_items">
                            4
                        </span>
                    </div>

                    <div className={`aside_items_products ${openCard ? 'none_model':''}`}>

                        <div className="blok_item_product">
                            <div className="left">
                                <img src={Photo} alt="" />
                            </div>
                            <div className="center">
                                <span className='name'>Супер сырный</span>
                                <span className='gram'>512г</span>
                                <span className='prise'>550₽</span>
                            </div>
                            <div className="end">
                                <button>-</button>
                                {1}
                                <button>+</button>
                            </div>
                        </div>

                        <div className="blok_item_product">
                            <div className="left">
                                <img src={Photo} alt="" />
                            </div>
                            <div className="center">
                                <span className='name'>Супер сырный</span>
                                <span className='gram'>512г</span>
                                <span className='prise'>550₽</span>
                            </div>
                            <div className="end">
                                <button>-</button>
                                {1}
                                <button>+</button>
                            </div>
                        </div>

                        <div className="blok_item_product">
                            <div className="left">
                                <img src={Photo} alt="" />
                            </div>
                            <div className="center">
                                <span className='name'>Супер сырный</span>
                                <span className='gram'>512г</span>
                                <span className='prise'>550₽</span>
                            </div>
                            <div className="end">
                                <button>-</button>
                                {1}
                                <button>+</button>
                            </div>
                        </div>

                    </div>

                    <div className={`blok_final_price ${openCard ? 'none_model':''}`}>
                        <span>Итого</span>
                        <span>1279₽</span>
                    </div>

                    <button className={`place_an_order ${openCard ? 'none_model':''}`}>
                        Оформить заказ
                    </button>

                    <div className={`info ${openCard ? 'none_model':''}`}>
                        <img src={Motor} alt="" />
                        <span>Бесплатная доставка</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Card