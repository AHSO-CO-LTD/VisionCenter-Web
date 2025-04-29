import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { useAuth } from "../context/AuthContext";
import "../style/Cart.css";
import API from "../utils/api";

function Cart() {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user && user.id) {
      fetchCart();
    }
  }, []);

  const fetchCart = () => {
    API.get(`/cart/user/${user.id}`)
      .then((res) => setCart(res.data))
      .catch((err) => console.error("Lỗi khi tải giỏ hàng:", err));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    API.put(`/cart/${id}`, { quantity })
      .then(() => fetchCart())
      .catch((err) => console.error("Lỗi khi cập nhật số lượng:", err));
  };

  const handleDeleteItem = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá sản phẩm này khỏi giỏ hàng?")) {
      API.delete(`/cart/${id}`)
        .then(() => fetchCart())
        .catch((err) => console.error("Lỗi khi xoá sản phẩm:", err));
    }
  };

  return (
    <PageWrapper>
      <div className="cart-container">
        <h1>Giỏ Hàng</h1>
        {!user || cart.length === 0 ? (
          <p className="empty-cart">Giỏ hàng của bạn đang trống.</p>
        ) : (
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.avartar}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">
                    {item.price.toLocaleString()}đ
                  </p>
                  <div className="cart-item-quantity">
                    <label>Số lượng:</label>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                </div>
                <button
                  className="cart-item-delete"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default Cart;
