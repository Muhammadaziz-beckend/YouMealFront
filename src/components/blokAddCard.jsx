import { useState } from 'react'
import Close from '../static/img/close.svg'
import { useNavigate } from 'react-router-dom'
import Post from '../routes/post'
import Loading from '../static/img/loading.gif'

const BlokAddCard = ({ blokData, setBlok, getCartUser }) => {

    let navigate = useNavigate()

    const [countBeyProduct, setCountBeyProduct] = useState(1)
    const [loading, setLoading] = useState(false)

    const user = localStorage.getItem('infoUserMeal')

    const addCartProduct = () => {

        if (user) {

            const { token, id } = JSON.parse(user)

            const date = {
                "user": id,
                "product": blokData?.id,
                "count_product": countBeyProduct
            }

            setLoading(!loading)
            Post('http://127.0.0.1:8000/api/v1/cards/', date, token).then(
                r => {
                    if (r?.status == 201 || r?.status == 200) {
                        setBlok(false)
                    }
                    getCartUser()
                }
            )

        } else {
            navigate('/auth/login')
        }

    }


    return (

        <>
            <div className="blok_add_card">
                <div className="container">
                    <div className="blok_add_card_item">

                        <div className="hed_item">
                            <h3>Мясная бомба</h3>

                            <button onClick={() => setBlok(false)} className='close' type='button'>
                                <img src={Close} />
                            </button>
                        </div>

                        <div className="main_item">
                            <div className="left">
                                <img src={blokData?.image} alt="" />

                                <div className="text_blok">
                                    <p className='text'>
                                        {blokData?.description}
                                    </p>
                                    <ul className='product_compose'>
                                        <b>Состав:</b>
                                        {blokData?.product_composition.map(
                                            item => (<li>{item?.name}</li>)
                                        )}
                                    </ul>
                                    <span className='info_caloric'>{blokData?.weight}г, ккал {blokData?.calories}</span>
                                </div>
                            </div>
                            <div className="right">

                                <div className="blok_info_bey_and_prise">
                                    <button onClick={addCartProduct} className='add' type="button">
                                        {loading ?
                                            (
                                                <img src={Loading} alt="" />
                                            )
                                            : 'Добавить'}
                                    </button>

                                    <div className="blok_place_and_minus_bey_product">
                                        <button onClick={() => {
                                            if (countBeyProduct - 1 > 0) {
                                                setCountBeyProduct(countBeyProduct - 1)
                                            }
                                        }}>-</button>
                                        <span>{countBeyProduct}</span>
                                        <button onClick={() => {
                                            setCountBeyProduct(countBeyProduct + 1)
                                        }}>+</button>
                                    </div>
                                </div>
                                <h2>{blokData?.price}₽</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default BlokAddCard