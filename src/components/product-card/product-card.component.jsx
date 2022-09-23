import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import './product-card.style.scss';

const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { imageUrl, name, price } = product;

  const handleClick = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card">
      <img className="product-card__img" src={imageUrl} alt={name} />

      <div className="product-card__content">
        <span>{name}</span>
        <span className="product-card__price">{price}</span>
      </div>
      <Button buttonType={'base'} className="product-card__btn" onClick={handleClick} />
    </div>
  );
};

export default ProductCard;
