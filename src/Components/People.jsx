import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const People = () => {
    const { id } = useParams()
    const peopleApi = `https://swapi.dev/api/people/${id}/`
    const [response, setResponse] = useState([]);



    useEffect(() => {
        axios
            .get(peopleApi)
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => (error, "error"));
    }, [peopleApi]);



    return (
        <>
            <h2>{response.name}</h2>
            <p><strong>Height:</strong>{response.height} Cm</p>
            <p><strong>Hair Color:</strong>{response.hair_color}</p>
            <p><strong> Eye Color:</strong>{response.eye_color}</p>
            <p><strong> Skin Color:</strong>{response.skin_color}</p>
        </>
    )
}
export default People;