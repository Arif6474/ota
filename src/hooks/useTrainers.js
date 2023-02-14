import axios from "axios";
import { useEffect, useState } from "react";
import { TRAINERS_API } from "../Utilities/APIs";


const useTrainers = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        const getTrainers = async () => {
            const { data } = await axios.get(TRAINERS_API);
            
            setTrainers(data)
        }
        getTrainers()
    }, [])
    return [trainers, setTrainers] 
}
export default useTrainers;