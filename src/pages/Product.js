import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

export function Product() {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(
    `https://v2.api.noroff.dev/online-shop/${id}`
  );

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return <div>Single Product {data.id}</div>;
}
