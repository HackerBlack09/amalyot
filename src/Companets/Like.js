import best1 from "../img/best1.png"
import best2 from "../img/best2.png"
import best3 from "../img/best3.png"
import best4 from "../img/best4.png"
import best5 from "../img/best5.png"
import best6 from "../img/best6.png"
import best7 from "../img/best7.png"
import best8 from "../img/best4.png"
import { useState } from "react"
import { Rating } from "@mui/material"
import { AiOutlineShoppingCart } from "react-icons/ai"
import Swal from "sweetalert2"

export function Like() {

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

    const [local, setlocal] = useState(
        JSON.parse(localStorage.getItem("local")) || best
    );

    function refresh() {
        setlocal(JSON.parse(localStorage.getItem("local")) || best);
    }

    let remove = (id) => {
        Swal.fire({
            title: "O'chirmoqchimisiz?",
            text: "Buni qaytara olmaysiz!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ha, o'chirib tashlang!",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('local', JSON.stringify(local.filter((val) => val.id !== id)));
                refresh()
                Swal.fire("O'chirildi!", "Faylingiz o'chirildi.", "success");
            }
        });
    };

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

    return (
        <>
            <div className="like_bigs">
                {local.map((item, index) => (
                    <div className="cardsor_big" key={index}>
                        <div className="cards_imgss">
                            <img src={item.rasm} alt="" />
                        </div>
                        <div className="teaxgds">
                            <div className="namesdf">
                                <p>{item.name}</p>
                                <Rating name="size-medium" defaultValue={4} />
                            </div>
                            <div className="hrstd"></div>
                            <div className="prikesd">
                                <div className="best_prikess">
                                    <p className="best_p1">${item.price}</p>
                                    <p className="best_p2">$<del>{item.aslnarx}</del></p>
                                    <p className="best_p3">{item.aksiya}% off</p>
                                </div>
                                <div className="categsfd">
                                    <p>Category: <b>{item.category}</b></p>
                                </div>
                                <div className="hrstd"></div>
                                <div className="coldelad">
                                    <button className="adser" onClick={() => savatFunc(item)}>Add To Cart <AiOutlineShoppingCart /></button>
                                    <button className="dekst" onClick={() => remove(item.id)}>Delet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}