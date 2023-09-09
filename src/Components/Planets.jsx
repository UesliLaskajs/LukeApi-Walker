import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Planets = () => {
    const { id } = useParams()
    const planetapi = `https://swapi.dev/api/planets/${id}/`
    const [response, setResponse] = useState([]);


    useEffect(() => {
        axios
            .get(planetapi)
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => (error, "error"));
    }, [planetapi]);



    return (
        <>
            <h2>{response.name}</h2>
            <p><strong>Climate:</strong>{response.climate} </p>
            <p><strong>Terrain :</strong>{response.terrain}</p>
            <p><strong> Surface Water:</strong>{response.surface_water}</p>
            <p><strong> Population:</strong>{response.population}</p>
        </>
    )
}
export default Planets;