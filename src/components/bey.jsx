import Pic from '../static/img/pic.svg'
import Close from '../static/img/close.svg'
import Post from '../routes/post.jsx'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Bey = ({ blokBey, setBlokBey, arrIdCard }) => {

    let navigator = useNavigate()

    const [blokAddress, setBlokAddress] = useState(true)
    const user = localStorage.getItem('infoUserMeal')

    const [errorPromoCode, setErrorPromoCode] = useState('')

    const headerSubmit = (event) => {

        event.preventDefault()

        if (!user) navigator('/auth/login')

        const { token, id } = JSON.parse(user)

        const formData = new FormData(event.target)
        const data = {
            user: JSON.parse(user)?.id
        }

        const data2 = {
        }

        for (let [key, value] of formData) {
            if (value) data[key] = value
        }

        data2['type_order'] = data?.type_order
        data2['promo_code'] = data?.promo_code


        delete data?.type_order
        delete data?.promo_code

        console.log(data, data2);
        // http://127.0.0.1:8000/api/v1/address/

        Post('http://127.0.0.1:8000/api/v1/address/', data, token).then(
            r => {
                if (r?.status === 201) {


                    data2['user'] = id
                    data2['address'] = r?.data?.id

                    Post('http://127.0.0.1:8000/api/v1/orders/', data2, token).then(r => {
                        if (r?.status == 201) {
                            navigator('/auth/login')
                        } else {
                            setErrorPromoCode(r?.response?.data[0])

                            setTimeout(() => setErrorPromoCode(''),4000)
                        }
                        console.log(r);
                    })
                }
            }
        )
    }

    return (
        <>
            <div className="blok_bey_products">
                <div className="container">
                    <div className="blok_bey_product_item">

                        <div className="left">
                            <img src={Pic} alt="" />
                        </div>

                        <div className="right">
                            <div className="hed_blok_bey">
                                <h2>Доставка</h2>
                                <button onClick={() => {
                                    setBlokBey(!blokBey)
                                }} className='close' type='button'>
                                    <img src={Close} alt="" />
                                </button>
                            </div>

                            <form className='form' method="post" onSubmit={headerSubmit}>

                                <div className="blok_from_items">

                                    <div className="blok_form_item_radio">

                                        <label>
                                            <input type="radio" value='Pickup' onClick={() => { setBlokAddress(false) }} name='type_order' />
                                            <span>Самовывоз</span>
                                        </label>

                                        <label>
                                            <input type="radio" value='Delivery' onClick={() => { setBlokAddress(true) }} defaultChecked name='type_order' />
                                            <span>Доставка</span>
                                        </label>
                                    </div>

                                    {blokAddress && (
                                        <>
                                            <label className='label'>
                                                <input type="text" placeholder='Улица' name='street' required />
                                            </label>

                                            <label className='label_items'>
                                                <input type="number" placeholder='дом' name='house_number' required />
                                                <input type="number" placeholder='квартира' name='apartment' />
                                            </label>

                                            <label className='label_items'>
                                                <input type="number" placeholder='Этаж' min={1} name='floor' />
                                                <input type="text" placeholder='Домофон' name='intercom' />
                                            </label>
                                        </>
                                    )}


                                    <label className='label'>
                                        <input type="text" name='promo_code' placeholder='Промокод если есть' />
                                        {errorPromoCode ? (
                                            <p style={{color:'red'}}>{errorPromoCode}</p>
                                        ): ''}
                                    </label>

                                </div>

                                <button type="submit">Оформить</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default Bey