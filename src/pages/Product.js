import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
    <div>
      <figure>
        <img src={data.image?.url} alt={data.image?.alt} />
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </figure>
      <div>
        <h1>{data.title}</h1>
        <div>
          <p>{data.price === data.discountedPrice ? "" : `$${data.price}`}</p>
          <p>${data.discountedPrice}</p>
        </div>
        <p>{data.description}</p>
        <button>Add to cart</button>
        <div>
          <h2>Reviews ({data.reviews?.length})</h2>
          {data.reviews?.map((review) => (
            <div key={review.id}>
              <div>
                <p>
                  {review.rating}
                  <StarIcon></StarIcon>
                </p>
                <p>{review.username}</p>
              </div>
              <p>{review.description}</p>
            </div>
          ))}
        </div>
        <Link to="/">
          <KeyboardBackspaceIcon></KeyboardBackspaceIcon>See all products
        </Link>
      </div>
    </div>
  );
}
