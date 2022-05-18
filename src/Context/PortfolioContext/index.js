import { createContext, useState, useEffect } from "react";


import { v4 as uuid } from 'uuid'

const PortfolioContext = createContext()
const PortfolioProvider = ({ children }) => {
const [lenguage, setLenguage] = useState('en');
    const [userIdValidation, setUserIdValidation] = useState(localStorage.getItem('userID'));
    const [userId, setUserId] = useState(undefined);






    useEffect(() => {
        if (!userIdValidation) {
            const unique_id = uuid()
            setUserId(unique_id)
            localStorage.setItem("userID", unique_id)
        } else {
            setUserId(userIdValidation)
        }
    }, []);

    useEffect(() => {
        if (userId) {
            window.dataLayer.push({
                'event': 'visit',
                'userId': userId

            })
        }
    }, [userId]);


    return (<PortfolioContext.Provider value={{ userId, setUserId , lenguage, setLenguage}}>{children}</PortfolioContext.Provider>)
}

export { PortfolioProvider }
export default PortfolioContext