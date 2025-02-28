import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useCartStore } from "../store/cartStore";

export function Cart() {
  const { cart, removeFromCart, addQuantity, subtractQuantity } =
    useCartStore();

  const totalCost = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.length === 0 ? (
          <div>
            <h3>Your shopping cart is empty.</h3>
            <p>
              When you add products to your shopping bag, they will appear here.
            </p>
          </div>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id}>
                <figure>
                  <img src={product.image.url} alt={product.image.alt} />
                </figure>
                <p>{product.title}</p>
                <div>
                  <div>
                    <p>
                      {product.price === product.discountedPrice
                        ? ""
                        : `$${product.price}`}
                    </p>
                    <p>${product.discountedPrice}</p>
                  </div>
                  <div>
                    <button onClick={() => subtractQuantity(product.id)}>
                      <RemoveIcon></RemoveIcon>
                    </button>
                    <p>{product.quantity}</p>
                    <button onClick={() => addQuantity(product.id)}>
                      <AddIcon></AddIcon>
                    </button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(product.id)}>
                  <CloseIcon></CloseIcon>
                </button>
              </div>
            ))}
            <div>
              <p>Total</p>
              <p>${totalCost.toFixed(2)}</p>
            </div>
            <button>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
