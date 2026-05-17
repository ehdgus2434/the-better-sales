import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Home, PlusCircle, Phone, MessageCircle, Sparkles, Building2, Users, BriefcaseBusiness, CheckCircle2, LineChart, HeartHandshake, ClipboardCheck, Send } from 'lucide-react';
import './styles.css';

const businessCategories = [
  { title: '더 좋은 라이프 든든본부', subtitle: '생활형 라이프케어 · 상조 · 가족 미래 대비', description: '상조를 위한 상조가 아닌, 미래를 위한 상조. 최신가전, 건강관리, 가족 혜택, 만기환급 구조까지 함께 제안하는 생활형 라이프케어 브랜드입니다.', badge: 'MAIN BUSINESS', icon: ShieldCheck, linkText: '라이프케어 상담 신청' },
  { title: '렌탈맛집', subtitle: '가전 · 전자제품 렌탈 비교 및 상담', description: '고객의 생활환경과 예산에 맞춰 필요한 가전·전자제품 렌탈을 비교하고 제안하는 실속형 생활 렌탈 상담 서비스입니다.', badge: 'RENTAL SERVICE', icon: Home, linkText: '렌탈 상담 신청' },
];

const values = [
  { icon: HeartHandshake, title: 'Life Planner', text: '고객 한 분 한 분의 현재 생활과 미래 준비를 함께 설계합니다.' },
  { icon: Building2, title: 'Multi Business Platform', text: '상조, 렌탈을 시작으로 삶에 필요한 다양한 영업영역을 확장합니다.' },
  { icon: Users, title: 'Sales Partner Growth', text: '함께 성장할 영업 파트너가 안정적으로 활동할 수 있는 구조를 만듭니다.' },
  { icon: LineChart, title: 'Long-term Value', text: '단기 판매가 아닌 신뢰, 소개, 재구매가 이어지는 장기 가치를 지향합니다.' },
];

const process = ['상담 문의 접수', '고객 상황 분석', '맞춤 솔루션 제안', '가입·계약 진행', '사후 관리 및 추가 혜택 안내'];
const futureCategories = ['자동차 제휴 영업', '보험/재무 상담', '부동산/숙박 사업', '기업 제휴 상품', '헬스케어 서비스', '생활복지 멤버십'];

function App() {
  const [formType, setFormType] = useState('상담문의');
  return <div className="site">
    <header className="header"><div className="container nav"><div><div className="logo">THE BETTER SALES</div><div className="tagline">Better Life. Better Sales. Better Future.</div></div><nav><a href="#about">회사소개</a><a href="#business">사업영역</a><a href="#recruit">영업파트너</a><a href="#contact">상담·채용문의</a></nav><a className="btn dark" href="#contact">문의하기</a></div></header>

    <section className="hero"><div className="heroBg" /><div className="container heroGrid">
      <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <div className="pill"><Sparkles size={16}/> 공식 라이프 세일즈 플랫폼</div>
        <h1>지금까지의 영업과 다른<br/><span>라이프 플래너 그룹</span></h1>
        <p className="heroText">THE BETTER SALES는 고객의 삶에 필요한 영업영역을 연결하고, 한 분 한 분의 현재와 미래를 함께 설계하는 생활형 세일즈 플랫폼입니다.</p>
        <div className="heroActions"><a className="btn gold" href="#contact">상담 문의 남기기 <ArrowRight size={18}/></a><a className="btn outline" href="#recruit">영업사원 신청하기</a></div>
        <div className="stats"><div><b>01</b><small>라이프케어</small></div><div><b>02</b><small>렌탈 솔루션</small></div><div><b>∞</b><small>영역 확장</small></div></div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.15}} className="ceoCard">
        <div className="profileBox">대표 프로필<br/>사진 영역</div><div className="eyebrow">CEO MESSAGE</div><h2>한 분 한 분의 삶에<br/>든든한 플래너가 되겠습니다.</h2>
        <p>저희는 단순히 상품을 판매하지 않습니다. 고객에게 필요한 생활, 가족, 미래 대비 영역을 함께 고민하고 가장 현실적인 선택을 제안합니다. THE BETTER SALES는 신뢰를 기반으로 오래 함께하는 라이프 파트너가 되겠습니다.</p>
        <div className="quote">“상조를 위한 상조가 아닌, 미래를 위한 상조. 더 좋은 라이프 든든본부에서 든든한 라이프 플래너가 되어 드리겠습니다.”</div>
      </motion.div>
    </div></section>

    <section id="about" className="section"><div className="container"><div className="split"><div><div className="label">ABOUT THE BETTER SALES</div><h2>고객의 인생에 필요한<br/>영업을 설계합니다.</h2></div><p>THE BETTER SALES는 상조, 렌탈, 생활복지, 미래 대비 등 삶에 필요한 영역을 하나의 플랫폼으로 연결합니다. 우리는 고객에게는 더 나은 선택을, 영업 파트너에게는 더 나은 성장의 기회를 제공합니다.</p></div><div className="valueGrid">{values.map(v=>{const Icon=v.icon;return <div className="card" key={v.title}><div className="icon"><Icon size={24}/></div><h3>{v.title}</h3><p>{v.text}</p></div>})}</div></div></section>

    <section id="business" className="section muted"><div className="container"><div className="label">BUSINESS AREA</div><h2>메인 사업영역</h2><p className="lead">현재는 더 좋은 라이프 든든본부와 렌탈맛집을 중심으로 운영하며, 향후 새로운 영업 카테고리를 지속적으로 추가할 수 있는 확장형 구조입니다.</p><div className="bizGrid">{businessCategories.map(item=>{const Icon=item.icon;return <div className="bizCard" key={item.title}><div className="bizTop"><div className="icon"><Icon size={30}/></div><span>{item.badge}</span></div><h3>{item.title}</h3><strong>{item.subtitle}</strong><p>{item.description}</p><a href="#contact" className="btn dark">{item.linkText} <ArrowRight size={17}/></a></div>})}</div></div></section>

    <section className="section"><div className="container processBox"><div><div className="label goldText">CUSTOMER PROCESS</div><h2>상담부터 사후관리까지<br/>체계적으로 진행합니다.</h2><p>고객이 불안하지 않도록 처음 문의부터 가입, 계약, 사후 안내까지 명확한 프로세스로 관리합니다.</p></div><div>{process.map((step,i)=><div className="step" key={step}><b>{i+1}</b><span>{step}</span></div>)}</div></div></section>

    <section id="recruit" className="section muted"><div className="container recruitGrid"><div><div className="label">SALES PARTNER</div><h2>함께 성장할<br/>영업 파트너를 기다립니다.</h2><p>THE BETTER SALES는 영업을 단순한 판매가 아닌, 고객의 삶을 설계하는 전문 영역으로 봅니다. 고객에게 필요한 솔루션을 제안하고, 함께 성장할 분을 찾습니다.</p><div className="checks">{['초보자도 이해할 수 있는 사업 구조 안내','상담·가입·계약 프로세스 교육','더 좋은 라이프 든든본부 중심의 생활형 라이프케어 영업','향후 다양한 영업 카테고리 확장 기회'].map(x=><div key={x}><CheckCircle2 size={20}/><span>{x}</span></div>)}</div><a href="#contact" className="btn dark large">영업사원 신청하기 <ArrowRight size={18}/></a></div><div className="card big"><div className="icon"><BriefcaseBusiness size={28}/></div><h3>앞으로 추가될 영업영역</h3><p>하나의 회사 안에서 다양한 영업 카테고리를 확장할 수 있도록 설계된 구조입니다.</p><div className="futureGrid">{futureCategories.map(c=><div key={c}><PlusCircle size={19}/>{c}</div>)}</div></div></div></section>

    <section id="contact" className="section"><div className="container contactGrid"><div><div className="label">CONTACT & DB FORM</div><h2>상담문의와 채용문의를<br/>한 곳에서 접수합니다.</h2><p>더 좋은 라이프 든든본부 가입 상담, 렌탈 상담, 영업사원 신청, 제휴 문의까지 목적에 맞게 정보를 남길 수 있습니다.</p><div className="contactCards"><div><Phone/><b>전화 상담</b><small>빠른 상담 연결 영역</small></div><div><MessageCircle/><b>카카오 상담</b><small>카카오 채널 연결 영역</small></div></div></div><form className="form" onSubmit={e=>e.preventDefault()}><div className="formTitle"><div className="icon"><ClipboardCheck size={24}/></div><div><h3>문의 정보 남기기</h3><p>실제 홈페이지에서는 Formspree, Google Form, Supabase 등으로 DB 수집 연결 가능합니다.</p></div></div><div className="tabs">{['상담문의','채용문의','영업사원 신청','제휴문의'].map(t=><button type="button" className={formType===t?'active':''} onClick={()=>setFormType(t)} key={t}>{t}</button>)}</div><div className="formGrid"><input placeholder="성함"/><input placeholder="연락처"/><input placeholder="거주지역"/><select value={formType} onChange={e=>setFormType(e.target.value)}><option>상담문의</option><option>채용문의</option><option>영업사원 신청</option><option>제휴문의</option></select></div><textarea placeholder="문의 내용을 남겨주세요."/><label className="agree"><input type="checkbox"/> 개인정보 수집 및 상담 연락에 동의합니다.</label><button className="btn dark submit">DB 문의 접수하기 <Send size={18}/></button></form></div></section>

    <footer><div className="container footer"><div><div className="logo">THE BETTER SALES</div><div className="tagline">Better Life. Better Sales. Better Future.</div></div><p>더 좋은 라이프 든든본부 · 렌탈맛집 · 영업 파트너 플랫폼<br/>© THE BETTER SALES. All rights reserved.</p></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
