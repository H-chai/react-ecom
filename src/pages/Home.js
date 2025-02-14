import { useApi } from "../hooks/useApi";
import styles from "../styles/common.module.css";
import SearchIcon from "@mui/icons-material/Search";

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
    <div>
      <div>
        <SearchIcon></SearchIcon>
        <input type="text" name="" id="" placeholder="search" />
      </div>
      <div>
        <h2>Categories</h2>
        <ul className={styles.noListStyle}>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Fashion</button>
          </li>
          <li>
            <button>Electronics</button>
          </li>
          <li>
            <button>Beauty</button>
          </li>
          <li>
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
