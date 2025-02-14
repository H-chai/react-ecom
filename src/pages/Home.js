import { useApi } from "../hooks/useApi";

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
