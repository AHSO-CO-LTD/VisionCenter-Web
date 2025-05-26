import {
  faBrain,
  faCamera,
  faCogs,
  faHandshake,
  faLightbulb,
  faMicroscope,
  faPaperPlane,
  faRobot,
  faRocket,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "../components/PageWrapper";
import "../style/Solutions.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInWhenVisible from "../components/effects/CyberpunkTechReveal";
import CyberpunkTechReveal from "../components/effects/CyberpunkTechReveal";
import FadeInWithTechEffect from "../components/effects/FadeInWithTechEffect";

export default function Solutions() {
  return (
    <PageWrapper>
      <div className="solutions-page">
        {/* Phần giới thiệu */}
        <section className="solutions-hero-section">
          <h1>
            <FontAwesomeIcon icon={faRocket} /> Giải pháp Thị giác Máy tính
          </h1>
          <p>
            <FontAwesomeIcon icon={faLightbulb} /> Khám phá các giải pháp công
            nghệ thị giác máy tính tiên tiến cho các ngành công nghiệp hiện đại.
          </p>

          <div className="wave-container">
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2880 320" /* Gấp đôi chiều rộng */
              preserveAspectRatio="none"
            >
              <g className="wave-group">
                {/* Nhóm sóng đầu tiên */}
                <path
                  fill="#0099ff"
                  fillOpacity="0.4"
                  d="M0 160 Q360 320 720 160 T1440 160 V320 H0 Z"
                />
                <path
                  fill="#0077cc"
                  fillOpacity="0.3"
                  d="M0 180 Q360 300 720 180 T1440 180 V320 H0 Z"
                />
                <path
                  fill="#005fa3"
                  fillOpacity="0.2"
                  d="M0 140 Q360 280 720 140 T1440 140 V320 H0 Z"
                />

                {/* Nhóm sóng thứ hai dịch chuyển ngang bên cạnh nhóm đầu */}
                <path
                  fill="#0099ff"
                  fillOpacity="0.4"
                  d="M1440 160 Q1800 320 2160 160 T2880 160 V320 H1440 Z"
                />
                <path
                  fill="#0077cc"
                  fillOpacity="0.3"
                  d="M1440 180 Q1800 300 2160 180 T2880 180 V320 H1440 Z"
                />
                <path
                  fill="#005fa3"
                  fillOpacity="0.2"
                  d="M1440 140 Q1800 280 2160 140 T2880 140 V320 H1440 Z"
                />
              </g>
            </svg>
          </div>
        </section>

        {/* Danh mục giải pháp */}
        <section className="solution-cards">
          <CyberpunkTechReveal>
            <h2>
              <FontAwesomeIcon icon={faCogs} /> Danh mục Giải pháp
            </h2>
            <div className="card-grid">
              <div className="card">
                <FontAwesomeIcon icon={faCamera} className="card-icon" />
                <img
                  src="/assets/solutions-image/camera-vision.webp"
                  alt="Giải pháp Camera"
                />
                <h3>Camera Vision</h3>
                <p>
                  Giải pháp thị giác chất lượng cao cho dây chuyền sản xuất.
                </p>
                <a href="#">Tìm hiểu thêm</a>
              </div>

              <div className="card">
                <FontAwesomeIcon icon={faBrain} className="card-icon" />
                <img
                  src="/assets/solutions-image/aivision.webp"
                  alt="AI Vision"
                />
                <h3>AI Vision</h3>
                <p>Ứng dụng trí tuệ nhân tạo trong nhận diện và phân loại.</p>
                <a href="#">Tìm hiểu thêm</a>
              </div>

              <div className="card">
                <FontAwesomeIcon icon={faRobot} className="card-icon" />
                <img
                  src="/assets/solutions-image/custom-analyst.webp"
                  alt="Tích hợp hệ thống"
                />
                <h3>Tích hợp hệ thống</h3>
                <p>Giải pháp tích hợp camera vào dây chuyền tự động.</p>
                <a href="#">Tìm hiểu thêm</a>
              </div>
            </div>
          </CyberpunkTechReveal>
        </section>

        {/* Lợi ích nổi bật */}
        <section className="benefits-section">
          <FadeInWhenVisible>
            <h2>
              <FontAwesomeIcon icon={faLightbulb} /> Lợi ích nổi bật
            </h2>
            <ul className="benefits-list">
              <li>
                <FontAwesomeIcon icon={faRocket} /> Tăng hiệu suất sản xuất và
                giảm chi phí vận hành.
              </li>
              <li>
                <FontAwesomeIcon icon={faMicroscope} /> Phát hiện lỗi chính xác
                và nhanh chóng.
              </li>
              <li>
                <FontAwesomeIcon icon={faRobot} /> Tích hợp dễ dàng với hệ thống
                hiện tại.
              </li>
              <li>
                <FontAwesomeIcon icon={faHandshake} /> Hỗ trợ kỹ thuật chuyên
                nghiệp và tận tâm.
              </li>
            </ul>
          </FadeInWhenVisible>
        </section>

        {/* Tính năng sản phẩm */}
        <section className="features-section">
          <FadeInWhenVisible>
            <h2>
              <FontAwesomeIcon icon={faCogs} /> Tính năng sản phẩm
            </h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>
                  <FontAwesomeIcon icon={faRulerCombined} /> Độ phân giải cao
                </h3>
                <p>Hình ảnh sắc nét giúp phát hiện lỗi nhỏ nhất.</p>
              </div>
              <div className="feature-item">
                <h3>
                  <FontAwesomeIcon icon={faMicroscope} /> Phân tích thời gian
                  thực
                </h3>
                <p>Phản hồi nhanh chóng giúp tối ưu hóa quy trình.</p>
              </div>
              <div className="feature-item">
                <h3>
                  <FontAwesomeIcon icon={faLightbulb} /> Tùy chỉnh linh hoạt
                </h3>
                <p>Phù hợp với nhiều ngành công nghiệp khác nhau.</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Câu chuyện khách hàng */}
        <section className="testimonials-section">
          <FadeInWithTechEffect>
            <h2>
              <FontAwesomeIcon icon={faPaperPlane} /> Khách hàng nói gì về chúng
              tôi
            </h2>
            <div className="testimonial">
              <p>
                "Sau khi triển khai giải pháp của công ty, chúng tôi đã giảm
                được 30% lỗi sản xuất và tăng năng suất lên 20%."
              </p>
              <h4>— Nguyễn Văn A, Giám đốc Sản xuất</h4>
            </div>
          </FadeInWithTechEffect>
        </section>

        {/* Ngành công nghiệp áp dụng */}
        <section className="industries-section">
          <FadeInWhenVisible>
            <h2>
              <FontAwesomeIcon icon={faCogs} /> Ngành Công nghiệp Áp dụng
            </h2>
            <div className="industry-grid">
              <div className="industry-item">
                <img
                  src="/assets/solutions-image/congnghiep.webp"
                  alt="Sản xuất"
                />
                <h4>Sản xuất</h4>
              </div>
              <div className="industry-item">
                <img src="/assets/solutions-image/medical.jpg" alt="Y tế" />
                <h4>Y tế</h4>
              </div>
              <div className="industry-item">
                <img
                  src="/assets/solutions-image/traffic.avif"
                  alt="Giao thông"
                />
                <h4>Giao thông</h4>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Lời kêu gọi hành động */}
        <footer className="contact-section">
          <FadeInWithTechEffect>
            <h2>
              <FontAwesomeIcon icon={faHandshake} /> Sẵn sàng bắt đầu cùng nhau?
            </h2>
            <p>
              Tìm hiểu thêm về các sản phẩm, dịch vụ của chúng tôi và cách chúng
              tôi có thể giúp bạn với dự án tiếp theo của bạn.
            </p>
            <button className="contact-us-btn">
              <FontAwesomeIcon icon={faPaperPlane} /> Liên hệ ngay
            </button>
          </FadeInWithTechEffect>
        </footer>
      </div>
    </PageWrapper>
  );
}
