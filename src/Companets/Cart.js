import { useState } from "react";
import best1 from "../img/best1.png"
import best2 from "../img/best2.png"
import best3 from "../img/best3.png"
import best4 from "../img/best4.png"
import best5 from "../img/best5.png"
import best6 from "../img/best6.png"
import best7 from "../img/best7.png"
import best8 from "../img/best4.png"
import { IoMdClose } from "react-icons/io"
import Swal from "sweetalert2";

export function Cart() {
  const [best, setBest] = useState([
    { id: 1, name: "Nike Air Max 270 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best1, category: "Belt", savat: false, soni: "0", },
    { id: 2, name: "Nike Air Max 271 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best2, category: "Bags", savat: false, soni: "0", },
    { id: 3, name: "Nike Air Max 272 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best3, category: "Bags", savat: false, soni: "0", },
    { id: 4, name: "Nike Air Max 273 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best4, category: "Sunglasses", savat: false, soni: "0", },
    { id: 5, name: "Nike Air Max 274 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best5, category: "Sneakers", savat: false, soni: "0", },
    { id: 6, name: "Nike Air Max 275 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best6, category: "Sneakers", savat: false, soni: "0", },
    { id: 7, name: "Nike Air Max 276 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best7, category: "Sunglasses", savat: false, soni: "0", },
    { id: 8, name: "Nike Air Max 277 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best8, category: "Sunglasses", savat: false, soni: "0", },
    { id: 9, name: "Nike Air Max 277 React", price: 299.43, aksiya: 24, aslnarx: 534.33, rasm: best3, category: "Sunglasses", savat: false, soni: "0", },
  ])

  const [local, setlocal] = useState(
    JSON.parse(localStorage.getItem("local")) || best
  );

  function refresh() {
    setlocal(JSON.parse(localStorage.getItem("local")) || best);
  }

  const [sanoq, setSanoq] = useState(0)

  let plus = () => {
    if(sanoq < 10) {
     setSanoq(sanoq + 1)
    }
 }
 let minus = () => {
     if(sanoq > 0) {
      setSanoq(sanoq - 1)
     }
     else {
         alert("error")
     }
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

  return (
    <>
      <div className="big_cart">
        {local.length > 0 ? (local
          .filter((val) => val.savat === true)
          .map((val, i) => (
            <div key={i} className="mini_table2">
              <div className="hsr">
                <div className="hrs"></div>
              </div>
              <div className="box_one">
                <div className="savrt">
                  <p className="savrtt" onClick={() => remove(val.id)}><IoMdClose /></p>
                  <img className="savat_img" src={val.rasm} alt="" />
                </div>
                <p>{val.name}</p>
                <p>${val.price}</p>
                <div className="plussf">
                  <button onClick={minus} className="min">-</button>
                  <span>{sanoq}</span>
                  <button onClick={plus} className="plu">+</button>
                </div>
                {/* <p>$ {local
                                    .filter((val) => val.savat === true)
                                    .reduce((a, b) => a + b.soni * b.price, 0)}</p> */}
              </div>
            </div>
          ))
        ) : (
          <h1 className="nod">No Data</h1>
        )}
      </div>
    </>
  )
}