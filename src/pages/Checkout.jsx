import PageWrapper from "../components/PageWrapper";
import "../style/Checkout.css"

export default function Checkout() {
  return (
    <PageWrapper>
      <div className="glass-checkout">
        <h2>💳 Thanh toán</h2>
        <form>
          <div className="form-group">
            <label>Họ tên người nhận:</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Địa chỉ:</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Phương thức thanh toán:</label>
            <select>
              <option>Thanh toán khi nhận hàng (COD)</option>
              <option>Ví Momo</option>
              <option>VNPay</option>
            </select>
          </div>
          <button type="submit">Xác nhận thanh toán</button>
        </form>
      </div>
    </PageWrapper>
  );
}
