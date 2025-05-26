import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

import CyberpunkTechReveal from "../components/effects/CyberpunkTechReveal";
import FadeInWhenVisible from "../components/effects/FadeInWhenVisible";
import FadeInWithTechEffect from "../components/effects/FadeInWithTechEffect";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Howl } from "howler";
import "../style/Home.css";

// Âm thanh hiệu ứng (hover/click)
const hoverSound = new Howl({
  src: ["/sounds/mixkit-interface-device-click-2577.wav"], // bạn cần thêm file này vào public/sounds/
  volume: 0.3,
});
const hoverCardSound = new Howl({
  src: ["/sounds/hover-card.wav"], // bạn cần thêm file này vào public/sounds/
  volume: 0.3,
});
 // Phát âm thanh khi hover
 const handleHover = () => {
   hoverSound.play();
 };
 const handleCardHover = () => {
   hoverCardSound.play();
 };
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
 
  return (
    <PageWrapper>
      <div className="home-page">
        <div className="hero" data-aos="fade-up">
          <div className="hero-content">
            <div className="text-box">
              <h1>Giải pháp thị giác máy cho sản xuất 4.0</h1>
              <p>
                Cung cấp phần mềm xử lý ảnh, camera Basler, đèn công nghiệp và
                băng tải chuyên dụng cho các hệ thống AI.
              </p>
              <Link
                to="/contact"
                className="cta-button"
                onMouseDown={handleHover}
              >
                <FontAwesomeIcon icon={faPaperPlane} /> Liên hệ tư vấn
              </Link>
            </div>
            <div className="image-box">
              <img src="/assets/home1.avif" alt="Vision System" />
            </div>
          </div>
        </div>

        <section className="section about" data-aos="fade-right">
          <CyberpunkTechReveal>
            <h2>
              <FontAwesomeIcon icon={faBrain} /> Về VISION TECH
            </h2>
            <p>
              Chúng tôi chuyên cung cấp giải pháp thị giác máy cho công nghiệp:
              phát hiện lỗi, phân loại, đo đạc tự động và kiểm tra inline. Đội
              ngũ kỹ sư dày dạn kinh nghiệm và dịch vụ hỗ trợ tận nơi trên toàn
              quốc.
            </p>
          </CyberpunkTechReveal>
        </section>

        <section className="section categories" data-aos="zoom-in">
          <h2>
            <FontAwesomeIcon icon={faCogs} /> Danh mục sản phẩm
          </h2>
          <div className="scroll-container">
            <CategoryItem
              imgSrc="/assets/home-image/GigE-Vision-3-0.webp"
              label="Camera công nghiệp"
              icon={faCamera}
              link="/camera"
            />
            <CategoryItem
              imgSrc="/assets/home-image/-Use_Case_-_Wafer_Surface_Inspection-_page_graphics___Video_production_3200px_1800px_2025.webp"
              label="Đèn chiếu sáng"
              icon={faLightbulb}
              link="/lighting"
            />
            <CategoryItem
              imgSrc="/assets/home-image/UC-bin-picking-stereo-vision_2.webp"
              label="Băng tải"
              icon={faCogs}
              link="/conveyor"
            />
            <CategoryItem
              imgSrc="/assets/home-image/uc-swir-in-agriculture-system.webp"
              label="Phần mềm AI"
              icon={faBrain}
              link="/software"
            />
            <CategoryItem
              imgSrc="/assets/home-image/UC-bin-picking-stereo-vision_2.webp"
              label="Băng tải"
              icon={faCogs}
              link="/conveyor"
            />
            <CategoryItem
              imgSrc="/assets/home-image/uc-swir-in-agriculture-system.webp"
              label="Phần mềm AI"
              icon={faBrain}
              link="/software"
            />
          </div>
        </section>

        <section className="section highlight" data-aos="fade-left">
          <FadeInWithTechEffect>
            <h2>
              <FontAwesomeIcon icon={faRocket} /> Ứng dụng nổi bật
            </h2>
            <div className="highlight-grid">
              <HighlightCard
                title={
                  <>
                    <FontAwesomeIcon icon={faMicroscope} /> Kiểm tra ngoại quan
                  </>
                }
                desc="Nhận diện lỗi, bụi bẩn, lệch tâm bằng AI."
              />
              <HighlightCard
                title={
                  <>
                    <FontAwesomeIcon icon={faRulerCombined} /> Đo đạc tự động
                  </>
                }
                desc="Tích hợp công nghệ đo không tiếp xúc, sai số nhỏ hơn 1%."
              />
              <HighlightCard
                title={
                  <>
                    <FontAwesomeIcon icon={faRobot} /> Tự động hóa quy trình
                  </>
                }
                desc="Phân loại - đẩy sản phẩm - báo lỗi."
              />
            </div>
          </FadeInWithTechEffect>
        </section>

        <section className="section service-intro" data-aos="fade-up">
          <FadeInWhenVisible>
            <h2>
              <FontAwesomeIcon icon={faHandshake} /> Dịch vụ của chúng tôi
            </h2>
            <p>
              Chúng tôi cung cấp giải pháp tích hợp trọn gói: từ khảo sát, tư
              vấn đến triển khai thực tế. Với đội ngũ kỹ sư giàu kinh nghiệm,
              chúng tôi luôn đồng hành cùng doanh nghiệp trong công cuộc chuyển
              đổi số.
            </p>
            <div className="service-icons">
              <div className="service-box" data-aos="zoom-in">
                <FontAwesomeIcon icon={faMicroscope} size="2x" />
                <h4>Phân tích lỗi</h4>
              </div>
              <div
                className="service-box"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <FontAwesomeIcon icon={faRulerCombined} size="2x" />
                <h4>Đo đạc chính xác</h4>
              </div>
              <div
                className="service-box"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <FontAwesomeIcon icon={faRobot} size="2x" />
                <h4>Tự động hóa</h4>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        <section className="section contact-cta" data-aos="zoom-in-up">
          <FadeInWhenVisible>
            <h2>
              <FontAwesomeIcon icon={faPaperPlane} /> Tư vấn miễn phí & Demo
              thực tế
            </h2>
            <p>
              Liên hệ kỹ sư để được khảo sát & đưa ra giải pháp phù hợp với hệ
              thống sản xuất của bạn.
            </p>
            <Link to="/contact" className="cta-button">
              Gửi yêu cầu ➤
            </Link>
          </FadeInWhenVisible>
        </section>
      </div>
    </PageWrapper>
  );
}

function CategoryItem({ imgSrc, label, icon, link }) {
  return (
    <Link
      to={link}
      className="category-card-home"
      data-aos="fade-up"
      onMouseEnter={handleCardHover}
    >
      <img src={imgSrc} alt={label} />
      <span>
        <FontAwesomeIcon icon={icon} /> {label}
      </span>
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
