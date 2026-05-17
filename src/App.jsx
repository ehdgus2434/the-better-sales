import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Home,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  UserPlus,
  Handshake,
  Menu,
  X,
  Star,
  BriefcaseBusiness,
  HeartHandshake,
  BadgeCheck,
  Clock3,
} from 'lucide-react';

const PHONE_DISPLAY = '010-8068-3505';
const PHONE_SMS = '01080683505';
const KAKAO_LINK = 'https://open.kakao.com/o/sCKvq8ni';

const navItems = [
  { label: '회사소개', href: '#company' },
  { label: '대표 인사말', href: '#ceo' },
  { label: '사업영역', href: '#business' },
  { label: '상담문의', href: '#contact' },
  { label: '영업사원 신청', href: '#partner' },
];

const businessCards = [
  {
    icon: ShieldCheck,
    title: '더 좋은 라이프 든든본부',
    label: '생활형 라이프케어 · 상조 · 가족 미래 대비',
    desc: '상조를 위한 상조가 아닌, 미래를 위한 상조. 최신가전, 건강관리, 가족 혜택, 만기환급 구조까지 현재와 미래를 함께 준비하는 생활형 라이프케어 브랜드입니다.',
    points: ['최신가전 혜택', 'KB헬스케어', '만기환급 구조', '가족 미래 대비'],
  },
  {
    icon: Home,
    title: '렌탈맛집',
    label: '가전 · 전자제품 렌탈 비교 상담',
    desc: '고객의 생활환경과 예산에 맞춰 필요한 가전과 전자제품 렌탈을 비교하고, 더 합리적인 선택을 할 수 있도록 안내하는 생활 렌탈 상담 서비스입니다.',
    points: ['가전 렌탈 상담', '전자제품 비교', '고객 맞춤 제안', '생활비 부담 완화'],
  },
];

const inquiryTabs = [
  { key: 'consult', title: '상담문의', icon: Phone, desc: '더 좋은 라이프, 렌탈 상담을 원하시는 고객님' },
  { key: 'general', title: '문의하기', icon: MessageCircle, desc: '상품, 제휴, 기타 문의를 남기고 싶으신 분' },
  { key: 'sales', title: '영업사원 신청하기', icon: UserPlus, desc: 'THE BETTER SALES와 함께 성장하고 싶은 분' },
];

const trustItems = [
  { icon: BadgeCheck, title: '검증된 카테고리 중심', text: '상조와 렌탈을 중심으로 고객에게 실제 필요한 생활 영역부터 시작합니다.' },
  { icon: HeartHandshake, title: '고객 중심 라이프 플래닝', text: '단순 판매가 아닌 고객 상황에 맞는 선택지를 정리하고 제안합니다.' },
  { icon: Users, title: '파트너 성장 구조', text: '영업 파트너가 혼자 뛰는 구조가 아닌 함께 배우고 성장하는 구조를 지향합니다.' },
  { icon: Building2, title: '확장 가능한 기업형 플랫폼', text: '앞으로 다양한 영업 영역을 추가할 수 있는 플랫폼형 구조로 운영합니다.' },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="THE BETTER SALES 홈">
          <span className="brand-mark">T</span>
          <span>
            <strong>THE BETTER SALES</strong>
            <em>Life Planner Group</em>
          </span>
        </a>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-ghost header-call" href={`sms:${PHONE_SMS}`}>문자 상담</a>
          <a className="btn btn-primary" href="#contact">DB 문의 접수</a>
          <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="메뉴 열기">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a href={`sms:${PHONE_SMS}`} onClick={() => setOpen(false)}>문자 상담 {PHONE_DISPLAY}</a>
          <a href={KAKAO_LINK} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>카카오톡 입장</a>
        </div>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title, desc, light = false }) {
  return (
    <div className={`section-title ${light ? 'light' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('consult');
  const currentTab = inquiryTabs.find((item) => item.key === tab);

  return (
    <div id="top" className="page">
      <Header />

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="hero-copy"
            >
              <div className="hero-badge"><Sparkles size={16} /> 공식 라이프 세일즈 플랫폼</div>
              <h1>
                지금까지의 영업과 다른<br />
                <strong>라이프 플래너 그룹</strong>
              </h1>
              <p>
                THE BETTER SALES는 고객의 삶에 필요한 영업영역을 연결하고, 한 분 한 분의 현재와 미래를 함께 설계하는 기업형 라이프 세일즈 플랫폼입니다.
              </p>
              <div className="hero-buttons">
                <a className="btn btn-primary btn-large" href="#contact">상담문의 남기기 <ArrowRight size={18} /></a>
                <a className="btn btn-outline btn-large" href="#partner">영업사원 신청하기</a>
              </div>
              <div className="hero-stats">
                <div><strong>01</strong><span>라이프케어</span></div>
                <div><strong>02</strong><span>렌탈 솔루션</span></div>
                <div><strong>∞</strong><span>사업영역 확장</span></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="hero-card"
            >
              <div className="profile-circle">대표<br />프로필 사진</div>
              <span className="card-kicker">CEO MESSAGE</span>
              <h3>한 분 한 분의 삶에<br />든든한 플래너가 되겠습니다.</h3>
              <p>
                저희는 단순히 상품을 판매하지 않습니다. 고객에게 필요한 생활, 가족, 미래 대비 영역을 함께 고민하고 가장 현실적인 선택을 제안합니다.
              </p>
              <div className="quote-box">
                상조를 위한 상조가 아닌, 미래를 위한 상조.<br />
                더 좋은 라이프 든든본부에서 든든한 라이프 플래너가 되어 드리겠습니다.
              </div>
              <div className="hero-contact-row">
                <a href={`sms:${PHONE_SMS}`}><Phone size={17} /> {PHONE_DISPLAY}</a>
                <a href={KAKAO_LINK} target="_blank" rel="noreferrer"><MessageCircle size={17} /> 카카오톡</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="company" className="section company-section">
          <div className="container">
            <SectionTitle
              eyebrow="ABOUT COMPANY"
              title="고객의 삶에 필요한 선택을 더 나은 방향으로 연결합니다."
              desc="THE BETTER SALES는 더 좋은 라이프 든든본부와 렌탈맛집을 중심으로 시작해, 앞으로 생활에 필요한 다양한 영업영역을 확장하는 라이프 세일즈 플랫폼입니다."
            />
            <div className="trust-grid">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="trust-card" key={item.title}>
                    <div className="icon-box"><Icon size={25} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="ceo" className="section ceo-section">
          <div className="container ceo-grid">
            <div className="ceo-visual">
              <div className="ceo-photo">대표<br />프로필 사진</div>
              <div className="ceo-name-card">
                <span>THE BETTER SALES</span>
                <strong>대표 인사말</strong>
              </div>
            </div>
            <div className="ceo-copy">
              <span className="eyebrow">CEO GREETING</span>
              <h2>저희는 고객 한 분 한 분의 라이프 플래너가 되겠습니다.</h2>
              <p>
                THE BETTER SALES는 단순히 상품을 소개하고 판매하는 회사가 아닙니다. 고객의 현재 생활과 미래 준비에 필요한 영역을 함께 살펴보고, 더 합리적이고 안정적인 선택을 할 수 있도록 돕는 라이프 플래너 그룹입니다.
              </p>
              <p>
                지금까지의 영업이 상품 중심이었다면, 저희는 사람 중심의 영업을 지향합니다. 더 좋은 라이프 든든본부를 통해 가족의 미래를 준비하고, 렌탈맛집을 통해 생활에 필요한 제품을 더 현명하게 선택할 수 있도록 돕겠습니다.
              </p>
              <p>
                앞으로도 THE BETTER SALES는 고객에게는 신뢰받는 선택지를, 함께하는 영업 파트너에게는 성장할 수 있는 기회를 제공하는 기업으로 발전하겠습니다.
              </p>
              <div className="signature">THE BETTER SALES 대표</div>
            </div>
          </div>
        </section>

        <section id="business" className="section business-section">
          <div className="container">
            <SectionTitle
              eyebrow="MAIN CATEGORY"
              title="THE BETTER SALES의 핵심 사업영역"
              desc="현재 운영 중인 2개의 큰 카테고리를 중심으로 고객 상담과 파트너 활동을 연결합니다."
            />
            <div className="business-grid">
              {businessCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="business-card" key={item.title}>
                    <div className="business-top">
                      <div className="business-icon"><Icon size={30} /></div>
                      <span>MAIN</span>
                    </div>
                    <h3>{item.title}</h3>
                    <em>{item.label}</em>
                    <p>{item.desc}</p>
                    <div className="point-list">
                      {item.points.map((point) => (
                        <div key={point}><CheckCircle2 size={17} /> {point}</div>
                      ))}
                    </div>
                    <a className="category-link" href="#contact">상담 문의하기 <ChevronRight size={18} /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container dark-grid">
            <div>
              <SectionTitle
                light
                eyebrow="WHY THE BETTER SALES"
                title="신뢰를 기반으로 고객과 파트너가 함께 성장합니다."
                desc="브랜드 신뢰, 상담 체계, 카테고리 확장성을 바탕으로 상담 문의와 영업 파트너 유입을 동시에 만드는 구조를 지향합니다."
              />
              <div className="dark-actions">
                <a className="btn btn-primary" href={`sms:${PHONE_SMS}`}>문자 상담하기</a>
                <a className="btn btn-light" href={KAKAO_LINK} target="_blank" rel="noreferrer">카카오톡 입장</a>
              </div>
            </div>
            <div className="process-list">
              {['상담 접수', '상황 분석', '맞춤 제안', '가입·계약 진행', '사후 관리'].map((step, index) => (
                <div key={step} className="process-item">
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partner" className="section partner-section">
          <div className="container partner-grid">
            <div>
              <span className="eyebrow">SALES PARTNER</span>
              <h2>영업을 직업이 아닌 성장의 기회로 만들 분을 찾습니다.</h2>
              <p>
                THE BETTER SALES는 더 좋은 라이프 든든본부와 렌탈맛집을 중심으로 고객에게 필요한 라이프 솔루션을 제안합니다. 단순 영업이 아닌 고객의 생활을 설계하는 전문 파트너로 성장할 수 있습니다.
              </p>
              <div className="partner-points">
                {['초보자도 이해할 수 있는 사업 구조 안내', '상담·가입·계약 프로세스 교육', '생활형 라이프케어 중심 영업', '향후 다양한 영업 카테고리 확장 가능'].map((text) => (
                  <div key={text}><Star size={17} /> {text}</div>
                ))}
              </div>
            </div>
            <div className="partner-card">
              <BriefcaseBusiness size={36} />
              <h3>영업사원 신청하기</h3>
              <p>함께 성장할 의지가 있다면 지금 문의를 남겨주세요. 확인 후 순차적으로 안내드립니다.</p>
              <a className="btn btn-primary btn-full" href="#contact">신청 정보 남기기</a>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">CONTACT</span>
              <h2>상담, 문의, 영업사원 신청을 각각 접수합니다.</h2>
              <p>
                아래 카테고리를 선택하고 정보를 남겨주세요. 현재 버튼은 문자 상담과 카카오톡 입장으로 연결되며, 실제 DB 자동 저장은 구글시트·폼 서비스 연동 시 추가 가능합니다.
              </p>
              <div className="quick-contact">
                <a href={`sms:${PHONE_SMS}`}><Phone size={20} /><span>문자 남기기</span><strong>{PHONE_DISPLAY}</strong></a>
                <a href={KAKAO_LINK} target="_blank" rel="noreferrer"><MessageCircle size={20} /><span>카카오톡 입장</span><strong>오픈채팅 바로가기</strong></a>
              </div>
            </div>

            <div className="form-card">
              <div className="tab-row">
                {inquiryTabs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button key={item.key} className={tab === item.key ? 'active' : ''} onClick={() => setTab(item.key)}>
                      <Icon size={18} />
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>
              <div className="selected-info">
                <ClipboardCheck size={24} />
                <div>
                  <strong>{currentTab.title}</strong>
                  <p>{currentTab.desc}</p>
                </div>
              </div>
              <div className="form-grid">
                <input placeholder="성함" />
                <input placeholder="연락처" />
                <input placeholder="거주지역" />
                <select value={tab} onChange={(e) => setTab(e.target.value)}>
                  <option value="consult">상담문의</option>
                  <option value="general">문의하기</option>
                  <option value="sales">영업사원 신청하기</option>
                </select>
                <textarea placeholder="문의 내용을 남겨주세요." />
                <label className="agree"><input type="checkbox" /> 개인정보 수집 및 상담 연락에 동의합니다.</label>
                <a className="btn btn-primary btn-full" href={`sms:${PHONE_SMS}?body=${encodeURIComponent(`[THE BETTER SALES ${currentTab.title}]\n성함:\n연락처:\n거주지역:\n문의내용:`)}`}>
                  문자로 DB 문의 접수하기 <Send size={18} />
                </a>
                <a className="btn btn-kakao btn-full" href={KAKAO_LINK} target="_blank" rel="noreferrer">
                  카카오톡으로 문의하기 <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>THE BETTER SALES</strong>
            <p>Better Life. Better Sales. Better Future.</p>
          </div>
          <div>
            <p>더 좋은 라이프 든든본부 · 렌탈맛집 · 라이프 세일즈 플랫폼</p>
            <p>문자 상담 {PHONE_DISPLAY} · © THE BETTER SALES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
