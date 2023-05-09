import { useState } from "react"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import * as React from 'react';
import Rating from '@mui/material/Rating';
import cards1 from "../img/cards1.png"
import cards2 from "../img/cards2.png"
import cards3 from "../img/cards3.png"
import best1 from "../img/best1.png"
import best2 from "../img/best2.png"
import best3 from "../img/best3.png"
import best4 from "../img/best4.png"
import best5 from "../img/best5.png"
import best6 from "../img/best6.png"
import best7 from "../img/best7.png"
import best8 from "../img/best4.png"
import icons1 from "../img/icons1.png"
import icons2 from "../img/icons2.png"
import icons3 from "../img/icons3.png"
import iconc1 from "../img/iconc1.png"
import iconc2 from "../img/iconc2.png"
import iconc3 from "../img/iconc3.png"
import iconcs from "../img/iconcs.png"
import men from "../img/men.png"
import Swal from "sweetalert2";

export function Home() {
    const [card, setCard] = useState([
        { id: 1, name: "FS - QUILTED MAXI CROSS BAG", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: cards1 },
        { id: 2, name: "FS - Nike Air Max 270 React...", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: cards2 },
        { id: 3, name: "FS - Nike Air Max 270 React...", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: cards3 },
    ])

    const [best, setBest] = useState([
        { id: 1, name: "Nike Air Max 270 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best1, savat: false, category: "Belt"},
        { id: 2, name: "Nike Air Max 271 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best2, savat: false, category: "Bags" },
        { id: 3, name: "Nike Air Max 272 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best3, savat: false, category: "Bags" },
        { id: 4, name: "Nike Air Max 273 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best4, savat: false, category: "Sunglasses" },
        { id: 5, name: "Nike Air Max 274 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best5, savat: false, category: "Sneakers" },
        { id: 6, name: "Nike Air Max 275 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best6, savat: false, category: "Sneakers" },
        { id: 7, name: "Nike Air Max 276 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best7, savat: false, category: "Sunglasses" },
        { id: 8, name: "Nike Air Max 277 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best8, savat: false, category: "Sunglasses" },
    ])

    const [local, setlocal] = useState(
        JSON.parse(localStorage.getItem("local")) || best
    );

    function refresh() {
        setlocal(JSON.parse(localStorage.getItem("local")) || best);
    }


    const [categoryState, setCategoryState] = useState("")

    let categoryBtn = [
        "",
        "Bags",
        "Sneakers",
        "Belt",
        "Sunglasses"
    ]



    const [filterData, setFilterData] = useState(best);

    function leod() {
        Swal.fire('Hozircha malumotlar yoq')
    }

    const [newst, setNewst] = useState([
        { id: 1, name: "FREE SHIPPING", about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: icons1 },
        { id: 2, name: "100% REFUND", about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: icons2 },
        { id: 3, name: "SUPPORT 24/7", about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: icons3 },
    ])

    const [newst1, setNewst1] = useState([
        { id: 1, name: "Fashion Industry", about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", data: "01 Jan, 2015", img: iconc1 },
        { id: 2, name: "Best Design Tools", about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", data: "01 Jan, 2015", img: iconc2 },
        { id: 3, name: "HR Community", about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", data: "01 Jan, 2015", img: iconc3 },
    ])

    const [newst2, setNewst2] = useState([
        { id: 1, name: "Blue Swade Nike Sneakers", price: 499, aslnarx: 599, img: iconcs },
        { id: 2, name: "Blue Swade Nike Sneakers", price: 499, aslnarx: 599, img: iconcs },
        { id: 3, name: "Blue Swade Nike Sneakers", price: 499, aslnarx: 599, img: iconcs },
    ])
    const [search, setSearch] = useState("")
    console.log(search);

    function savatFunc(item) {
        localStorage.setItem(
            "local",
            JSON.stringify(
                local.map((val) =>
                    val.id === item.id ? { ...val, savat: !val.savat } : val
                )
            )
        );
        refresh();
        if (item.savat === false) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Mahsulot qoshildi",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    function likefun(item) {
        localStorage.setItem(
          "local",
          JSON.stringify(
            local.map((val) =>
              val.id === item.id ? { ...val, like: !val.like } : val
            )
          )
        );
        refresh();
      }

    return (
        <>
            <div className="home_big">
                <div className="pagess">
                    <div className="head_page">
                        <div className="head_txt">
                            <p className="head_text">Super Flash Sale<br /> 50% Off</p>
                        </div>
                        <div className="head_card">
                            {card.map((item, index) => (
                                <div className="cards" key={index}>
                                    <div className="alpri">
                                        <p className="card_txt">{item.name}</p>
                                        <p className="card_price">${item.price}</p>
                                    </div>
                                    <div className="alaks">
                                        <p className="card_disc"><del>${item.aslnarx}</del></p>
                                        <p className="card_aks">{item.aksiya}% off</p>
                                    </div>
                                    <img className="card_imgs" src={item.rasm} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="best">
                    <div className="best_text">
                        <div className="best_title">
                            <p className="title_p">BEST SELLER</p>
                        </div>
                        <div className="best_catgory">
                            {categoryBtn.map((item, index) => (
                                <button
                                    className="btttn"
                                    key={index}
                                    onClick={() => {
                                        setCategoryState(item);
                                    }}
                                >
                                    {item === "" ? "all" : item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="best_cards">
                        {filterData.
                            filter((item) =>
                                item.name
                                    .toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search) &&
                                item.category
                                    .toLocaleLowerCase()
                                    .trim()
                                    .includes(categoryState.toLocaleLowerCase().trim())
                            ).map((item, index) => (
                                <div className="all_best" key={index}>
                                    <div className="hover_bests">
                                        <div className="hover_best">
                                            <p className="hover_icon1" onClick={() => likefun(item)}><AiOutlineHeart /></p>
                                            <p className="hover_icon2" onClick={() => savatFunc(item)}><AiOutlineShoppingCart /></p>
                                        </div>
                                    </div>
                                    <div className="best_imgg">
                                        <img src={item.rasm} alt="" className="best_img1" />
                                        <p className="best_p">{item.name}</p>
                                        <Rating name="size-medium" defaultValue={4} />
                                    </div>
                                    <div className="best_prikes">
                                        <p className="best_p1">${item.price}</p>
                                        <p className="best_p2">$<del>{item.aslnarx}</del></p>
                                        <p className="best_p3">{item.aksiya}% off</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="p_more">
                        <p className="more" onClick={leod}>LOAD MORE</p>
                    </div>
                </div>
                <div className="runnig">
                    <div className="adi">
                        <div className="adi_text">
                            <p className="adi_p1">Adidas Men Running<br /> Sneakers</p>
                            <p className="adi_p2">Performance and design. Taken right to the edge.</p>
                            <p className="adi_p3">SHOP NOW</p>
                            <div className="hr1"></div>
                        </div>
                        <div className="adi_img">
                            <img src={men} alt="" className="adi_imgs" />
                        </div>
                    </div>
                </div>
                <div className="latest">
                    <div className="news1">
                        {newst.map((item, index) => (
                            <div className="newst1" key={index}>
                                <img src={item.img} alt="" className="newst1_img" />
                                <p className="newst1_p1">{item.name}</p>
                                <p className="newst1_p2">{item.about}</p>
                            </div>
                        ))}
                    </div>
                    <div className="news2">
                        {newst1.map((item, index) => (
                            <div className="newst2" key={index}>
                                <div className="newst2_imgs">
                                    <img src={item.img} alt="" className="newst2_img" />
                                </div>
                                <div className="newst2_texts">
                                    <p className="newst2_p1">{item.data}</p>
                                    <p className="newst2_p2">{item.name}</p>
                                    <p className="newst2_p3">{item.about}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="news3">
                        {newst2.map((item, index) => (
                            <div className="newst3" key={index}>
                                <div className="newst3_imgs">
                                    <img src={item.img} alt="" className="newst3_img" />
                                </div>
                                <div className="newst3_texts">
                                    <p className="newst3_p1">{item.name}</p>
                                    <Rating name="size-small" defaultValue={4} size="small" />
                                    <div className="prices">
                                        <p className="newst3_p2">${item.price}</p>
                                        <p className="newst3_p3"><del>${item.aslnarx}</del></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="in_search">
                    <div className="in_searc">
                        <input type="text" className="in_sear" placeholder="Search query..." onChange={(e) => setSearch(e.target.value)} />
                        <button className="btn_ser">Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}