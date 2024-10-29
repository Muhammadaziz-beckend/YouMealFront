import { useEffect, useState } from "react"
import BlokAddCard from "../components/blokAddCard"
import Card from "../components/card"
import Category from "../components/category"
import PaginationOutlined from "../components/paginator"
import Products from "../components/products"
import Get from "../routes/get"

const ProjectMain = ({ category, filter, setFilter, data, productRef, page, setPage, totalPages,getProduct }) => {

    const [blok, setBlok] = useState(false)
    const [blokBey, setBlokBey] = useState(false)
    const [blokData, setBlokData] = useState({})

    const [arrIdCard, setArrIdCard] = useState([])

    const [dataCard, setDataCard] = useState([])
    const [countValueInCard, setCountValueInCard] = useState(0)
    const [finalPrise, setFinalPrise] = useState(0)

    const user = localStorage.getItem('infoUserMeal')

    useEffect(() => {

        setArrIdCard(dataCard?.reduce((acc, item) => {
            console.log(item);
            acc.push(item.id)
            return acc
        }, []))


    }, [dataCard])

    const getCartUser = async () => {
        const user = localStorage.getItem('infoUserMeal')

        if (user) {
            const { token } = JSON.parse(user)

            await Get('http://127.0.0.1:8000/api/v1/cards/', token).then(
                r => {

                    if (r?.status === 200 || r?.status === 201) {

                        setCountValueInCard(r.data.carts.length)
                        setDataCard(r?.data?.carts)
                        setFinalPrise(r.data?.final_prise)
                    }
                }
            )
        }

    }

    useEffect(() => {
        getCartUser()
    }, [])

    return (
        <>
            <Category getProduct={getProduct} category={category} filter={filter} setFilter={setFilter} />

            <main className="main">
                <div className="container">
                    <div className="main_items">
                        <Card arrIdCard={arrIdCard} blokBey={blokBey} setBlokBey={setBlokBey} user={user} countValueInCard={countValueInCard} finalPrise={finalPrise} blok={blok} getCartUser={getCartUser} dataCard={dataCard} />
                        <Products setBlokData={setBlokData} setBlok={setBlok} productRef={productRef} data={data} />
                        {blok && (<BlokAddCard getCartUser={getCartUser} blokData={blokData} setBlok={setBlok} />)}

                    </div>
                    <div className="paginator_container">

                        <PaginationOutlined
                            page={page}
                            setPage={setPage}
                            totalPages={totalPages}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}


export default ProjectMain