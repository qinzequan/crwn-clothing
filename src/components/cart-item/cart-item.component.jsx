import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item">
      <img className="cart-item__img" src={imageUrl} alt={name} />
      <div className="cart-item__details">
        <h3 className="cart-item__title">{name}</h3>
        <span className="cart-item__content">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
