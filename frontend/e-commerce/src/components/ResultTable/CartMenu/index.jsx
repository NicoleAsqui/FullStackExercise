import { useContext } from 'react';
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import './CartMenu.css';
import { SearchContext } from '../../../contexts/SearchContext';
function CartMenu({ cartMenuOpen }) {
    const { setOpenCart, productsInCart, removeProductFromCart, increaseProductQuantity, decreaseProductQuantity, calculateSubtotal } = useContext(SearchContext);

    const handleContinue = () => {
        setOpenCart(false);
    };
    const roundedSubtotal = calculateSubtotal().toFixed(2);
    return (
        <div className={`CartMenuContainer ${cartMenuOpen ? 'visible' : 'hidden'}`}>
            <div className="CartItemsContainer">
                {productsInCart && productsInCart.map((product) => (
                    <div className="CartItem" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div className="ProductDetails">
                            <h4>{product.title}</h4>
                            <p style={{ color: 'pink' }}>Price: ${product.price}</p>
                            <div className="QuantityControls">
                            <AiOutlineMinusCircle onClick={() => decreaseProductQuantity(product.id)} />
                            <span>{product.quantity}</span>
                            <AiOutlinePlusCircle onClick={() => increaseProductQuantity(product.id)} />
                            </div>
                            <AiOutlineCloseCircle className="RemoveProductIcon" onClick={() => removeProductFromCart(product.id)} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="CartFooter">
                <h4 >Subtotal</h4>
                <h4 >${roundedSubtotal}</h4>                
                <button className='continueButton' onClick={handleContinue}>Continue</button>
            </div>
        </div>
    );
}

export { CartMenu };