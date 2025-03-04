import { useApi } from "../hooks/useApi";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Home() {
  const url = "https://v2.api.noroff.dev/online-shop";
  const { data: products, isLoading, isError } = useApi(url);
  const tags = products.map((d) => d.tags);
  const tagsArray = [...new Set(tags.flat())];
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    const queryString = selectedCategories.length
      ? `?category=${selectedCategories.join(",")}`
      : "/";
    window.history.pushState(null, "", queryString);
  }, [selectedCategories]);

  const [inputText, setInputText] = useState("");

  const [isCategoryShown, setIsCategoryShown] = useState(false);
  function toggleCategoryList() {
    setIsCategoryShown((prev) => !prev);
  }

  const renderCategoryButtons = (tags) => {
    return tags.map((tag) => (
      <button
        key={tag}
        className={`${styles.categoryListItem} ${
          selectedCategories.includes(tag) ? "active" : ""
        }`}
        onClick={onCategoryClick}
      >
        {tag}
        {selectedCategories.includes(tag) && (
          <CloseIcon
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCategories((prevSelectedCategories) =>
                prevSelectedCategories.filter((item) => item !== tag)
              );
            }}
          ></CloseIcon>
        )}
      </button>
    ));
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  function onCategoryClick(event) {
    event.preventDefault();
    const category = event.target.textContent;
    setInputText("");

    if (!selectedCategories.includes(category)) {
      setSelectedCategories((prevSelectedCategories) => [
        ...prevSelectedCategories,
        category,
      ]);
    }
  }

  function onClearFilter(event) {
    event.preventDefault();
    setSelectedCategories([]);
  }

  function onInputTextChange(event) {
    setInputText(event.target.value);
    setSelectedCategories([]);
  }

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.some((category) => product.tags.includes(category))
        );

  const searchedProducts = inputText
    ? products.filter((product) =>
        product.title.toLowerCase().includes(inputText.toLowerCase())
      )
    : products;

  const productsToDisplay = inputText ? searchedProducts : filteredProducts;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.searchBarContainer}>
        <SearchIcon></SearchIcon>
        <input
          type="text"
          value={inputText}
          onChange={onInputTextChange}
          placeholder="Search"
        />
        {inputText ? (
          <CloseIcon
            className={styles.cursorPointer}
            onClick={(e) => {
              e.stopPropagation();
              setInputText("");
            }}
          ></CloseIcon>
        ) : (
          ""
        )}
      </div>
      <div className={styles.categorySection}>
        <h2>Categories</h2>
        <ul className={styles.categoryList}>
          <Link
            to="/"
            className={`${styles.categoryListItem} ${
              selectedCategories.length === 0 ? "active" : ""
            }`}
            onClick={onClearFilter}
          >
            All
          </Link>
          {renderCategoryButtons(
            isCategoryShown ? tagsArray : tagsArray.slice(0, 6)
          )}
        </ul>
        <button
          onClick={toggleCategoryList}
          className={styles.categoryToggleButton}
        >
          {isCategoryShown ? "Show less" : "Show all"}
        </button>
      </div>
      <div>
        {productsToDisplay.length === 0 ? (
          <p className={styles.noProductText}>
            There are no results for "
            <span className={styles.highlight}>{inputText}</span>"
          </p>
        ) : (
          <div className={styles.productSection}>
            {productsToDisplay.map((product) => (
              <Link
                key={product.id}
                className={styles.product}
                to={`/product/${product.id}`}
              >
                <div className={styles.figureContainer}>
                  <figure>
                    <img src={product.image.url} alt={product.image.alt} />
                  </figure>
                  <div className={styles.hoverLayer}>View product</div>
                </div>
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
        )}
      </div>
    </div>
  );
}
