import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import "../style/OrderInfo.css";
import API from "../utils/api";

function OrderInfo() {
  const { orderId } = useParams(); // lấy orderId từ URL
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (orderId) {
      API.get(`/orders/${orderId}/info`)
        .then((res) => setOrderData(res.data))
        .catch((err) => console.error("Lỗi khi lấy thông tin đơn hàng:", err));
    }
  }, [orderId]);

  if (!orderData) {
    return <PageWrapper>Đang tải thông tin đơn hàng...</PageWrapper>;
  }

  const { order, user, items } = orderData;

  return (
    <PageWrapper>
      <div className="order-info-container">
        <h1>Thông Tin Đơn Hàng #{order.id}</h1>

        <div className="order-section">
          <h2>Thông tin người đặt</h2>
          <p>
            <strong>Tên:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Số điện thoại:</strong> {user.phone}
          </p>
          <p>
            <strong>Địa chỉ:</strong> {user.address}
          </p>
        </div>

        <div className="order-section">
          <h2>Chi tiết đơn hàng</h2>
          <p>
            <strong>Trạng thái:</strong> {order.status}
          </p>
          <p>
            <strong>Ngày tạo:</strong>{" "}
            {new Date(order.created_at).toLocaleString()}
          </p>
          <p>
            <strong>Tổng tiền:</strong>{" "}
            {parseFloat(order.total_price).toLocaleString()}đ
          </p>
        </div>

        <div className="order-section">
          <h2>Sản phẩm</h2>
          {items.map((item) => (
            <div key={item.id} className="order-item">
              <img
                src={item.avartar}
                alt={item.name}
                className="order-item-image"
              />
              <div className="order-item-info">
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p>Số lượng: {item.quantity}</p>
                <p>Giá: {parseFloat(item.price).toLocaleString()}đ</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export default OrderInfo;
