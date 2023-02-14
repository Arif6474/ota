import axios from "axios";
import { useEffect, useState } from "react";
import { PROGRAMS_API } from "../Utilities/APIs";


const usePrograms = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
      const getPrograms = async () => {
        const { data } = await axios.get(PROGRAMS_API);
        setPrograms(data);
      };
      getPrograms();
    }, []);
    return [programs, setPrograms];
}

export default usePrograms;