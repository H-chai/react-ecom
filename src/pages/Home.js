import { useApi } from "../hooks/useApi";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  const url = "https://v2.api.noroff.dev/online-shop";
  const { data: products, isLoading, isError } = useApi(url);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.searchBarContainer}>
        <button className={styles.searchButton}>
          <SearchIcon></SearchIcon>
        </button>
        <input type="text" name="" id="" placeholder="Search" />
      </div>
      <div className={styles.categorySection}>
        <h2>Categories</h2>
        <ul className={styles.categoryList}>
          <li className={styles.categoryListItem}>
            <button>All</button>
          </li>
          <li className={styles.categoryListItem}>
            <button>Fashion</button>
          </li>
          <li className={styles.categoryListItem}>
            <button>Beauty</button>
          </li>
          <li className={styles.categoryListItem}>
            <button>Electronics</button>
          </li>
          <li className={styles.categoryListItem}>
            <button>Toy</button>
          </li>
        </ul>
      </div>
      <div className={styles.productSection}>
        {products.map((product) => (
          <Link
            key={product.id}
            className={styles.product}
            to={`/product/${product.id}`}
          >
            <figure>
              <img src={product.image.url} alt={product.image.alt} />
            </figure>
            <p className={styles.productTitle}>{product.title}</p>
            <div className={styles.price}>
              <p className={styles.discountedPrice}>
                ${product.discountedPrice}
              </p>
              <p className={styles.originalPrice}>
                {product.price === product.discountedPrice
                  ? ""
                  : `$${product.price}`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
