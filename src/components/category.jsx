import CategoriesSniper from "./catigory_sweper";


const Category = ({ category,filter,setFilter,getProduct }) => {


    return (
        <nav className="nav">
            <div className="container">
                <CategoriesSniper getProduct={getProduct} category={category} filter={filter} setFilter={setFilter} />
            </div>
        </nav>
    )
}


export default Category;