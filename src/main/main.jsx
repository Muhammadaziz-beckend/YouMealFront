import Card from "../components/card"
import Category from "../components/category"
import PaginationOutlined from "../components/paginator"
import Products from "../components/products"




const ProjectMain = ({ category, filter, setFilter, data, productRef, page, setPage, totalPages }) => {

    return (
        <>
            <Category category={category} filter={filter} setFilter={setFilter} />

            <main className="main">
                <div className="container">
                    <div className="main_items">
                        <Card />
                        <Products productRef={productRef} data={data} />
                    </div>
                    <div className="paginator_container">

                        <PaginationOutlined page={page}
                            setPage={setPage}
                            totalPages={totalPages} />
                    </div>
                </div>
            </main>
        </>
    )
}


export default ProjectMain