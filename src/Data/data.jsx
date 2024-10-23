import { useEffect, useState } from "react"
import Get from "../routes/get"


const Data = () => {
    const [filter,setFilter] = useState({})
    const [card,setCard] = useState([])
    const [category,setCategory] = useState([])

    useEffect(() => {
        Get('http://127.0.0.1:8000/api/v1/category/').then(r => {
            setCategory(r?.data)
        })

    },[])

    return {
        category,
        filter,
        setFilter,
    }

}

export default Data