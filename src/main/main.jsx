import Card from "../components/card"
import Category from "../components/category"
import Products from "../components/products"




const ProjectMain = ({ category, filter, setFilter }) => {

    return (
        <>
            <Category category={category} filter={filter} setFilter={setFilter} />

            <main className="main">
                <div className="container">
                    <div className="main_items">
                        <Card />
                        <Products />
                    </div>
                </div>
            </main>
        </>
    )
}


export default ProjectMain