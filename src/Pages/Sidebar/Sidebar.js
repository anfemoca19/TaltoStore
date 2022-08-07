import React from 'react'
import "./sidebar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseDamage} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
    return(
        <div className="container_Sidebar">
            <div className="home">
                <FontAwesomeIcon icon={faHouseDamage}/>
            </div>
        </div>
    );
}
export default Sidebar;