import { useEffect, useState } from "react"

import Post from '../routes/post.jsx'
import DeleteItem from "../routes/delete.jsx"
import Delete from '../static/img/delete.svg'

const CardItem = ({ user, data, countValue,getCartUser,ApiUrl }) => {

    const [valueProduct, setValueProduct] = useState(countValue)

    useEffect(() => {
        setValueProduct(countValue)
    },[countValue])

    useEffect(() => {

        const date = {
            'count_product': valueProduct
        }
        if (user) {
            const { token } = JSON.parse(user)

            Post(`${ApiUrl}api/v1/cards/change-product-quantity/${data?.id}/`, date, token).then
                (
                    r => {}
                )
        }

    }, [valueProduct])

    const DeleteInItem = (id) => {

        const { token } = JSON.parse(user)

        DeleteItem(`${ApiUrl}/api/v1/cards/${id}/`,token).then(r => {getCartUser()})

    }

    return (
        <>
            <div className="blok_item_product">
                <div className="left">
                    <img src={data?.product?.image} alt="" />
                </div>
                <div className="center">
                    <span className='name'>{data?.product?.name}</span>
                    <span className='gram'>{data?.product?.weight}г</span>
                    <span className='prise'>{data?.product?.price}₽</span>
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
                <button type="button" onClick={() => DeleteInItem(data?.id)} className="blok_delete">
                    <img src={Delete}/>
                </button>
            </div>
        </>
    )
}


export default CardItem;