import { useState, useEffect, createContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const calculateSubtotal = () => {
    let total = 0;
    productsInCart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };
  
  const increaseProductQuantity = (productId) => {
    const updatedProducts = productsInCart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProductsInCart(updatedProducts);
  };

  const decreaseProductQuantity = (productId) => {
    const updatedProducts = productsInCart.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProductsInCart(updatedProducts);
  };

  const removeProductFromCart = (productId) => {
    const updatedProducts = productsInCart.filter((product) => product.id.toString() !== productId.toString());
    setProductsInCart(updatedProducts);
  };

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    const subtotalValue = calculateSubtotal();
    setSubtotal(subtotalValue);
  }, [productsInCart]);

  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    const categoryMatches =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return productName.includes(searchText) && categoryMatches;
  });

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        products,
        setProducts,
        selectedCategories,
        setSelectedCategories,
        openCart,
        setOpenCart,
        productsInCart,
        setProductsInCart,
        calculateSubtotal,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };