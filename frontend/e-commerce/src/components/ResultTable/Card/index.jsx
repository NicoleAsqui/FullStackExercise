import { useContext } from 'react';
import { Detail } from './Detail'
import { SearchContext } from '../../../contexts/SearchContext';
import './Card.css'

function Card ({ image, title, price, description, rating }) {
    const {
        setIsOpen,
        setImageProduct,
        setTitleProduct,
        setPriceProduct,
        setDescriptionProduct,
    } = useContext(SearchContext);

    const openModal = () => {
        setIsOpen(true)
        setImageProduct(image)
        setTitleProduct(title)
        setPriceProduct(price)
        setDescriptionProduct(description)
    }
    const addToCart = (e) => {
        e.stopPropagation();
        console.log(`Product added to cart`);
    };
    
    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image}/>
            </div>
            <Detail 
                title = {title}
                price = {price}
                rating={rating} 
            />
            <button className="AddToCartButton" onClick={addToCart}>
                🛒 Add to Cart
            </button>
        </div>
    )
}

export { Card }