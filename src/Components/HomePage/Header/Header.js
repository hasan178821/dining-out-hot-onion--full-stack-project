import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userTokenName = sessionStorage.getItem('userToken');
    return (
        <div>
            <nav className="navbar navbar-expand-md menubar">
                <div className="container">
                    <Link className="navbar-brand" to="/"><h2 style={{ color: '#920722', fontSize: '44px', fontWeight: 'bold'}}>Dining Out</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/"><h5>Home</h5></Link>
                            <Link className="nav-link" to="/login"><h5>Login</h5></Link>
                            <Link className="nav-link" to="/admin"><h5>Admin</h5></Link>
                            <Link className="nav-link" to="/orderedCartData"><h5> <span style={{color: '#c51336'}}><FontAwesomeIcon icon={faShoppingCart}/></span> Cart</h5></Link>
                            <h5 style={{color: '#920722', marginTop: '8px', marginLeft: '15px', fontWeight: '700'}}>{loggedInUser.displayName || userTokenName}</h5>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;