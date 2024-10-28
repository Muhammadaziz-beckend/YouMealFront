import { useState } from "react"
import BlokAddCard from "../components/blokAddCard"
import Card from "../components/card"
import Category from "../components/category"
import PaginationOutlined from "../components/paginator"
import Products from "../components/products"
import Get from "../routes/get"

const ProjectMain = ({ category, filter, setFilter, data, productRef, page, setPage, totalPages }) => {

    const [blok,setBlok] = useState(false)
    const [blokData,setBlokData] = useState({})

    const [dataCard, setDataCard] = useState([])
    const [countValueInCard, setCountValueInCard] = useState(0)
    const [finalPrise, setFinalPrise] = useState(0)

    const user = localStorage.getItem('infoUserMeal')

    const getCartUser = async () => {
        const user = localStorage.getItem('infoUserMeal')
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

    return (
        <>
            <Category category={category} filter={filter} setFilter={setFilter} />

            <main className="main">
                <div className="container">
                    <div className="main_items">
                        <Card user={user} countValueInCard={countValueInCard} finalPrise={finalPrise} blok={blok} getCartUser={getCartUser} dataCard={dataCard}/>
                        <Products setBlokData={setBlokData} setBlok={setBlok} productRef={productRef} data={data} />
                        {blok && (<BlokAddCard getCartUser={getCartUser} blokData={blokData} setBlok={setBlok}/>)}
                        
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