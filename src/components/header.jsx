import Logo from '../static/img/logo.svg'
import Search from '../static/img/search.svg'
import User from '../static/img/user.svg'
import Burger_menu from '../static/img/burger_menu.svg'
import Search_media from '../static/img/search_model.png'
import { useState } from 'react'

const Header = () => {

    const [formSearch, setFormSearch] = useState(true)

    const headerSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header_items">
                    <img src={Logo} alt="" className="logo" />

                    <div className="menu">
                        <form onSubmit={headerSubmit} className={formSearch ? 'none' : ''} method="get">
                            <input type="text" name='search' placeholder='Поиск' />

                            <button onClick={() => setFormSearch(!formSearch)} type='submit'>
                                <img src={Search} alt="" />
                            </button>

                        </form>

                        <button onClick={() => setFormSearch(!formSearch)} type='button' className='search_button none_desktop'>
                            <img src={Search_media} alt="" />
                        </button>

                        <div className="account">
                            <img src={User} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header