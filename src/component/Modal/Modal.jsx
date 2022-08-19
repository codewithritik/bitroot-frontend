import { useContext } from "react"
import { BsXLg } from "react-icons/bs"
import { ModalContext } from "../../context/context"
import "./model.css"


export const Modalfunction = ( ) => {

    const [Modal, setModal, ModalData, setModalData] = useContext(ModalContext)

    // destructure from ModalData 
    const imgUrl = ModalData.thumbnail.large
    const author = ModalData.author


    // Handle cross it will close modal
        const Handlecross = () => {
            setModal(false)
    }

 
    return <>
        <div className="main-contanier">
            <div className="Modal-contanier">
                <div className="cross" onClick={Handlecross}><BsXLg /></div>
                <div className="imgdiv">
                    <img src={imgUrl}  />
                </div>
                <div className="modal-infomation">

                    <h1>{ModalData.title}</h1>
                    <p className="sp-tag">{ModalData.content}</p>

                    <div className="authordetails">
                        <div className="avtardiv">

                            <img className="avtarimg"  src={author.avatar} />
                        </div>
                        <p>{`${author.name}-${author.role}`}</p>
                    </div>
                </div>
            </div>
            <div className="modal-bg-div">

            </div>
        </div>
        
    </>
}