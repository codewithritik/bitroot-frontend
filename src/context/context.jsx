import React, { createContext, useState } from "react"

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
    const [Modal, setModal] = useState(false)
    const [ModalData,setModalData] = useState(" ")



    return <ModalContext.Provider value={[Modal, setModal,ModalData, setModalData]}>
        {children}
    </ModalContext.Provider>


};