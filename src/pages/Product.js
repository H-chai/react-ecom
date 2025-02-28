import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "../styles/Product.module.css";

export function Product() {
  let { id } = useParams();
  const url = `https://v2.api.noroff.dev/online-shop/${id}`;
  const { data, isLoading, isError } = useApi(url);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <div className={styles.productContainer}>
      <figure className={styles.figure}>
        <img src={data.image?.url} alt={data.image?.alt} />
        <FavoriteBorderIcon className={styles.favorite}></FavoriteBorderIcon>
      </figure>
      <div className={styles.productDetailContainer}>
        <div className={styles.titlePrice}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.prices}>
            <p className={styles.originalPrice}>
              {data.price === data.discountedPrice ? "" : `$${data.price}`}
            </p>
            <p className={styles.discountedPrice}>${data.discountedPrice}</p>
          </div>
        </div>
        <p className={styles.description}>{data.description}</p>
        <button className={styles.addToCart}>Add to cart</button>
        <div className={styles.reviewSection}>
          <h2>Reviews ({data.reviews?.length})</h2>
          {data.reviews?.map((review) => (
            <div key={review.id} className={styles.review}>
              <div className={styles.reviewer}>
                <p className={styles.rating}>
                  {review.rating}
                  <StarIcon></StarIcon>
                </p>
                <p className={styles.reviewUsername}>{review.username}</p>
              </div>
              <p className={styles.reviewDescription}>{review.description}</p>
            </div>
          ))}
        </div>
        <Link to="/" className={styles.backHome}>
          <KeyboardBackspaceIcon></KeyboardBackspaceIcon>See all products
        </Link>
      </div>
    </div>
  );
}
