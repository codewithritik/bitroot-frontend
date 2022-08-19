import { useContext } from "react"
import { ModalContext } from "../../context/context"
import { FormateDate } from "./Date"
import "./singlepost.css"

export const SinglePost = ({ data }) => {


    // destructure from data
    const imgUrl = data.thumbnail.small
    const author = data.author
    const Date = <FormateDate secs={data.date} />
    
    

    //for Modal (pop-up)
    const [Modal, setModal, ModalData, setModalData] = useContext(ModalContext)
    
    // Handle click it will open modal
    const HandleClick = () => {
        setModalData(data)
        setModal(true)
    }


    return <>
        <div className="post-contanier">
            <div class="hoverwrap">
                <img src={imgUrl} />
                <div class="hovertext" onClick={HandleClick}>
                    Learn More
                </div>
            </div>
            <div className="infodiv">
                <div className="two-dot-div">
                    <div></div>
                    <div></div>
                </div>
                <h1 onClick={HandleClick} >{data.title}</h1>
                <p className="sp-tag">{data.content}</p>
                <div className="authorDiv"><p>{`${author.name}-${author.role}`}</p>
                    <p >{Date}</p>
                </div>
            </div>


        </div>
    </>
}
