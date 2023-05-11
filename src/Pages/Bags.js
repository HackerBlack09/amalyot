import best1 from "../img/best1.png"
import best2 from "../img/best2.png"
import best3 from "../img/best3.png"
import best4 from "../img/best4.png"
import best5 from "../img/best5.png"
import best6 from "../img/best6.png"
import best7 from "../img/best7.png"
import best8 from "../img/best4.png"
import men from "../img/men.png"
import React, { useState } from "react"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { HiBars3 } from "react-icons/hi2"
import Rating from '@mui/material/Rating';
import Swal from "sweetalert2";
import Sliders from "../Companets/slid"


export function Bags() {

    const [best, setBest] = useState([
        { id: 1, name: "Nike Air Max 270 React", price: 230, aksiya: 24, aslnarx: 534.33, color: "#006CFF", rasm: best1, brend: "Nike", category: "Belt", savat: false, },
        { id: 2, name: "Nike Air Max 271 React", price: 199, aksiya: 24, aslnarx: 534.33, color: "#FFF600", rasm: best2, brend: "Siemens", category: "Bags", savat: false, },
        { id: 3, name: "Nike Air Max 272 React", price: 270, aksiya: 24, aslnarx: 534.33, color: "#FC3E39", rasm: best3, brend: "Siemens", category: "Bags", savat: false, },
        { id: 4, name: "Nike Air Max 273 React", price: 234, aksiya: 24, aslnarx: 534.33, color: "#FFF600", rasm: best4, brend: "Nike", category: "Sunglasses", savat: false, },
        { id: 5, name: "Nike Air Max 274 React", price: 187, aksiya: 24, aslnarx: 534.33, color: "#FC3E39", rasm: best5, brend: "Nike", category: "Sneakers", savat: false, },
        { id: 6, name: "Nike Air Max 275 React", price: 256, aksiya: 24, aslnarx: 534.33, color: "#006CFF", rasm: best6, brend: "Adidas", category: "Sneakers", savat: false, },
        { id: 7, name: "Nike Air Max 276 React", price: 132, aksiya: 24, aslnarx: 534.33, color: "#FF00B4", rasm: best7, brend: "Adidas", category: "Sunglasses", savat: false, },
        { id: 8, name: "Nike Air Max 277 React", price: 265, aksiya: 24, aslnarx: 534.33, color: "#171717", rasm: best8, brend: "Nike", category: "Sunglasses", savat: false, },
        { id: 9, name: "Nike Air Max 277 React", price: 299, aksiya: 24, aslnarx: 534.33, color: "#EFDFDF", rasm: best3, brend: "Adidas", category: "Sunglasses", savat: false, },
    ])

    let categoryBtn = [
        "",
        "Bags",
        "Sneakers",
        "Belt",
        "Sunglasses"
    ]

    const [filterData, setFilterData] = useState(best);

    const [categoryState, setCategoryState] = useState("")
    const [breandState, setBreandState] = useState("")

    const [local, setlocal] = useState(
        JSON.parse(localStorage.getItem("local")) || best
    );

    function refresh() {
        setlocal(JSON.parse(localStorage.getItem("local")) || best);
    }

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

    const [value, setValue] = React.useState([0, 300]);

    const [color, setColor] = useState([
        "#006CFF",
        "#FC3E39",
        "#171717",
        "#FFF600",
        "#FF00B4",
        "#EFDFDF",
    ])

    const [Bolean, setcolorBolean] = useState(0);

    const [Boleans, setBreandBoleans] = useState(0);


    const [colors, Setcolors] = useState("");

    function Reset() {
        setcolorBolean(0);
    };

    function Resets() {
        setcolorBolean(0);
    };

    const [brend, setBrend] = useState([
        "Nike",
        "Nike",
        "Adidas",
        "Siemens",
    ])

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

    const [modal, setModal] = useState(false);

    const filter = () => {
        setModal(!modal)
    }


    return (
        <>
            <div className="bags_big">
                <button className="filghft" onClick={filter}>Filter</button>
                <div className="bags_categry" >
                    <p className="delbac">X</p>
                    <div className="filter_cate">
                        <h1 className="fil">Category</h1>
                        <div className="filter_catgory">
                            {categoryBtn.map((item, index) => (
                                <button
                                    className="btttns"
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
                    <div className="filter_price">
                        <div className="filter_pris">
                            <div className="titl">
                                <p>PRICES</p>
                            </div>
                            <div className="rangs">
                                <p>Ranger: </p>
                                <p>$13.99 - $25.99</p>
                            </div>
                            <p className="sld"><Sliders setValue={setValue} value={value} /></p>
                        </div>
                    </div>
                    <div className="filter_color">
                        <div className="flcr">
                            <p className="clsf">Color</p>
                            {color.map((item, index) => (
                                <button className="cols" key={index} onClick={() => Setcolors(item) || setcolorBolean(index)} style={{
                                    background: item,
                                    width: index === Bolean ? "25px" : "",
                                    height: index === Bolean ? "25px" : "",
                                }}>

                                </button>
                            ))}
                            <button className="rest" onClick={Reset}>Reset</button>
                        </div>
                    </div>
                    <div className="filter_brend">
                        <div className="filtbre">
                            <p className="fltbr">BRAND</p>
                            {brend.map((item, index) => (
                                <button className="flbre" key={index} onClick={() => {
                                    setBreandState(item);
                                }}>
                                    {item}
                                </button>
                            ))}
                            <button className="rests" onClick={Resets}>Reset</button>
                        </div>
                    </div>
                </div>
                <div className="bags_cards">
                    <div className="runnigs">
                        <div className="adis">
                            <div className="adi_text">
                                <p className="adi_p11">Adidas Men Running<br /> Sneakers</p>
                                <p className="adi_p22">Performance and design. Taken right to the edge.</p>
                                <p className="adi_p33">SHOP NOW</p>
                                <div className="hr1"></div>
                            </div>
                            <div className="adi_img">
                                <img src={men} alt="" className="adi_imgss" />
                            </div>
                        </div>
                    </div>
                    <div className="us_bus">
                        <h1>#</h1>
                        <h1><HiBars3 /></h1>
                    </div>
                    <div className="bagss_card">
                        {filterData.
                            filter((item) =>
                                item.category
                                    .toLocaleLowerCase()
                                    .trim()
                                    .includes(categoryState.toLocaleLowerCase().trim()) &&
                                item.color
                                    .toLowerCase()
                                    .includes(colors.toLowerCase().trim()) &&
                                item.brend
                                    .toLocaleLowerCase()
                                    .trim()
                                    .includes(breandState.toLocaleLowerCase().trim()) &&
                                value[0] <= item.price &&
                                item.price <= value[1]
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
                </div>
            </div>
        </>
    )
}