import { useState } from "react";
import photo from "./assets/shira.jpg";

const PHOTO = photo;

// ─────────────────────────────────────────────
// LIMINAL TOKENS
// ─────────────────────────────────────────────
const t = {
  void:"#1D1A2F", dusk:"#3D3560", duskMid:"#2A2548",
  seaGlass:"#7B9E9E", lilac:"#C4B8D8", lemon:"#F2E05A", lemonDark:"#D4C030",
  moonlight:"#F7F4FB", white:"#FFFFFF",
  textOnDark:"#E8E4F0", textOnDarkMid:"#A89EC0", textOnDarkMute:"#9489B0",
  borderDark:"rgba(196,184,216,0.1)", borderDarkEm:"rgba(196,184,216,0.2)",
};
const fonts = {
  display:"'DM Serif Display', Georgia, serif",
  body:"'Inter', -apple-system, sans-serif",
};

// ─────────────────────────────────────────────
// GLOBAL STYLES
// ─────────────────────────────────────────────
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body{font-family:${fonts.body};background:#1A172C;background:radial-gradient(1100px 620px at 50% -8%, #2E2856 0%, #221D3B 44%, #1A172C 100%);background-attachment:fixed;color:${t.textOnDark};-webkit-font-smoothing:antialiased;}
    ::selection{background:${t.dusk};color:${t.lilac};}

    .disp-xl{font-family:${fonts.display};font-size:clamp(40px,6vw,76px);line-height:1.06;letter-spacing:-0.02em;}
    .disp-lg{font-family:${fonts.display};font-size:clamp(30px,4vw,54px);line-height:1.1;letter-spacing:-0.02em;}
    .disp-md{font-family:${fonts.display};font-size:clamp(22px,3vw,36px);line-height:1.2;letter-spacing:-0.015em;}
    .disp-sm{font-family:${fonts.display};font-size:clamp(18px,2.5vw,26px);line-height:1.3;}
    .eyebrow{font-family:${fonts.body};font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:${t.seaGlass};}
    .body-lg{font-family:${fonts.body};font-size:18px;line-height:1.78;color:${t.textOnDarkMid};}
    .body-md{font-family:${fonts.body};font-size:16px;line-height:1.75;color:${t.textOnDarkMid};}
    .body-sm{font-family:${fonts.body};font-size:14px;line-height:1.65;color:${t.textOnDarkMute};}

    .wrap{max-width:1080px;margin:0 auto;padding:0 28px;}
    .wrap-narrow{max-width:700px;margin:0 auto;padding:0 28px;}

    nav{position:sticky;top:0;z-index:100;background:rgba(29,26,47,0.92);backdrop-filter:blur(14px);border-bottom:1px solid ${t.borderDark};}
    .nav-inner{display:flex;align-items:center;justify-content:space-between;height:64px;}
    .nav-links{display:flex;align-items:center;gap:28px;}
    .nav-link{font-family:${fonts.body};font-size:14px;font-weight:500;color:${t.textOnDarkMid};cursor:pointer;transition:color 150ms;white-space:nowrap;}
    .nav-link:hover{color:${t.textOnDark};}
    .nav-link.active{color:${t.lilac};}

    .btn-spark{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;background:linear-gradient(135deg,#F7E96B,#F4C544);color:#221E12;font-family:${fonts.body};font-size:15px;font-weight:700;border-radius:8px;border:none;cursor:pointer;transition:transform 120ms,box-shadow 160ms,filter 160ms;white-space:nowrap;box-shadow:0 10px 28px -8px rgba(242,224,90,0.55), inset 0 1px 0 rgba(255,255,255,0.45);}
    .btn-spark:hover{transform:translateY(-2px);filter:brightness(1.05);box-shadow:0 16px 36px -8px rgba(242,224,90,0.72), inset 0 1px 0 rgba(255,255,255,0.45);}
    .btn-outline{display:inline-flex;align-items:center;gap:8px;padding:12px 25px;background:transparent;color:${t.lilac};font-family:${fonts.body};font-size:15px;font-weight:600;border-radius:6px;border:1.5px solid ${t.lilac}44;cursor:pointer;transition:border-color 150ms,background 150ms;white-space:nowrap;}
    .btn-outline:hover{border-color:${t.lilac};background:rgba(196,184,216,0.06);}
    .btn-ghost{display:inline-flex;align-items:center;gap:6px;background:transparent;color:${t.lilac};font-family:${fonts.body};font-size:15px;font-weight:600;border:none;cursor:pointer;padding:0;transition:gap 150ms;}
    .btn-ghost:hover{gap:10px;}

    .card-dark{background:linear-gradient(155deg,#473F74,#332C54);border:1px solid rgba(196,184,216,0.14);border-top-color:rgba(196,184,216,0.24);border-radius:16px;padding:32px;box-shadow:0 18px 50px -20px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.05);}
    .card-mid{background:linear-gradient(155deg,#332C56,#262143);border:1px solid rgba(196,184,216,0.12);border-top-color:rgba(196,184,216,0.2);border-radius:16px;padding:32px;box-shadow:0 14px 40px -18px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04);}

    .glow-violet{position:absolute;border-radius:50%;background:${t.dusk};filter:blur(80px);pointer-events:none;}
    .glow-sea{position:absolute;border-radius:50%;background:${t.seaGlass};filter:blur(80px);pointer-events:none;}
    .glow-lemon{position:absolute;border-radius:50%;background:${t.lemon};filter:blur(60px);pointer-events:none;}

    .l-rule-sea{border-left:2px solid ${t.seaGlass}44;padding-left:20px;}
    .dot-list{display:flex;flex-direction:column;gap:10px;}
    .dot-item{display:flex;gap:10px;align-items:flex-start;}
    .dot{width:5px;height:5px;border-radius:50%;background:${t.seaGlass};margin-top:9px;flex-shrink:0;}
    .dot-lemon{width:5px;height:5px;border-radius:50%;background:${t.lemon};margin-top:9px;flex-shrink:0;}

    .sale-bar{background:linear-gradient(90deg,${t.duskMid},${t.dusk},${t.duskMid});border-bottom:1px solid ${t.borderDarkEm};text-align:center;padding:10px 24px;}

    .form-group{display:flex;flex-direction:column;gap:7px;}
    label{font-family:${fonts.body};font-size:13px;font-weight:600;color:${t.textOnDarkMid};}
    input,textarea,select{font-family:${fonts.body};font-size:15px;color:${t.textOnDark};background:${t.duskMid};border:1px solid ${t.borderDarkEm};border-radius:7px;padding:12px 16px;width:100%;outline:none;transition:border-color 150ms;}
    input:focus,textarea:focus,select:focus{border-color:${t.lilac};}
    textarea{resize:vertical;line-height:1.65;}
    select option{background:${t.dusk};color:${t.textOnDark};}
    .checkbox-row{display:flex;align-items:center;gap:9px;}
    .checkbox-row input{width:auto;}

    .price-strike{font-family:${fonts.body};font-size:15px;color:${t.textOnDarkMute};text-decoration:line-through;}

    .cred-chip{font-family:${fonts.body};font-size:12.5px;font-weight:600;color:#D8CFEE;background:linear-gradient(135deg,rgba(196,184,216,0.16),rgba(123,158,158,0.10));border:1px solid rgba(196,184,216,0.24);border-radius:100px;padding:7px 15px;white-space:nowrap;box-shadow:inset 0 1px 0 rgba(255,255,255,0.06);transition:transform 150ms,border-color 150ms;}
    .cred-chip:hover{transform:translateY(-1px);border-color:rgba(242,224,90,0.5);color:#F2E05A;}
    .social-row{display:flex;gap:14px;align-items:center;}
    .social-link{display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:9px;border:1px solid ${t.borderDarkEm};background:${t.duskMid};color:${t.textOnDarkMid};transition:all 150ms;cursor:pointer;}
    .social-link:hover{color:${t.lemon};border-color:${t.lemon}66;transform:translateY(-1px);}

    @media(max-width:768px){
      .hide-m{display:none!important;}
      .stack{grid-template-columns:1fr!important;gap:40px!important;}
      .nav-cta{display:none!important;}
    }
    footer{border-top:1px solid ${t.borderDark};padding:52px 0 36px;}
    .lemon-italic{font-style:italic;background:linear-gradient(110deg,#FFE96A 8%,#FFB347 92%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:#F2E05A;}
    .lilac-italic{font-style:italic;background:linear-gradient(110deg,#E6DCF6 8%,#A99BD2 92%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:#C4B8D8;}
  `}</style>
);

// ─────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────
const IconLinkedIn = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>);
const IconInstagram = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>);
const IconSubstack = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h18v2.5H3V4zm0 5.2h18V22l-9-4.6L3 22V9.2z"/></svg>);
const IconGlobe = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>);

const SOCIALS = [
  { icon:<IconLinkedIn/>, url:"https://www.linkedin.com/in/shirakates/", label:"LinkedIn" },
  { icon:<IconInstagram/>, url:"https://www.instagram.com/shirakatescoaching/", label:"Instagram" },
  { icon:<IconSubstack/>, url:"https://substack.com/@shirakates", label:"Substack" },
  { icon:<IconGlobe/>, url:"https://shirakates.com", label:"Portfolio" },
];

const SocialRow = () => (
  <div className="social-row">
    {SOCIALS.map((s,i) => (
      <a key={i} className="social-link" href={s.url} target="_blank" rel="noopener noreferrer" title={s.label} aria-label={s.label}>{s.icon}</a>
    ))}
  </div>
);

// ─────────────────────────────────────────────
// ATOMS
// ─────────────────────────────────────────────
const Wordmark = ({ onClick }) => (
  <div onClick={onClick} style={{ cursor:"pointer", lineHeight:1 }}>
    <div style={{ fontFamily:fonts.display, fontSize:21, color:t.textOnDark, letterSpacing:"-0.01em" }}>Shira Kates</div>
    <div style={{ fontFamily:fonts.body, fontSize:9, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:t.seaGlass, marginTop:3 }}>Coaching</div>
  </div>
);
const DotItem = ({ children }) => (
  <div className="dot-item"><div className="dot" /><span style={{ fontFamily:fonts.body, fontSize:15, color:t.textOnDarkMid, lineHeight:1.65 }}>{children}</span></div>
);
const Eyebrow = ({ children }) => <p className="eyebrow" style={{ marginBottom:18 }}>{children}</p>;

const Nav = ({ page, setPage }) => (
  <nav><div className="wrap"><div className="nav-inner">
    <Wordmark onClick={() => setPage("Home")} />
    <div className="nav-links">
      {["About","Work With Me","Contact"].map(l => (
        <span key={l} className={`nav-link${page===l?" active":""}`} onClick={() => setPage(l)}>{l}</span>
      ))}
      <button className="btn-spark nav-cta" style={{ padding:"9px 18px", fontSize:13 }} onClick={() => setPage("Contact")}>Book an Exploration Call</button>
    </div>
  </div></div></nav>
);

const SaleBanner = () => (
  <div className="sale-bar">
    <span style={{ fontFamily:fonts.body, fontSize:13, fontWeight:600, color:t.lemon }}>Summer pricing through Labor Day, September 1</span>
    <span style={{ fontFamily:fonts.body, fontSize:13, color:t.textOnDarkMute, marginLeft:10 }}>· Save up to 20% on all engagements</span>
  </div>
);

const Footer = ({ setPage }) => (
  <footer><div className="wrap">
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:32 }}>
      <div>
        <Wordmark onClick={() => setPage("Home")} />
        <div style={{ marginTop:18 }}><SocialRow /></div>
      </div>
      <div style={{ display:"flex", gap:32 }}>
        {["About","Work With Me","Contact"].map(l => (
          <span key={l} className="nav-link" onClick={() => setPage(l)} style={{ fontSize:14 }}>{l}</span>
        ))}
      </div>
    </div>
    <div style={{ borderTop:`1px solid ${t.borderDark}`, marginTop:36, paddingTop:24 }}>
      <p className="body-sm" style={{ fontSize:12 }}>© 2026 Shira Kates Coaching. All rights reserved.</p>
    </div>
  </div></footer>
);

// ─────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────
const Home = ({ setPage }) => (
  <main>
    <section style={{ padding:"112px 0 88px", position:"relative", overflow:"hidden" }}>
      <div className="glow-violet" style={{ width:560, height:560, right:-110, top:-120, opacity:0.38 }} />
      <div className="glow-lemon" style={{ width:200, height:200, left:"30%", bottom:-60, opacity:0.06 }} />
      <div className="wrap-narrow" style={{ position:"relative", zIndex:1 }}>
        <Eyebrow>Executive Coach · Mentor · Life Architect</Eyebrow>
        <h1 className="disp-xl" style={{ color:t.textOnDark }}>
          Achievement got you here.
          <br /><span className="lemon-italic">Alchemy gets you there.</span>
        </h1>
        <p className="body-lg" style={{ marginTop:28, maxWidth:580 }}>
          Executives. Entrepreneurs. Badasses in transition. When you're sick of the hamster wheel and ready for a life that beams? Let's play.
        </p>
        <div style={{ marginTop:44, display:"flex", gap:14, flexWrap:"wrap", alignItems:"center" }}>
          <button className="btn-spark" onClick={() => setPage("Contact")}>Book a free Exploration Call</button>
          <button className="btn-ghost" onClick={() => setPage("Work With Me")}>See how we'd work together →</button>
        </div>
      </div>
    </section>

    <div style={{ borderTop:`1px solid ${t.borderDark}`, borderBottom:`1px solid ${t.borderDark}`, padding:"24px 0" }}>
      <div className="wrap">
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px" }}>
          {["Hudson Institute Certified Coach","ICF Core Competencies","Former Google Platform Leader","20+ Years Building & Leading","Reiki Master-level Certified","Improv Trained","MBA","Entrepreneur"].map((item,i) => (
            <span key={i} className="cred-chip">{item}</span>
          ))}
        </div>
      </div>
    </div>

    <section style={{ padding:"96px 0", position:"relative", overflow:"hidden" }}>
      <div className="glow-violet" style={{ width:440, height:440, left:-130, top:"18%", opacity:0.2 }} />
      <div className="wrap" style={{ position:"relative", zIndex:1 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80 }} className="stack">
          <div>
            <Eyebrow>Ready for something big?</Eyebrow>
            <h2 className="disp-md" style={{ color:t.textOnDark }}>
              Your career is one slice.<br />
              <span className="lilac-italic">We're baking the whole pie.</span>
            </h2>
            <p className="body-md" style={{ marginTop:24 }}>
              Most "executive" coaching stops at the job title, the promotion, the pivot. That's not enough. Not even close.
            </p>
            <p className="body-md" style={{ marginTop:16 }}>
              The work we do together touches all of it: how you show up everywhere it matters. How you negotiate at work and how you navigate hard conversations with the people you love. What you say and what you don't. What you're building professionally and what you deeply want for your life.
            </p>
            <p className="body-md" style={{ marginTop:16 }}>
              We'll create a vision together: something real, and just for you. Then we'll point your compass at it and start turning the ordinary into gold, at whatever pace your life allows.
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
            {[
              { area:"Career & Leadership", desc:"Transitions, new levels, difficult dynamics, bold asks, getting the recognition you've earned." },
              { area:"Relationships & Communication", desc:"Hard conversations, boundaries, building trust at work, at home, and everywhere in between." },
              { area:"Identity & Reinvention", desc:"Who you're becoming. What you want to let go of. Wellness and vitality are cultivated." },
              { area:"Life Design", desc:"The vision. The plan. The daily practice of living into both, with joy, not just discipline." },
            ].map((item,i) => (
              <div key={i} style={{
                padding:"22px 26px",
                background: i % 2 === 0 ? t.duskMid : t.dusk,
                border:`1px solid ${t.borderDark}`,
                borderRadius: i===0 ? "12px 12px 0 0" : i===3 ? "0 0 12px 12px" : 0,
                borderBottom: i<3 ? "none" : `1px solid ${t.borderDark}`,
              }}>
                <div style={{ fontFamily:fonts.display, fontSize:19, color:t.lilac, marginBottom:6 }}>{item.area}</div>
                <p className="body-sm" style={{ color:t.textOnDarkMid, fontSize:14 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section style={{ borderTop:`1px solid ${t.borderDark}`, padding:"96px 0" }}>
      <div className="wrap">
        <div style={{ display:"grid", gridTemplateColumns:"280px 1fr", gap:80 }} className="stack">
          <div>
            <Eyebrow>How I work</Eyebrow>
            <h2 className="disp-sm" style={{ color:t.textOnDark }}>Coaching and mentorship. I know when to use each.</h2>
            <button className="btn-ghost" style={{ marginTop:28 }} onClick={() => setPage("About")}>About me →</button>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:32 }}>
            {[
              { h:"I lead from behind when you need to find your own answer.", b:"True coaching is about helping you access what you already know. I'll ask the question that opens the door, not kick it down for you. The answers you find yourself are the ones you'll actually act on." },
              { h:"I steer more directly when you need a thinking partner who's been there.", b:"I've navigated startups, big corporate, consulting, and entrepreneurship. When mentorship is what the moment calls for, I'll say so, and I'll bring everything I've learned to the table." },
              { h:"I hold you accountable to action, not just insight.", b:"Clarity without movement is just a nice conversation. We'll define what doing the work actually looks like, whether that's baby steps or leaps, and I'll hold you to it." },
              { h:"You'll learn things about yourself even if you've done the work.", b:"Growth isn't a destination. The self-aware person has more to discover, not less. \u201CDoing the work\u201D is a lifetime endeavor, and maybe that's the whole point." },
            ].map((item,i) => (
              <div key={i} className="l-rule-sea">
                <div style={{ fontFamily:fonts.display, fontSize:19, color:t.textOnDark, marginBottom:8 }}>{item.h}</div>
                <p className="body-md" style={{ fontSize:15 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section style={{ padding:"88px 0", position:"relative", overflow:"hidden" }}>
      <div className="glow-sea" style={{ width:400, height:400, left:-100, top:"50%", transform:"translateY(-50%)", opacity:0.08 }} />
      <div className="glow-violet" style={{ width:400, height:400, right:-80, top:"50%", transform:"translateY(-50%)", opacity:0.2 }} />
      <div className="wrap-narrow" style={{ textAlign:"center", position:"relative", zIndex:1 }}>
        <Eyebrow>The first step</Eyebrow>
        <h2 className="disp-md" style={{ color:t.textOnDark }}>
          Let's have a real conversation.<br />
          <span className="lemon-italic">Try it on and check the fit.</span>
        </h2>
        <p className="body-lg" style={{ marginTop:20, maxWidth:480, margin:"20px auto 0" }}>
          A free 30-minute Exploration Call. No pitch, no pressure. We figure it out together.
        </p>
        <button className="btn-spark" style={{ marginTop:44 }} onClick={() => setPage("Contact")}>Book your Exploration Call</button>
        <p style={{ marginTop:16, fontFamily:fonts.body, fontSize:13, fontWeight:600, letterSpacing:"0.04em", color:t.lilac }}><span style={{ color:t.lemon }}>Free</span> · 30 minutes · Video</p>
      </div>
    </section>
  </main>
);

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
const About = ({ setPage }) => (
  <main>
    <section style={{ padding:"104px 0 72px", position:"relative", overflow:"hidden" }}>
      <div className="glow-violet" style={{ width:600, height:400, right:-150, top:-100, opacity:0.2 }} />
      <div className="wrap" style={{ position:"relative", zIndex:1 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 440px", gap:64, alignItems:"center" }} className="stack">
          <div>
            <Eyebrow>About Shira</Eyebrow>
            <h1 className="disp-lg" style={{ color:t.textOnDark }}>
              I'm a learner, a builder<br />
              <span className="lilac-italic">and a healer.</span>
            </h1>
            <p className="body-lg" style={{ marginTop:24 }}>
              I've spent my life collecting experiences that have no business belonging to the same person, and it turns out that's my superpower as a coach. (And no: healing doesn't mean woo-woo. We're going to work for it, together.)
            </p>
            <div style={{ marginTop:28 }}><SocialRow /></div>
          </div>
          {/* PHOTO */}
          <div style={{ position:"relative" }}>
            <div className="glow-violet" style={{ width:300, height:300, right:-40, top:-30, opacity:0.3 }} />
            <div className="glow-sea" style={{ width:200, height:200, left:-30, bottom:-30, opacity:0.12 }} />
            <img src={PHOTO} alt="Shira Kates" style={{ position:"relative", zIndex:1, width:"100%", borderRadius:18, border:`1px solid ${t.borderDarkEm}`, display:"block", boxShadow:"0 32px 70px -25px rgba(0,0,0,0.72)" }} />
          </div>
        </div>
      </div>
    </section>

    <section style={{ borderTop:`1px solid ${t.borderDark}`, padding:"80px 0" }}>
      <div className="wrap">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72 }} className="stack">
          <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
            <p className="body-lg">
              My career has spanned tech platform and AI strategy, research, UX, content design, product management, and senior leadership in a trillion dollar company and scrappy startups alike, including several years leading highly visible initiatives where I inherited struggling teams and turned them around.
            </p>
            <p className="body-md">
              Outside of work, I've navigated the full texture of adult life: caretaking for a parent and raising a daughter, health changes, marriage and divorce, dating again, investing, being a landlord, personal loss and personal reinvention. I've travelled extensively, US and abroad.
            </p>
            <p className="body-md">
              I tell you this not to impress you, but because this is what I bring to our work. When you're sitting across from me with something complicated, whether professional, personal, or both, I'm not consulting a framework. I'm drawing on a life that has actually been lived.
            </p>
            <p className="body-md">
              I earned my coaching certification through the Hudson Institute, one of the world's most rigorous and respected executive coaching programs, and I'm skilled across all ICF core competencies. I'm also a certified Reiki master and improv-trained, which sounds like an odd pairing until you've experienced how both teach you to stay open and unbiased, listen, follow, and trust what emerges.
            </p>
            <p className="body-md">
              I'm an avid reader, a foodie, a fitness devotee, a language learner, and deeply immersed in AI. I'm always in at least two learning projects at once. I'm a lot, and I embrace it.
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <div className="card-dark" style={{ position:"relative", overflow:"hidden" }}>
              <div className="glow-violet" style={{ width:200, height:200, right:-60, bottom:-60, opacity:0.2 }} />
              <p style={{ fontFamily:fonts.body, fontSize:11, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:t.seaGlass, marginBottom:18, position:"relative", zIndex:1 }}>Experience across</p>
              <div className="dot-list" style={{ position:"relative", zIndex:1 }}>
                {["Startups & hypergrowth companies","Big corporate & platform leadership","Consulting & independent work","Entrepreneurship","Caretaking & family navigation","Health & body transitions","Marriage, parenting, divorce, dating","Investing & financial decisions","Travel & Moves"].map((c,i) => <DotItem key={i}>{c}</DotItem>)}
              </div>
            </div>
            <div className="card-mid">
              <p style={{ fontFamily:fonts.body, fontSize:11, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:t.seaGlass, marginBottom:18 }}>Training & credentials</p>
              <div className="dot-list">
                {["Hudson Institute Certified Coach","ICF Core Competency Framework","MBA","Reiki Master Certification","Improv training","Vipassana & transcendental meditation","Marathon finisher 2006 (never again)","Yoga practitioner since 1992"].map((c,i) => <DotItem key={i}>{c}</DotItem>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style={{ borderTop:`1px solid ${t.borderDark}`, padding:"88px 0" }}>
      <div className="wrap-narrow">
        <Eyebrow>What I believe</Eyebrow>
        <div style={{ display:"flex", flexDirection:"column", gap:40 }}>
          {[
            { title:"The work is never done.", body:"And that's the good news. Every time you think you've figured yourself out, life offers a new invitation to go deeper. I've seen this in my clients and in myself. The people who embrace this are just more alive." },
            { title:"You already know what you need.", body:"My job isn't to hand you answers. It's to ask the question that helps you access what you already know and trust it enough to act. That said, when mentorship is what the moment calls for, I'll say so and bring everything I've got." },
            { title:"An exceptional life is designed, no coasting.", body:"The people I work with don't want to drift. They want to build something they've actually chosen: a career, a relationship, a sense of self. That takes vision, courage, and someone who'll hold the thread with you." },
            { title:"Your whole life is the context.", body:"You can't build a sustainable career while your personal life is on fire, and you can't be truly present at home when your work feels like it's swallowing you. We'll venture into the dark corners with a loving light." },
            { title:"Connection to something bigger.", body:"Whether that's community, meaning, spirituality, global citizenship, or simply being present in your body, it's not a someday thing. It's intrinsic to finding your joy. We'll make space for it." },
          ].map((item,i) => (
            <div key={i} style={{ display:"grid", gridTemplateColumns:"230px 1fr", gap:40 }} className="stack">
              <div style={{ fontFamily:fonts.display, fontSize:19, color:t.lilac, paddingTop:2 }}>{item.title}</div>
              <p className="body-md">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ borderTop:`1px solid ${t.borderDark}`, padding:"72px 0" }}>
      <div className="wrap-narrow" style={{ textAlign:"center" }}>
        <h2 className="disp-sm" style={{ color:t.textOnDark }}>Ready to see if we're a fit?</h2>
        <p className="body-lg" style={{ marginTop:14, maxWidth:420, margin:"14px auto 0" }}>An Exploration Call is free, 30 minutes, and genuinely just a conversation.</p>
        <button className="btn-spark" style={{ marginTop:36 }} onClick={() => setPage("Contact")}>Book an Exploration Call</button>
      </div>
    </section>
  </main>
);

// ─────────────────────────────────────────────
// WORK WITH ME
// ─────────────────────────────────────────────
const Work = ({ setPage }) => {
  const offers = [
    { name:"Clarity Session", tag:"Start here", duration:"Single session · 60 min", regular:"$425", sale:"$335", per:"one-time",
      desc:"One focused hour to clarify what's actually in the way in your career, your life, or both. You'll leave with a clearer frame on the challenge, a perspective shift, and your next steps. No prep required.",
      includes:["60-minute video session","Named challenge and reframed perspective","Concrete next step, tailored to you","No ongoing commitment"],
      cta:"Book a Clarity Session", primary:true },
    { name:"Sprint", tag:"Most focused", duration:"3 months · 6 sessions", regular:"$3,000", sale:"$2,400", per:"full engagement",
      desc:"Three months of concentrated coaching for a defined challenge or transition. You've named what you're working on and you're ready to move. We build momentum and go deep. Make meaningful progress.",
      includes:["6 bi-weekly sessions (60 min each)","Defined focus area and success markers","Between-session reflection prompts","Chat support between sessions"],
      cta:"Apply for a Sprint", primary:false },
    { name:"Partnership", tag:"Deepest work", duration:"6 months · 12 sessions", regular:"$5,100", sale:"$4,100", per:"full engagement",
      desc:"Six months of sustained whole-life coaching. We go end-to-end: diagnosis, exploration, challenge, integration. This is for leaders and humans navigating complex challenges, and committed to shedding what holds you back. Warning: Your life may become unrecognizable. In the best way.",
      includes:["12 bi-weekly sessions (60 min each)","Full arc from vision to integration","On-demand chat support between sessions","End-of-engagement review and forward plan"],
      cta:"Apply for a Partnership", primary:true },
  ];
  return (
    <main>
      <SaleBanner />
      <section style={{ padding:"96px 0 72px", position:"relative", overflow:"hidden" }}>
        <div className="glow-violet" style={{ width:500, height:400, right:-120, top:-80, opacity:0.22 }} />
        <div className="wrap-narrow" style={{ position:"relative", zIndex:1 }}>
          <Eyebrow>Work with me</Eyebrow>
          <h1 className="disp-lg" style={{ color:t.textOnDark }}>
            Three ways in.<br /><span className="lemon-italic">One place we're headed.</span>
          </h1>
          <p className="body-lg" style={{ marginTop:22, maxWidth:540 }}>
            Every engagement starts with an Exploration Call: free, 30 minutes, no pressure. We figure out the right path together.
          </p>
          <button className="btn-outline" style={{ marginTop:30 }} onClick={() => setPage("Contact")}>Book a free Exploration Call first</button>
        </div>
      </section>

      <section style={{ paddingBottom:80 }}>
        <div className="wrap">
          <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
            {offers.map((offer,i) => (
              <div key={i} style={{
                background: i===2 ? t.dusk : i===0 ? t.duskMid : t.void,
                border:`1px solid ${t.borderDarkEm}`,
                borderRadius: i===0 ? "14px 14px 0 0" : i===2 ? "0 0 14px 14px" : 0,
                borderBottom: i<2 ? "none" : `1px solid ${t.borderDarkEm}`,
                padding:"44px 40px", position:"relative", overflow:"hidden",
              }}>
                {i===2 && <div className="glow-violet" style={{ width:300, height:300, right:-60, top:-60, opacity:0.2 }} />}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 190px", gap:48 }} className="stack">
                  <div style={{ position:"relative", zIndex:1 }}>
                    <div style={{ display:"flex", gap:12, alignItems:"center", marginBottom:16, flexWrap:"wrap" }}>
                      <span style={{ display:"inline-block", padding:"3px 12px", background:`${t.lemon}18`, border:`1px solid ${t.lemon}44`, borderRadius:100, fontFamily:fonts.body, fontSize:11, fontWeight:700, color:t.lemon, letterSpacing:"0.07em", textTransform:"uppercase" }}>{offer.tag}</span>
                      <span className="body-sm" style={{ fontSize:13 }}>{offer.duration}</span>
                    </div>
                    <h2 className="disp-sm" style={{ color:t.textOnDark }}>{offer.name}</h2>
                    <p className="body-md" style={{ marginTop:14, maxWidth:480 }}>{offer.desc}</p>
                    <div className="dot-list" style={{ marginTop:22 }}>
                      {offer.includes.map((inc,j) => (
                        <div key={j} className="dot-item"><div className="dot" /><span style={{ fontFamily:fonts.body, fontSize:14.5, color:t.textOnDarkMid, lineHeight:1.6 }}>{inc}</span></div>
                      ))}
                    </div>
                    <button className={offer.primary ? "btn-spark" : "btn-outline"} style={{ marginTop:28 }} onClick={() => setPage("Contact")}>{offer.cta}</button>
                  </div>
                  <div style={{ position:"relative", zIndex:1 }}>
                    <div style={{ background:`${t.lemon}0F`, border:`1px solid ${t.lemon}2A`, borderRadius:10, padding:"20px 22px", textAlign:"right" }}>
                      <div style={{ fontFamily:fonts.body, fontSize:10, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:t.lemon, marginBottom:10 }}>Summer Sale</div>
                      <div className="price-strike">{offer.regular}</div>
                      <div style={{ fontFamily:fonts.display, fontSize:46, color:t.textOnDark, lineHeight:1, marginTop:4 }}>{offer.sale}</div>
                      <div className="body-sm" style={{ marginTop:6 }}>{offer.per}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:20, padding:"18px 24px", background:t.duskMid, borderRadius:10, border:`1px solid ${t.borderDark}`, display:"flex", gap:12, alignItems:"flex-start" }}>
            <div className="dot-lemon" style={{ marginTop:8 }} />
            <p style={{ fontFamily:fonts.body, fontSize:14, color:t.textOnDarkMid, lineHeight:1.65 }}>
              <span style={{ fontWeight:600, color:t.textOnDark }}>Using a corporate L&D budget?</span> Many companies cover coaching through professional development reimbursement. Corporate rates and invoicing are available, just mention it on your Exploration Call and I'll handle the rest.
            </p>
          </div>
        </div>
      </section>

      <section style={{ borderTop:`1px solid ${t.borderDark}`, padding:"88px 0" }}>
        <div className="wrap-narrow">
          <Eyebrow>How it works</Eyebrow>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {[
              { step:"Exploration Call", note:"Free · 30 min", body:"We talk. You share what's going on. I ask questions. We figure out together whether this is the right fit, and if so, what the right engagement looks like." },
              { step:"Define the work", note:"Session 1", body:"For Sprint and Partnership, we spend our first full session building a shared picture of the challenge and what success looks like. Not a framework, but a real conversation specific to your life." },
              { step:"Do the work", note:"Ongoing", body:"Bi-weekly sessions, consistent accountability, and the kind of rigorous thinking that actually moves things. Between sessions you have access to me via email." },
              { step:"Close and carry forward", note:"End of engagement", body:"We take honest stock of what shifted, what's still live, and how to carry the work forward on your own. You leave with more than insight. You leave with a practice." },
            ].map((item,i) => (
              <div key={i} style={{ display:"grid", gridTemplateColumns:"200px 1fr", gap:40, padding:"28px 0", borderBottom: i<3 ? `1px solid ${t.borderDark}` : "none" }} className="stack">
                <div>
                  <div style={{ fontFamily:fonts.display, fontSize:18, color:t.lilac }}>{item.step}</div>
                  <div className="body-sm" style={{ marginTop:4, fontSize:12, letterSpacing:"0.04em" }}>{item.note}</div>
                </div>
                <p className="body-md" style={{ fontSize:15 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop:`1px solid ${t.borderDark}`, padding:"80px 0" }}>
        <div className="wrap-narrow">
          <Eyebrow>Common questions</Eyebrow>
          {[
            { q:"Is this just career coaching?", a:"No. We'll absolutely work on your career if that's what you need, but I work with the whole person and the whole life. Your relationships, your health, your sense of meaning, your daily experience, all of it is fair territory." },
            { q:"Do you specialize in coaching tech workers?", a:"Not at all. My background is in tech, but the people I work with come from all industries. What matters is that you're ambitious, self-aware, ready, and coachable." },
            { q:"What's the difference between coaching and mentorship?", a:"Coaching helps you find your own answers through inquiry, reflection, and accountability. Mentorship is more direct; offering my experience, perspective, and guidance based on what I've seen and lived. I do both, and I'm clear about which mode we're in." },
            { q:"Is this reimbursable through my company?", a:"Often yes. Many organizations cover coaching through L&D or professional development budgets. I provide invoicing and documentation for reimbursement. Just ask." },
            { q:"Where do sessions happen?", a:"All sessions are by video. I work with clients everywhere." },
            { q:"What if coaching turns out not to be the right fit?", a:"We'll find out on the Exploration Call. If I'm not the right person or coaching isn't the right format, I'll say so. Likewise, you're free to take a different direction, even if I see a fit." },
            { q:"Do you offer payment plans?", a:"I don't discount, but I'm open to a conversation about structure. Ask on your Exploration Call." },
          ].map((item,i) => (
            <div key={i} style={{ padding:"24px 0", borderBottom:`1px solid ${t.borderDark}` }}>
              <div style={{ fontFamily:fonts.body, fontSize:15, fontWeight:600, color:t.textOnDark, marginBottom:8 }}>{item.q}</div>
              <p className="body-md" style={{ fontSize:15 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

// ─────────────────────────────────────────────
// CONTACT (two lanes)
// ─────────────────────────────────────────────
const CALENDLY_EXPLORATION = "https://calendly.com/shiradee/30min-exploration";
const CALENDLY_COACHING = "https://calendly.com/shiradee/60min-coaching"; // 60-min paid session, for future use
const CALENDLY_URL = CALENDLY_EXPLORATION;

const Contact = () => {
  const [form, setForm] = useState({ name:"", email:"", phone:"", sms:false, reach:"", interest:"", reimbursement:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      {/* HERO */}
      <section style={{ padding:"96px 0 56px", position:"relative", overflow:"hidden" }}>
        <div className="glow-sea" style={{ width:400, height:400, right:-80, top:-80, opacity:0.1 }} />
        <div className="wrap-narrow" style={{ position:"relative", zIndex:1 }}>
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="disp-lg" style={{ color:t.textOnDark }}>
            Let's find out if<br /><span className="lemon-italic">we're a fit.</span>
          </h1>
          <p className="body-lg" style={{ marginTop:20, maxWidth:520 }}>
            Book your Exploration Call: free, 30 minutes, just a conversation about you, not a pitch.
          </p>
        </div>
      </section>

      {/* LANE 1: EXPLORATION CALL (CALENDLY) */}
      <section style={{ paddingBottom:24 }}>
        <div className="wrap">
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20, flexWrap:"wrap" }}>
            <span style={{ display:"inline-block", padding:"4px 12px", background:`${t.lemon}18`, border:`1px solid ${t.lemon}44`, borderRadius:100, fontFamily:fonts.body, fontSize:11, fontWeight:700, color:t.lemon, letterSpacing:"0.07em", textTransform:"uppercase" }}>New here? Start with this</span>
            <span style={{ fontFamily:fonts.body, fontSize:13, fontWeight:600, letterSpacing:"0.03em", color:t.lilac }}><span style={{ color:t.lemon }}>Free</span> · 30 minutes · Video</span>
          </div>
          <div style={{ borderRadius:14, overflow:"hidden", border:`1px solid ${t.borderDarkEm}`, background:t.moonlight, minHeight:680 }}>
            <iframe
              title="Book an Exploration Call"
              src={CALENDLY_URL}
              style={{ width:"100%", height:680, border:"none", display:"block" }}
            />
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <section style={{ padding:"40px 0 8px" }}>
        <div className="wrap-narrow">
          <div style={{ display:"flex", alignItems:"center", gap:16 }}>
            <div style={{ flex:1, height:1, background:t.borderDarkEm }} />
            <span style={{ fontFamily:fonts.body, fontSize:13, fontWeight:600, color:t.seaGlass, letterSpacing:"0.04em", whiteSpace:"nowrap" }}>Already know what you want?</span>
            <div style={{ flex:1, height:1, background:t.borderDarkEm }} />
          </div>
        </div>
      </section>

      {/* LANE 2: READY TO COMMIT (FORM) */}
      <section style={{ padding:"40px 0 96px" }}>
        <div className="wrap">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <h2 className="disp-md" style={{ color:t.textOnDark }}>Ready to work together?</h2>
            <p className="body-lg" style={{ marginTop:12, maxWidth:560, margin:"12px auto 0" }}>
              Choose a session or package below. I'll reach out within 48 hours to confirm and sort the details: payment (self-pay or reimbursement), scheduling, all of it.
            </p>
          </div>

          {submitted ? (
            <div style={{ maxWidth:560, margin:"0 auto", textAlign:"center", padding:"48px 32px" }}>
              <div style={{ width:60, height:60, borderRadius:"50%", background:t.dusk, border:`1px solid ${t.lemon}44`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px", fontSize:24, color:t.lemon }}>✓</div>
              <h3 className="disp-sm" style={{ color:t.textOnDark }}>You're in.</h3>
              <p className="body-lg" style={{ marginTop:14 }}>I'll reach out within 48 hours to confirm your session and sort the details. Check your inbox (and your texts, if you're up for it).</p>
            </div>
          ) : (
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start", maxWidth:980, margin:"0 auto" }} className="stack">
              {/* FORM */}
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                <div className="form-group">
                  <label>Your name</label>
                  <input type="text" placeholder="Full name" value={form.name} onChange={e => setForm({...form,name:e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+1 (555) 555-5555" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} />
                  <div className="checkbox-row" style={{ marginTop:4 }}>
                    <input type="checkbox" id="sms" checked={form.sms} onChange={e => setForm({...form,sms:e.target.checked})} />
                    <label htmlFor="sms" style={{ fontWeight:400, color:t.textOnDarkMute, fontSize:13 }}>OK to reach me by text</label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Best way to reach you</label>
                  <select value={form.reach} onChange={e => setForm({...form,reach:e.target.value})}>
                    <option value="">Select one</option>
                    <option value="email">Email</option>
                    <option value="sms">SMS / text</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>I'm interested in…</label>
                  <select value={form.interest} onChange={e => setForm({...form,interest:e.target.value})}>
                    <option value="">Select one</option>
                    <option value="clarity">Clarity Session ($335)</option>
                    <option value="sprint">Sprint · 3 months ($2,400)</option>
                    <option value="partnership">Partnership · 6 months ($4,100)</option>
                    <option value="unsure">I'm not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Will you be using a company L&D budget?</label>
                  <select value={form.reimbursement} onChange={e => setForm({...form,reimbursement:e.target.value})}>
                    <option value="">Select one</option>
                    <option value="self">Self-pay</option>
                    <option value="company">Yes, employer reimbursement</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>What's bringing you here?</label>
                  <textarea rows={5} placeholder="A few sentences is plenty. What's going on, and what are you hoping for?" value={form.message} onChange={e => setForm({...form,message:e.target.value})} />
                </div>
                <button className="btn-spark" style={{ alignSelf:"flex-start" }} onClick={() => { if(form.name && form.email) setSubmitted(true); }}>Send it</button>
              </div>

              {/* SIDEBAR */}
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                <div className="card-mid">
                  <p style={{ fontFamily:fonts.body, fontSize:11, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:t.seaGlass, marginBottom:16 }}>What to expect</p>
                  <div className="dot-list">
                    {[
                      "I respond to all inquiries within 48 hours.",
                      "Not ready to commit? Book the free Exploration Call above instead. No pressure.",
                      "If it's not the right fit, I'll tell you, and I'll do my best to point you somewhere better.",
                      "All sessions are by video. I work with clients everywhere.",
                    ].map((item,i) => <DotItem key={i}>{item}</DotItem>)}
                  </div>
                </div>
                <div style={{ padding:"22px 0", borderTop:`1px solid ${t.borderDark}` }}>
                  <p style={{ fontFamily:fonts.body, fontSize:11, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:t.seaGlass, marginBottom:12 }}>Corporate L&D reimbursement</p>
                  <p className="body-sm" style={{ fontSize:14, color:t.textOnDarkMid, lineHeight:1.7 }}>
                    Many employers cover professional coaching through L&D budgets. I provide full documentation and invoicing. Just flag it in your note or on the call and I'll handle the details.
                  </p>
                </div>
                <div className="card-dark" style={{ position:"relative", overflow:"hidden" }}>
                  <div className="glow-lemon" style={{ width:160, height:160, right:-40, bottom:-40, opacity:0.08 }} />
                  <p style={{ fontFamily:fonts.display, fontSize:19, color:t.textOnDark, marginBottom:8, position:"relative", zIndex:1 }}>Summer pricing ends<br />September 1.</p>
                  <p className="body-sm" style={{ fontSize:13, lineHeight:1.65, position:"relative", zIndex:1 }}>All current prices are summer rates. Regular pricing resumes after Labor Day.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────
export default function ShiraKatesCoaching() {
  const [page, setPage] = useState("Home");
  const go = (p) => { setPage(p); window.scrollTo({ top:0, behavior:"smooth" }); };
  const Page = { Home, About, "Work With Me":Work, Contact }[page] || Home;
  return (
    <>
      <GlobalStyle />
      <Nav page={page} setPage={go} />
      <Page setPage={go} />
      <Footer setPage={go} />
    </>
  );
}
