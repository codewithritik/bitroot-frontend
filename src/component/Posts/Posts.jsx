import "./posts.css"
import axios from "axios";
import { useContext, useEffect } from "react";
import { LoadingComponet } from "../Loading/Loading";
import { useState } from "react";
import { Modalfunction } from "../Modal/Modal";
import { SinglePost } from "../singlepost/Singlepost";
import { ModalContext } from "../../context/context";



export const Posts = () => {
    // base url
    const ApiUrl =  "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    
    // All data handling
    const [Loading, setLoading] = useState(true)
    const [ApiData, setApiData] = useState([])
    const [Error, setError] = useState(false)
    
    // Modal and setmodal data from modalcontext
    const [Modal, setModal, ModalData, setModalData] = useContext(ModalContext)


    // fetch data from api
    useEffect(() => {
        axios.get(ApiUrl)
            .then((res) => {

                setLoading(false)
                setApiData(res.data)
                
            })
            .catch((err) => {

                setLoading(false)
                setError(err)
                alert("check your url")
            }) 
    }, [])



    return (
        <div className="container">
            {/* For Loading */}
            
            {Loading && < LoadingComponet />}
            
            {/* for show all data */}

            {ApiData?.map((data) => {
                return < SinglePost key={data.id} data={data} />
            })}
            {Modal && < Modalfunction />}
            
            {/* for showing error */}
            {Error && <h1>...Error in your application</h1>}

        </div>
    )
}




