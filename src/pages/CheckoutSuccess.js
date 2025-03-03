import Success from "../order-confirmed.png";

export function CheckoutSuccess() {
  const randomNumber = Math.floor(Math.random() * 10000);
  return (
    <div>
      <img src={Success} alt="order confirmed" />
      <h1>Thank you for your purchase!</h1>
      <p>Order number #{randomNumber}</p>
      <p>
        Your order was successfully placed and is being prepared for delivery.
      </p>
      <button>Back to store</button>
    </div>
  );
}
