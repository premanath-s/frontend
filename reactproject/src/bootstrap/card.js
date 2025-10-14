// import {useState,useEffect} from "react";
// function CardComponent(){
//     const [cards,setCards]=useState([]);
//     useEffect(()=>{
//         fetch("http://jsonplaceholder.tyicode.com/users")
//         .then((response)=>response.json())
//         .then((data)=>{
//             setCards(data);
//         })
//         .catch((error)=>{
//             console.error("Error fetching card data:",error);
//         });

//     },[]);
    

// return(
//         <div className="container my-4">
//             {cards.map((user)=>(
//                 <div key={user.id}className="col-sm-6 col-md-4 col-lg-3 mb-4">
//                     <div className="card h-100">
//                         <div className="card-body">
//                             <h5 className="card-title">{user.name}</h5> 
// <p className="card-text">
//     <strong>Email:</strong>{user.email}<br/>
//     <strong>Phone:</strong>{user:phone}<br/>
//     <strong>Company:</strong>{user.company?.name}
// </p>
//                 <a href={'https://${user.website}'}
//                 className="btn btn-primary"
//                 target="_blank"
//                 rel="noreferrer">
//                 Visit Websit
//                 </a>

//                         </div>
//                     </div>
//                 </div>
//         ))}

//             </div>

// );}

// export default CardComponent;


import { useState, useEffect } from "react";

function CardComponent() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Corrected the URL (it had a typo)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setCards(data);
            })
            .catch((error) => {
                console.error("Error fetching card data:", error);
            });
    }, []);

    return (
        <div className="container my-4">
            <div className="row">
                {cards.map((user) => (
                    <div key={user.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">
                                    <strong>Email:</strong> {user.email}<br />
                                    <strong>Phone:</strong> {user.phone}<br />
                                    <strong>Company:</strong> {user.company?.name}
                                </p>
                                <a
                                    href={`https://${user.website}`}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CardComponent;
