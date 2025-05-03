import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

import "../style/Home.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <PageWrapper>
      <div className="hero" data-aos="fade-up">
        <div className="hero-content">
          <div className="text-box">
            <h1>Giải pháp thị giác máy cho sản xuất 4.0</h1>
            <p>
              Cung cấp phần mềm xử lý ảnh, camera Basler, đèn công nghiệp và
              băng tải chuyên dụng cho các hệ thống AI.
            </p>
            <Link to="/contact" className="cta-button">
              📩 Liên hệ tư vấn
            </Link>
          </div>
          <div className="image-box">
            <img src="/assets/home1.avif" alt="Vision System" />
          </div>
        </div>
      </div>

      <section className="section about" data-aos="fade-right">
        <h2>🧠 Về VISION TECH</h2>
        <p>
          Chúng tôi chuyên cung cấp giải pháp thị giác máy cho công nghiệp: phát
          hiện lỗi, phân loại, đo đạc tự động và kiểm tra inline. Đội ngũ kỹ sư
          dày dạn kinh nghiệm và dịch vụ hỗ trợ tận nơi trên toàn quốc.
        </p>
      </section>

      <section className="section categories" data-aos="zoom-in">
        <h2>📁 Danh mục sản phẩm</h2>
        <div className="scroll-container">
          <CategoryItem
            imgSrc="/assets/home-image/GigE-Vision-3-0.webp"
            label="Camera công nghiệp"
            link="/camera"
          />
          <CategoryItem
            imgSrc="/assets/home-image/-Use_Case_-_Wafer_Surface_Inspection-_page_graphics___Video_production_3200px_1800px_2025.webp"
            label="Đèn chiếu sáng"
            link="/lighting"
          />
          <CategoryItem
            imgSrc="/assets/home-image/UC-bin-picking-stereo-vision_2.webp"
            label="Băng tải"
            link="/conveyor"
          />
          <CategoryItem
            imgSrc="/assets/home-image/uc-swir-in-agriculture-system.webp"
            label="Phần mềm AI"
            link="/software"
          />
          <CategoryItem
            imgSrc="/assets/home-image/UC-bin-picking-stereo-vision_2.webp"
            label="Băng tải"
            link="/conveyor"
          />
          <CategoryItem
            imgSrc="/assets/home-image/uc-swir-in-agriculture-system.webp"
            label="Phần mềm AI"
            link="/software"
          />
        </div>
      </section>

      <section className="section highlight" data-aos="fade-left">
        <h2>🚀 Ứng dụng nổi bật</h2>
        <div className="highlight-grid">
          <HighlightCard
            title="📷 Kiểm tra ngoại quan"
            desc="Nhận diện lỗi, bụi bẩn, lệch tâm bằng AI."
          />
          <HighlightCard
            title="📐 Đo đạc tự động"
            desc="Tích hợp công nghệ đo không tiếp xúc, sai số nhỏ hơn 1%."
          />
          <HighlightCard
            title="🎯 Tự động hóa quy trình"
            desc="Phân loại - đẩy sản phẩm - báo lỗi."
          />
        </div>
      </section>

      <section className="section contact-cta" data-aos="zoom-in-up">
        <h2>📞 Tư vấn miễn phí & Demo thực tế</h2>
        <p>
          Liên hệ kỹ sư để được khảo sát & đưa ra giải pháp phù hợp với hệ thống
          sản xuất của bạn.
        </p>
        <Link to="/contact" className="cta-button">
          Gửi yêu cầu ➤
        </Link>
      </section>
    </PageWrapper>
  );
}

function CategoryItem({ imgSrc, label, link }) {
  return (
    <Link to={link} className="category-card-home" data-aos="fade-up">
      <img src={imgSrc} alt={label} />
      <span>{label}</span>
    </Link>
  );
}

function HighlightCard({ title, desc }) {
  return (
    <div className="highlight-card" data-aos="fade-up">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
