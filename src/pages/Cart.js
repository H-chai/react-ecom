import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useCartStore } from "../store/cartStore";
import styles from "../styles/Cart.module.css";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import commonStyles from "../styles/common.module.css";

export function Cart() {
  const { cart, removeFromCart, addQuantity, subtractQuantity, clearCart } =
    useCartStore();

  const totalCost = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  const navigate = useNavigate();

  function checkout() {
    clearCart();
    navigate("/contact");
  }

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.cartTitle}>Cart</h2>
      <div>
        {cart.length === 0 ? (
          <div>
            <h3 className={styles.messageTitle}>
              Your shopping cart is empty.
            </h3>
            <p>
              When you add products to your shopping bag, they will appear here.
            </p>
          </div>
        ) : (
          <div className={styles.cartContainer}>
            <div className={styles.contentGrid}>
              {cart.map((product) => (
                <div key={product.id} className={styles.cartItemContainer}>
                  <Link to={`/product/${product.id}`} className={styles.figure}>
                    <figure>
                      <img src={product.image.url} alt={product.image.alt} />
                    </figure>
                  </Link>
                  <div className={styles.productDetail}>
                    <Link
                      to={`/product/${product.id}`}
                      className={styles.productTitle}
                    >
                      {product.title}
                    </Link>
                    <div className={styles.priceQuantity}>
                      <div>
                        <p className={styles.originalPrice}>
                          {product.price === product.discountedPrice
                            ? ""
                            : `$${product.price}`}
                        </p>
                        <p className={styles.discountedPrice}>
                          ${product.discountedPrice}
                        </p>
                      </div>
                      <div className={styles.quantity}>
                        <button onClick={() => subtractQuantity(product.id)}>
                          <RemoveIcon></RemoveIcon>
                        </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => addQuantity(product.id)}>
                          <AddIcon></AddIcon>
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className={styles.removeButton}
                    >
                      <CloseIcon></CloseIcon>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.totalGrid}>
              <h3 className={styles.summaryTitle}>Order summary</h3>
              <div className={styles.summarySubtotal}>
                <h3>Subtotal</h3>
                <p className={styles.subtotal}>${totalCost.toFixed(2)}</p>
              </div>
              <div className={styles.summaryTotal}>
                <h3>Total</h3>
                <p className={styles.total}>${totalCost.toFixed(2)}</p>
              </div>
              <button onClick={checkout} className={styles.checkout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Link to="/" className={commonStyles.backHome}>
        <KeyboardBackspaceIcon></KeyboardBackspaceIcon>See all products
      </Link>
    </div>
  );
}
