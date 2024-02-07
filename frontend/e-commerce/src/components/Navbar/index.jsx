import { Logo } from '../../assets/Logo'
import { CartLogo } from '../../assets/CartLogo'
import { Search } from './Search'
import './Navbar.css'
import { useState, useContext } from 'react';
import { CartMenu } from '../ResultTable/CartMenu';
import { SearchContext } from '../../contexts/SearchContext';

function Navbar() {
    const { openCart } = useContext(SearchContext);
    const [cartMenuOpen, setCartMenuOpen] = useState(false);

    const toggleCartMenu = () => {
        setCartMenuOpen(!cartMenuOpen);
    };

    return (
        <div className='NavbarContainer'>
            <div className="NavbarLeft">
                <Logo />
                <Search />
            </div>
            <div className="NavbarRight">
                <div className="CartIconContainer" onClick={toggleCartMenu}>
                    <CartLogo />
                    {openCart && <div className="CartCounter">{/* Aquí muestra el contador de productos en el carrito */}</div>}
                </div>
                <CartMenu cartMenuOpen={cartMenuOpen} />
            </div>
        </div>
    );
}

export { Navbar };