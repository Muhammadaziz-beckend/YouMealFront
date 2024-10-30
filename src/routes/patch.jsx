import axios from "axios"


const Patch = async (url, data, token = null) => {

    const config = {
        headers: {
            'Authorization': `Token ${token}` // Добавляем токен в заголовок
        }
    }

    try {
        const res = await axios.patch(url, data, token ? config : '')

        console.log(res);
        return res
    } catch (error) {
        console.log(error);
        return error
    }
}

export default Patch;