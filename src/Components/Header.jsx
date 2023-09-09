import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Header.css"
const Header = () => {
    const [selectedOption, setSelecedOption] = useState('people');
    const [selectedId, setSeletedId] = useState('')
    const navigate = useNavigate();

    let eventHandler = (e) => {
        e.preventDefault();

        navigate(`/${selectedOption}/${selectedId}`)
    }



    


    return (
        <>
            <form onSubmit={eventHandler}>
                <div className="search_bar">
                    <label htmlFor="Search">Search for:</label>
                    <select
                        id="search"
                        onChange={(e) => { setSelecedOption(e.target.value) }}
                        value={selectedOption}
                    >
                        <option value="People">People</option>
                        <option value="Planets">Planets</option>
                    </select>
                </div>
                <div className="search_id">
                    <label htmlFor="id_search">ID:</label>
                    <input
                        type="number"
                        name="id"
                       
                        onChange={(e) => { setSeletedId(e.target.value) }} />

                </div>
                <button>Search</button>
            </form>
        </>
    )

}

export default Header;