import React from "react";
import './Services.css'
import ai from '../../Images/AI.webp'
import analysis from '../../Images/bg3.webp'
import dev from '../../Images/bg2.avif'


const Services=()=>{
    return(
        <div className="services">
            <h1>OUR SERVICES</h1>
            <div className="services-child">
                <div className="items">
                    <img src={ai} alt="" />
                    <div>
                        <h2>Artificial Intelligence</h2>
                        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius enim neque ipsa perspiciatis beatae eveniet porro adipisci delectus? Sed esse possimus et, aperiam cum repellat eos! Quod itaque quae eligendi pariatur aliquam tenetur labore commodi fuga rem error iure mollitia eum ipsa, dicta cum molestiae inventore expedita doloribus corporis natus quidem id? Voluptas quas laboriosam veniam facilis, sequi libero!</p>
                    </div>
                </div>
                <div className="items">
                    <img src={analysis} alt="" />
                    <div>
                        <h2>Data Analysis</h2>
                        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius enim neque ipsa perspiciatis beatae eveniet porro adipisci delectus? Sed esse possimus et, aperiam cum repellat eos! Quod itaque quae eligendi pariatur aliquam tenetur labore commodi fuga rem error iure mollitia eum ipsa, dicta cum molestiae inventore expedita doloribus corporis natus quidem id? Voluptas quas laboriosam veniam facilis, sequi libero!</p>
                    </div>
                </div>
                <div className="items">
                    <img src={dev} alt="" />
                    <div>
                        <h2>Frontend Development</h2>
                        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius enim neque ipsa perspiciatis beatae eveniet porro adipisci delectus? Sed esse possimus et, aperiam cum repellat eos! Quod itaque quae eligendi pariatur aliquam tenetur labore commodi fuga rem error iure mollitia eum ipsa, dicta cum molestiae inventore expedita doloribus corporis natus quidem id? Voluptas quas laboriosam veniam facilis, sequi libero!</p>
                    </div>
                </div>
                <div className="items">
                    <img src={dev} alt="" />
                    <div>
                        <h2>Backend development</h2>
                        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius enim neque ipsa perspiciatis beatae eveniet porro adipisci delectus? Sed esse possimus et, aperiam cum repellat eos! Quod itaque quae eligendi pariatur aliquam tenetur labore commodi fuga rem error iure mollitia eum ipsa, dicta cum molestiae inventore expedita doloribus corporis natus quidem id? Voluptas quas laboriosam veniam facilis, sequi libero!</p>
                    </div>
                </div>
                <div className="items">
                    <img src={analysis} alt="" />
                    <div>
                        <h2>Application Development</h2>
                        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius enim neque ipsa perspiciatis beatae eveniet porro adipisci delectus? Sed esse possimus et, aperiam cum repellat eos! Quod itaque quae eligendi pariatur aliquam tenetur labore commodi fuga rem error iure mollitia eum ipsa, dicta cum molestiae inventore expedita doloribus corporis natus quidem id? Voluptas quas laboriosam veniam facilis, sequi libero!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;