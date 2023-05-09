import { useState } from "react";
import ims1 from "../img/call 1.png"

export function Contact() {
    const [search, setSearch] = useState("")
    console.log(search);

    return (
        <>
            <div className="const_bigs">
                <div className="contact_big">
                    <div className="imgs_bigs">
                        <img src={ims1} alt="" className="imss1" />
                    </div>
                    <div className="inputs_bugs">
                        <input type="text" placeholder="Name" className="in1" />
                        <input type="email" placeholder="Email" className="in2" />
                        <input type="text" placeholder="Type your message" className="in3" />
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