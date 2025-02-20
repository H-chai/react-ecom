import { useApi } from "../hooks/useApi";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Home() {
  const url = "https://v2.api.noroff.dev/online-shop";
  const { data: products, isLoading, isError, tagsArray } = useApi(url);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }
  console.log(tagsArray);

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
          <NavLink className={styles.categoryListItem}>All</NavLink>
          {tagsArray.map((tag) => (
            <NavLink key={tag} className={styles.categoryListItem}>
              {tag}
            </NavLink>
          ))}
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
