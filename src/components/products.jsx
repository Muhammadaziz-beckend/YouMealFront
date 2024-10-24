import Photo from '../static/img/photo.png'


const Products = ({productRef, data }) => {


    return (
        <>
            <section className="section_product" ref={productRef}>
                <div className="section_items">

                    <div className="section_products_items">
                        {data?.results?.map(item => (
                            <div className="product_item">
                                <div className="top">
                                    <img src={item?.image} alt="" />
                                </div>
                                <div className="center">
                                    <h4>{item?.price} KGS</h4>
                                    <span className="name">{item?.name}</span>
                                </div>
                                <div className="bottom">
                                    <span className="gram">{item?.weight}g</span>
                                    <button className='ass_card'>Добавить</button>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Products