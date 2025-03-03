import Success from "../order-confirmed.png";
import styles from "../styles/Success.module.css";
import { Link } from "react-router-dom";

export function CheckoutSuccess() {
  const randomNumber = Math.floor(Math.random() * 10000);
  return (
    <div className={styles.pageContainer}>
      <img src={Success} alt="order confirmed" />
      <h1 className={styles.successMessage}>Thank you for your purchase!</h1>
      <p className={styles.orderNumber}>
        Order number <span>#{randomNumber}</span>
      </p>
      <p className={styles.orderMessage}>
        Your order was successfully placed and is being prepared for delivery.
      </p>
      <Link to="/" className={styles.backHome}>
        Back to store
      </Link>
    </div>
  );
}
