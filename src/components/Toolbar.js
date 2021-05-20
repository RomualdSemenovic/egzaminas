import React from 'react';
import {Link} from "react-router-dom";

function Toolbar(props) {
    return (
        <div className='toolbar d-flex justify-content-between align-items-center'>
            <div>
                <div className="d-flex">
                    <Link className="button" to="/upload">Įkelti</Link>
                    <Link className="button" to="/storage">Sąrašas</Link>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;