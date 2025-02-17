import { useApi } from "../hooks/useApi";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Home.module.css";

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
            <button>Electronics</button>
          </li>
          <li className={styles.categoryListItem}>
            <button>Beauty</button>
          </li>
          <li className={styles.categoryListItem}>
            <button>Toy</button>
          </li>
        </ul>
      </div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image.url} alt={product.image.alt} />
          <p>{product.title}</p>
          <div>
            <p>{product.discountedPrice}</p>
            <p>
              {product.price === product.discountedPrice ? "" : product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
