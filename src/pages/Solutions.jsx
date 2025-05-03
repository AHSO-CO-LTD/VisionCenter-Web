import "../style/Solutions.css";

export default function Solutions() {
  return (
    <div className="solutions-page">
      {/* Phần giới thiệu */}
      <section className="hero-section">
        <h1>Giải pháp Thị giác Máy tính</h1>
        <p>
          Khám phá các giải pháp công nghệ thị giác máy tính tiên tiến cho các
          ngành công nghiệp hiện đại.
        </p>
      </section>

      {/* Danh mục giải pháp */}
      <section className="solution-cards">
        <h2>Danh mục Giải pháp</h2>
        <div className="card-grid">
          <div className="card">
            <img
              src="/assets/solutions-image/camera-vision.webp"
              alt="Giải pháp Camera"
            />
            <h3>Camera Vision</h3>
            <p>Giải pháp thị giác chất lượng cao cho dây chuyền sản xuất.</p>
            <a href="#">Tìm hiểu thêm</a>
          </div>

          <div className="card">
            <img src="/assets/solutions-image/aivision.webp" alt="AI Vision" />
            <h3>AI Vision</h3>
            <p>Ứng dụng trí tuệ nhân tạo trong nhận diện và phân loại.</p>
            <a href="#">Tìm hiểu thêm</a>
          </div>

          <div className="card">
            <img
              src="/assets/solutions-image/custom-analyst.webp"
              alt="Tích hợp hệ thống"
            />
            <h3>Tích hợp hệ thống</h3>
            <p>Giải pháp tích hợp camera vào dây chuyền tự động.</p>
            <a href="#">Tìm hiểu thêm</a>
          </div>
        </div>
      </section>

      {/* Lợi ích nổi bật */}
      <section className="benefits-section">
        <h2>Lợi ích nổi bật</h2>
        <ul className="benefits-list">
          <li>📈 Tăng hiệu suất sản xuất và giảm chi phí vận hành.</li>
          <li>🔍 Phát hiện lỗi chính xác và nhanh chóng.</li>
          <li>🤖 Tích hợp dễ dàng với hệ thống hiện tại.</li>
          <li>🛠️ Hỗ trợ kỹ thuật chuyên nghiệp và tận tâm.</li>
        </ul>
      </section>

      {/* Tính năng sản phẩm */}
      <section className="features-section">
        <h2>Tính năng sản phẩm</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Độ phân giải cao</h3>
            <p>Hình ảnh sắc nét giúp phát hiện lỗi nhỏ nhất.</p>
          </div>
          <div className="feature-item">
            <h3>Phân tích thời gian thực</h3>
            <p>Phản hồi nhanh chóng giúp tối ưu hóa quy trình.</p>
          </div>
          <div className="feature-item">
            <h3>Tùy chỉnh linh hoạt</h3>
            <p>Phù hợp với nhiều ngành công nghiệp khác nhau.</p>
          </div>
        </div>
      </section>

      {/* Câu chuyện khách hàng */}
      <section className="testimonials-section">
        <h2>Khách hàng nói gì về chúng tôi</h2>
        <div className="testimonial">
          <p>
            "Sau khi triển khai giải pháp của công ty, chúng tôi đã giảm được
            30% lỗi sản xuất và tăng năng suất lên 20%."
          </p>
          <h4>— Nguyễn Văn A, Giám đốc Sản xuất</h4>
        </div>
      </section>

      {/* Ngành công nghiệp áp dụng */}
      <section className="industries-section">
        <h2>Ngành Công nghiệp Áp dụng</h2>
        <div className="industry-grid">
          <div className="industry-item">
            <img src="/assets/solutions-image/congnghiep.webp" alt="Sản xuất" />
            <h4>Sản xuất</h4>
          </div>
          <div className="industry-item">
            <img src="/assets/solutions-image/medical.jpg" alt="Y tế" />
            <h4>Y tế</h4>
          </div>
          <div className="industry-item">
            <img src="/assets/solutions-image/traffic.avif" alt="Giao thông" />
            <h4>Giao thông</h4>
          </div>
        </div>
      </section>

      {/* Lời kêu gọi hành động */}
      <footer className="contact-section">
        <h2>Sẵn sàng bắt đầu cùng nhau?</h2>
        <p>
          Tìm hiểu thêm về các sản phẩm, dịch vụ của chúng tôi và cách chúng tôi
          có thể giúp bạn với dự án tiếp theo của bạn.
        </p>
        <button className="contact-us-btn">Liên hệ ngay</button>
      </footer>
    </div>
  );
}
