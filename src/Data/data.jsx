import { useEffect, useRef, useState } from "react"
import Get from "../routes/get"


const Data = () => {
    const [filter, setFilter] = useState({})
    const [card, setCard] = useState([])
    const [category, setCategory] = useState([])
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [products, setProducts] = useState([]);

    const ApiUrl = 'https://youmeal.onrender.com/'

    const productRef = useRef(null)

    // const user = localStorage.getItem('infoUserMeal')


    const buildUrlWithParams = (baseUrl, filters) => {
        const url = new URL(baseUrl);

        // Добавляем массивы, такие как 'near' и 'house_rules'
        for (let key in filters) {
            if (Array.isArray(filters[key])) {
                filters[key].forEach(value => {
                    url.searchParams.append(key, value);
                });
            }
        }

        return url.toString();
    };

    useEffect(() => {
        Get(`${ApiUrl}api/v1/category/`).then(r => {
            setCategory(r?.data)
        })

    }, [])

    useEffect(() => { if (filter?.category) setPage(1)},[filter])

    const getProduct = () => {
        Get(buildUrlWithParams(`${ApiUrl}api/v1/products/?page=${page}`, filter)).then(r => {
            setData(r?.data)
            setTotalPages(Math.ceil(r?.data?.count / 6))
            if (productRef.current) {
                productRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        })
    }


    useEffect(() => {

        getProduct()

    }, [page,filter,category])

    return {
        category,
        filter,
        setFilter,
        data,

        productRef,
        ApiUrl,

        page,
        setPage,
        totalPages,

        getProduct
    }

}

export default Data