import { BiUser } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import { Routes, NavLink, Route, Link, } from 'react-router-dom'
import { Home } from '../Pages/Home.js'
import { Bags } from '../Pages/Bags.js'
import { Sneakers } from '../Pages/Sneakers.js'
import { Belt } from '../Pages/Belt.js'
import { Contact } from '../Pages/Contact.js'
import icon from '../img/icon.png'
import { Cart } from './Cart.js'
import { useState } from 'react'
import best1 from "../img/best1.png"
import best2 from "../img/best2.png"
import best3 from "../img/best3.png"
import best4 from "../img/best4.png"
import best5 from "../img/best5.png"
import best6 from "../img/best6.png"
import best7 from "../img/best7.png"
import best8 from "../img/best4.png"
import {HiBars3} from "react-icons/hi2"
import { Like } from './Like.js'

export function Navbar() {

    const [best, setBest] = useState([
        { id: 1, name: "Nike Air Max 270 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best1, category: "Belt", savat: false, },
        { id: 2, name: "Nike Air Max 271 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best2, category: "Bags", savat: false, },
        { id: 3, name: "Nike Air Max 272 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best3, category: "Bags", savat: false, },
        { id: 4, name: "Nike Air Max 273 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best4, category: "Sunglasses", savat: false, },
        { id: 5, name: "Nike Air Max 274 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best5, category: "Sneakers", savat: false, },
        { id: 6, name: "Nike Air Max 275 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best6, category: "Sneakers", savat: false, },
        { id: 7, name: "Nike Air Max 276 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best7, category: "Sunglasses", savat: false, },
        { id: 8, name: "Nike Air Max 277 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best8, category: "Sunglasses", savat: false, },
        { id: 9, name: "Nike Air Max 277 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best3, category: "Sunglasses", savat: false, },
    ])

    const [local, setlocal] = useState(
        JSON.parse(localStorage.getItem("local")) || best
    );


    return (
        <>
            <div className="navbar_big">
                <div className="nav1">
                    <div className="options">
                        <select id="lague">
                            <option value="EN">EN</option>
                            <option value="UZ">UZ</option>
                            <option value="RU">RU</option>
                        </select>
                        <select id="valute">
                            <option value="USD">USD</option>
                            <option value="UZS">UZS</option>
                            <option value="RUB">RUB</option>
                        </select>
                    </div>
                    <div className="profi">
                        <p className="logi"><span><BiUser /></span></p>
                        <Link to={"/cart"}>
                            <div className="dis">
                                <p className="cart"><AiOutlineShoppingCart /></p>
                                <span className='sng'>{local.filter((val) => val.savat === true).length}</span>
                            </div>
                        </Link>
                        <Link to={"/like"}>
                            <div className="lisk">
                                <p className="likes"><AiOutlineHeart /></p>
                                <span className='sng'>{local.filter((val) => val.like === true).length}</span>
                            </div>
                        </Link>
                        <p className="ite">Items</p>
                        <p className="pric"><span><AiOutlineSearch /></span></p>
                    </div>
                </div>
                <div className="nav2">
                    <div className="txt">
                        <img src={icon} alt="" className='icso'/>
                        <p className="txt_p">E-Comm</p>
                    </div>
                    <div className="lin">
                        <ul>
                            <li>
                                <NavLink to={'/'}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/bags'}>BAGS</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/sneakers'}>SNEAKERS</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/belt'}>BELT</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/cantact'}>CONTACT</NavLink>
                            </li>
                        </ul>
                        {/* <p className="bars"><HiBars3 /></p> */}
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/bags' element={<Bags />} />
                    <Route path='/sneakers' element={<Sneakers />} />
                    <Route path='/belt' element={<Belt />} />
                    <Route path='/cantact' element={<Contact />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/like' element={<Like />} />
                </Routes>
            </div>
        </>
    )
}