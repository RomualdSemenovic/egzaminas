import React from 'react';
import {Link} from "react-router-dom";

function Toolbar(props) {
    return (
        <div>
            <div>
                <div className="d-flex">
                    <Link className="button" to="/upload">Įkelti</Link>
                    <Link className="button" to="/list">Sąrašas</Link>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;