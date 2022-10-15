import React from "react";
import "../../Css/custom.css";
import Images from "../../Images/Image";
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

const Menu = () => {
    return (
        <>
            <header className="header bg-danger">
                <nav className="navbar navbar-expand-md " id="navArea">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Images.Logo} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navigation" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="#!">About Us</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Categories</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">How it works</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Contect Us</a></li>
                            </ul>
                            <div className="d-flex ml-auto">
                                <button className="btn defoultBtn" type="submit"> <PersonIcon /> Login</button>
                                <button className="btn defoultBtn" type="submit"> <AddIcon /> Sign Up</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Menu;