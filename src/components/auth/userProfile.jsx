import { useEffect, useState } from "react";

import Get from "../../routes/get.jsx";
import Patch from "../../routes/patch.jsx";

const UserOrders = () => {  // Renamed to start with uppercase
    const [first_name, setFirst_name] = useState(null);
    const [last_name, setLast_name] = useState(null);
    const [email, setEmail] = useState(null);

    const user = JSON.parse(localStorage.getItem('infoUserMeal'));
    
    useEffect(() => {
        if (user) {
            const { first_name, last_name, email } = user
            setFirst_name(first_name);
            setLast_name(last_name);
            setEmail(email);
        }
    }, []);

    const headerSubmit = (event) => {
        event.preventDefault()

        const fromData = new FormData(event.target)
        const data = {}

        for (let [key,value] of fromData.entries()) {
            data[key] = value
        }

        if (first_name != data?.first_name || last_name != data?.last_name || email != data?.email) {

            const {id,token} = user

            console.log(user);
            

            Patch(`http://127.0.0.1:8000/api/v1/auth/profile/${id}/`,data,token).then(
                r => {
                    if (r?.status == 200) {
                        Get('http://127.0.0.1:8000/api/v1/auth/profile/',token).then(
                            re => {
                                if (re?.status == 200) {
                                    let data2 = re?.data
                                    data2['token'] = token
                                    localStorage.setItem('infoUserMeal',JSON.stringify(data2))
                                }
                            }
                        )
                    }
                }
            )
        }
        
    }

    return (
        <>
            <section className="auth_section">
                <div className="auth_section_container">
                    <div className="auth_section_items">
                        <h2 className="info">Профиль</h2>

                        <form className="auth_section_form" method="post" onSubmit={headerSubmit}>
                            <label className="label">
                                <p className="info_input">Имя</p>
                                <input required type="text" name="first_name" defaultValue={first_name} />
                            </label>
                            <label className="label">
                                <p className="info_input">Фамилия</p>
                                <input required type="text" name="last_name" defaultValue={last_name} />
                            </label>
                            <label className="label">
                                <p className="info_input">E-mail</p>
                                <input required type="text" name="email" defaultValue={email} />
                            </label>
                            <button type="submit">Изменить</button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    );
}

export default UserOrders;
