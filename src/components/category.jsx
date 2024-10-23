import CategoriesSniper from "./catigory_sweper";


const Category = ({ category,filter,setFilter }) => {

    console.log(category);


    return (
        <nav className="nav">
            <div className="container">
                <CategoriesSniper category={category} filter={filter} setFilter={setFilter} />
            </div>
        </nav>
    )
}


export default Category;