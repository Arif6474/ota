import axios from "axios";
import { useEffect, useState } from "react";
import { COURSES_API } from "../Utilities/APIs";


const useCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const getCourses = async () => {
            const { data } = await axios.get(COURSES_API);
            setCourses(data)
        }
        getCourses()
    }, [])
    return [courses, setCourses]
}

export default useCourses;