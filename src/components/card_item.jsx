import { useEffect, useState } from "react"
import Post from '../routes/post.jsx'


const CardItem = ({ user, data, countValue }) => {

    const [valueProduct, setValueProduct] = useState(countValue)

    useEffect(() => {

        const date = {
            'count_product': valueProduct
        }
        if (user) {
            const { token } = JSON.parse(user)

            Post(`http://127.0.0.1:8000/api/v1/cards/change-product-quantity/${data?.id}/`, date, token).then
                (
                    r => console.log(r)
                )
        }

    }, [valueProduct])

    return (
        <>
            <div className="blok_item_product">
                <div className="left">
                    <img src={data?.product?.image} alt="" />
                </div>
                <div className="center">
                    <span className='name'>Супер сырный</span>
                    <span className='gram'>512г</span>
                    <span className='prise'>550₽</span>
                </div>
                <div className="end">
                    <button onClick={() => {
                        if (valueProduct - 1 > 0) {
                            setValueProduct(valueProduct - 1)
                        }
                    }}>-</button>
                    {valueProduct}
                    <button onClick={() => { setValueProduct(valueProduct + 1) }
                    }>+</button>
                </div>
            </div>
        </>
    )
}


export default CardItem;