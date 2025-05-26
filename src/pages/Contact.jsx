import PageWrapper from "../components/PageWrapper";
import "../style/Contact.css";

export default function Contact() {
  return (
    <PageWrapper>
      <div className="contact-page">
        {/* Tiêu đề trang */}
        <header className="contact-header">
          <h1>Liên hệ với chúng tôi</h1>
          <p>
            Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào, vui lòng liên hệ với
            chúng tôi qua thông tin dưới đây hoặc điền vào biểu mẫu.
          </p>

          {/* Light streak */}
          <div className="light-streak"></div>

          {/* Sparkles */}
          <div
            className="sparkle"
            style={{ top: "40%", left: "25%", animationDelay: "0s" }}
          ></div>
          <div
            className="sparkle"
            style={{ top: "60%", left: "70%", animationDelay: "1.3s" }}
          ></div>
          <div
            className="sparkle"
            style={{ top: "35%", left: "80%", animationDelay: "2.7s" }}
          ></div>
          <div
            className="sparkle"
            style={{ top: "50%", left: "15%", animationDelay: "1.8s" }}
          ></div>
        </header>

        {/* Thông tin liên hệ */}
        <section className="contact-info">
          <div className="info-item">
            <h3>Địa chỉ</h3>
            <p>123 Đường Trần Phú, Quận 5, TP. Hồ Chí Minh, Việt Nam</p>
          </div>
          <div className="info-item">
            <h3>Số điện thoại</h3>
            <p>+84 28 1234 5678</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>support@tencongty.vn</p>
          </div>
          <div className="info-item">
            <h3>Giờ làm việc</h3>
            <p>Thứ 2 - Thứ 6: 8:00 - 17:00</p>
          </div>
        </section>

        {/* Biểu mẫu liên hệ */}
        <section className="contact-form-section">
          <h2>Gửi tin nhắn</h2>
          <form className="contact-form">
            <input type="text" placeholder="Họ và tên" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Số điện thoại" />
            <textarea placeholder="Nội dung tin nhắn..." rows="6" required />
            <button type="submit">Gửi tin nhắn</button>
          </form>
        </section>

        {/* Google Map */}
        <section className="contact-map">
          <h2>Bản đồ</h2>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.520539456918!2d106.67998331428706!3d10.771614692325428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1e1e425e7f%3A0x6ef98c241c6f8f7a!2zQ8O0bmcgdHkgVG5oIFRyeW5o!5e0!3m2!1svi!2s!4v1682641101692!5m2!1svi!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
