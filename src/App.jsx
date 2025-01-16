import { useState, useEffect } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Product from "./assets/components/Product";
import products from "./data";

function App() {
  const [balance, setBalance] = useState(100000000000);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const handleBuy = (product) => {
    const productIndex = purchasedProducts.findIndex(
      (purchasedProduct) => purchasedProduct.name === product.name
    );

    if (productIndex === -1) {
      setPurchasedProducts([...purchasedProducts, { ...product, quantity: 1 }]);
    } else {
      const updatedProducts = [...purchasedProducts];
      updatedProducts[productIndex].quantity += 1;
      setPurchasedProducts(updatedProducts);
    }
    const totalPrice = purchasedProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    const newTotalPrice = purchasedProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    setTotal(newTotalPrice); // Toplam fiyatı güncelle
  }, [purchasedProducts]); // purchasedProducts değiştiğinde toplam fiyatı güncelle

  const handleSell = (product) => {
    const productIndex = purchasedProducts.findIndex(
      (purchasedProduct) => purchasedProduct.name === product.name
    );

    if (productIndex !== -1) {
      const updatedProducts = [...purchasedProducts];

      if (updatedProducts[productIndex].quantity > 1) {
        updatedProducts[productIndex].quantity -= 1;
      } else {
        updatedProducts.splice(productIndex, 1);
      }

      setPurchasedProducts(updatedProducts); // Güncellenmiş listeyi kaydet
    }
  };
  return (
    <>
      <Header balance={balance} />

      <div className="w-full mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              balance={balance}
              setBalance={setBalance}
              handleBuy={handleBuy}
              handleSell={handleSell}
            />
          ))}
        </div>
      </div>
      <Footer purchasedProducts={purchasedProducts} total={total} />
    </>
  );
}

export default App;
