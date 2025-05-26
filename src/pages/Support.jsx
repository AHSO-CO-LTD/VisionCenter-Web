import {
  faDownload,
  faFilePdf,
  faToolbox,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { default as CyberpunkTechReveal } from "../components/effects/CyberpunkTechReveal";
import FadeInWithTechEffect from "../components/effects/FadeInWithTechEffect";
import PageWrapper from "../components/PageWrapper";
import "../style/Support.css";

export default function Support() {
  return (
    <PageWrapper>
      <div className="support-page">
        {/* Hero section */}
        <section className="support-hero-section relative overflow-hidden p-12 text-white">
          {/* Lưới nền neon */}
          <div className="neon-grid absolute inset-0 z-0" />

          {/* Hạt ánh sáng */}
          <div className="particles" />

          <div className="relative z-10 text-center space-y-6">
            <motion.h1
              className="text-8xl md:text-9xl font-bold glitch"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Trung tâm Hỗ trợ Khách hàng
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Chúng tôi luôn sẵn sàng hỗ trợ bạn trong mọi bước của hành trình
              sử dụng sản phẩm và giải pháp của chúng tôi.
            </motion.p>
          </div>
        </section>

        {/* Contact options */}
        <section className="contact-options">
          <FadeInWithTechEffect>
            <h2>Liên hệ với chúng tôi</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <img src="/assets/support/live-chat.avif" alt="Live Chat" />
                <h3>Trò chuyện trực tiếp</h3>
                <p>
                  Nhận hỗ trợ nhanh chóng từ nhóm kỹ thuật viên trong giờ làm
                  việc.
                </p>
                <button>Trò chuyện ngay</button>
              </div>
              <div className="contact-card">
                <img src="/assets/support/send-email.png" alt="Email" />
                <h3>Gửi email</h3>
                <p>
                  Gửi câu hỏi hoặc yêu cầu hỗ trợ, chúng tôi sẽ phản hồi trong
                  vòng 24h.
                </p>
                <button>Gửi email</button>
              </div>
              <div className="contact-card">
                <img src="/assets/support/hotline.webp" alt="Hotline" />
                <h3>Hotline</h3>
                <p>
                  Gọi cho chúng tôi để được hỗ trợ trực tiếp từ 8h00 đến 17h00
                  (T2-T6).
                </p>
                <button>Gọi ngay</button>
              </div>
            </div>
          </FadeInWithTechEffect>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Câu hỏi thường gặp</h2>
          <div className="faq-list">
            <FadeInWithTechEffect>
              <div className="faq-item">
                <h4>Làm sao để cài đặt phần mềm điều khiển camera?</h4>
                <p>
                  Bạn có thể tải phần mềm từ mục "Tải về", sau đó làm theo hướng
                  dẫn trong file README hoặc video hướng dẫn đi kèm.
                </p>
              </div>
            </FadeInWithTechEffect>
            <FadeInWithTechEffect>
              <div className="faq-item">
                <h4>Tôi cần hỗ trợ về tích hợp hệ thống, tôi nên làm gì?</h4>
                <p>
                  Bạn có thể liên hệ qua email hoặc hotline, đội ngũ tích hợp
                  của chúng tôi sẽ hỗ trợ bạn từng bước.
                </p>
              </div>
            </FadeInWithTechEffect>
            <FadeInWithTechEffect>
              <div className="faq-item">
                <h4>Tôi có thể nâng cấp firmware cho camera không?</h4>
                <p>
                  Có, bạn có thể kiểm tra phiên bản mới trong phần mềm quản lý
                  và làm theo hướng dẫn nâng cấp.
                </p>
              </div>
            </FadeInWithTechEffect>
          </div>
        </section>

        {/* Download section */}
        <section className="downloads-section">
          <CyberpunkTechReveal>
            <h2>Tài liệu & Tải về</h2>
            <ul className="download-list">
              <li>
                <FontAwesomeIcon icon={faFilePdf} className="icon-download" />
                <a href="#">Hướng dẫn sử dụng camera Basler (PDF)</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faDownload} className="icon-download" />
                <a href="#">Phần mềm Pylon Viewer mới nhất</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faToolbox} className="icon-download" />
                <a href="#">Bộ SDK phát triển cho Windows/Linux</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faVideo} className="icon-download" />
                <a href="#">Video hướng dẫn cấu hình & kết nối</a>
              </li>
            </ul>
          </CyberpunkTechReveal>
        </section>

        {/* Feedback */}
        <section className="feedback-section">
          <CyberpunkTechReveal>
            <h2>Góp ý và Phản hồi</h2>
            <p>
              Chúng tôi luôn lắng nghe để cải thiện trải nghiệm của bạn. Gửi
              phản hồi của bạn tại đây.
            </p>
            <form className="feedback-form">
              <textarea
                placeholder="Nhập phản hồi của bạn..."
                rows={5}
              ></textarea>
              <button type="submit">Gửi phản hồi</button>
            </form>
          </CyberpunkTechReveal>
        </section>
      </div>
    </PageWrapper>
  );
}
