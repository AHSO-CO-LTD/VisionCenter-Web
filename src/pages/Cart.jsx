import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { useAuth } from "../context/AuthContext";
import "../style/Cart.css";
import API from "../utils/api";

function Cart() {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

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

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const totalSelected = cart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (selectedItems.length === 0) {
      alert("Vui lòng chọn ít nhất một sản phẩm để đặt hàng.");
      return;
    }

    const payload = {
      user_id: user.id,
      item_ids: selectedItems,
    };

    API.post("/orders/", payload)
      .then((res) => {
        const orderId = res.data.order_id;
        console.log(orderId);
        // alert("Đặt hàng thành công!");
        setSelectedItems([]);
        // Chuyển hướng sang thông tin đơn hàng
        navigate(`/order/${orderId}/info`);
        fetchCart(); // cập nhật lại giỏ hàng
        //
      })
      .catch((err) => {
        console.error("Lỗi khi đặt hàng:", err);
        alert("Đặt hàng thất bại. Vui lòng thử lại.");
      });
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
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                  className="cart-item-checkbox"
                />
                <img
                  src={`http://localhost:8000${item.avatar}`}
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
                  Xoá
                </button>
              </div>
            ))}
            <p className="cart-total">
              Tổng tiền: {totalSelected.toLocaleString()}đ
            </p>
            <button
              className="order-button"
              onClick={handleOrder}
              disabled={selectedItems.length === 0}
            >
              Đặt hàng ({selectedItems.length})
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default Cart;
