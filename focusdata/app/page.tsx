"use client"

import Image from "next/image";
import { useState, CSSProperties } from "react";
import { Toaster, toast } from "sonner";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const gradientStyle: CSSProperties = {
    position: "relative",
    width: "100vw",
    height: "100vh",
    minHeight: "100vh",
    overflow: "hidden"
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    setSuccess(false);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        toast.success("Thanks for subscribing!");
        setEmail("");
      } else {
        setSuccess(false);
        toast.error(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      setSuccess(false);
      toast.error("An error occurred. Please try again.");
    }
  }

  // Palette violet/blanc
  const violet = "#3c0366";
  const blanc = "#FFFFFF";
  const texteSecondaire = "#FFFFFF";
  const focusGlow = "0 0 40px 10px #c27aff";

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(90deg, rgb(52, 1, 88) 25%, rgba(255, 255, 255, 1) 120%)",
      }}
    >
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 w-full" style={{ position: "relative", zIndex: 2 }}>
        <div className="flex flex-col items-center text-center w-full max-w-[600px]">

          {/* Badge Coming Soon en haut, petit h3 */}
          <h3 style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(60,3,102,0.13)",
            borderRadius: "1rem",
            padding: "0.25rem 1rem",
            fontSize: "1rem",
            fontWeight: 600,
            color: blanc,
            letterSpacing: "0.13em",
            marginBottom: "1.2rem",
            textTransform: "uppercase",
            boxShadow: `0 1px 8px 0 ${violet}33`,
            border: `1px solid ${violet}33`,
          }}>
            <svg width="16" height="16" fill="#fff" style={{opacity:0.8}} viewBox="0 0 24 24">
              <path d="M12 8v5l4 2" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill="none"/>
            </svg>
            Coming soon
          </h3>

          {/* Titre principal */}
          <h1 style={{
            color: blanc,
            fontWeight: 800,
            fontSize: "2.8rem",
            letterSpacing: "0.18em",
            marginBottom: "0.7rem",
            textShadow: `0 2px 26px ${blanc}, 0 0 26px ${violet}, 0 2px 8px ${violet}77, 0 0 2px ${blanc}`,
            lineHeight: 1.1,
          }}>
            F O C U S
          </h1>

          {/* Slogan business + Data Observability Platform */}
          <h2 style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            fontSize: "1.15rem",
            fontWeight: 500,
            color: blanc,
            margin: 0,
            marginBottom: "1.2rem",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            textShadow: `0 1px 28px ${blanc}, 0 0 50px ${violet}`,
            flexWrap: "wrap",
            textAlign: "center",
            maxWidth: "100%",
          }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, background: "rgba(255,255,255,0.10)", borderRadius: "50%", flex: "0 0 auto" }}>
              {/* SVG œil amélioré, inspiré du logo focus_logo.png */}
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="iris-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e6d6fa"/>
                    <stop offset="80%" stopColor="#a084e8"/>
                    <stop offset="100%" stopColor="#7c3aed"/>
                  </radialGradient>
                  <linearGradient id="lid-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.95"/>
                    <stop offset="100%" stopColor="#eae6f7" stopOpacity="0.7"/>
                  </linearGradient>
                  <radialGradient id="shadow-grad" cx="30%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="#3c0366" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#3c0366" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                {/* Paupière supérieure */}
                <path d="M4 24C10 10 38 10 44 24" stroke="#ede7f6" strokeWidth="3.2" fill="none"/>
                {/* Paupière inférieure */}
                <path d="M4 24C10 38 38 38 44 24" stroke="#ede7f6" strokeWidth="3.2" fill="none"/>
                {/* Sclère (blanc de l'œil) */}
                <ellipse cx="24" cy="24" rx="18" ry="13" fill="url(#lid-grad)"/>
                {/* Ombre interne à gauche */}
                <ellipse cx="17.5" cy="24" rx="7.5" ry="10" fill="url(#shadow-grad)"/>
                {/* Iris */}
                <ellipse cx="24" cy="24" rx="9.5" ry="9.5" fill="url(#iris-grad)"/>
                {/* Pupille */}
                <ellipse cx="24" cy="24" rx="5.2" ry="5.2" fill="#6d28d9"/>
                {/* Reflet */}
                <ellipse cx="27.2" cy="21.5" rx="1.7" ry="1.2" fill="#fff" fillOpacity="0.85"/>
              </svg>
            </span>
            <span style={{ fontWeight: 700, color: blanc }}>A modern business oriented</span>
            <span style={{ fontWeight: 700, color: blanc }}>Data</span>
            <span style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
              textShadow: "0 0 1px #3c0366"
            }}>Observability</span>
            <span style={{ fontWeight: 700, color: blanc }}>Platform</span>
          </h2>

          {/* Citation */}
          <blockquote
            style={{
              color: texteSecondaire,
              fontSize: "1.08rem",
              marginBottom: "2rem",
              fontWeight: 400,
              textAlign: "center",
              fontStyle: "italic",
              borderLeft: `3px solid rgba(60,3,102,0.32)`,
              paddingLeft: "1.2rem",
              marginLeft: 0,
              opacity: 0.95,
              background: "none",
              boxShadow: "none",
            }}
            className="w-full text-center"
          >
            « Be data omniscient. »
          </blockquote>

          {/* Texte d'accroche */}
          <p
            style={{
              color: texteSecondaire,
              fontSize: "1.08rem",
              marginBottom: "2rem",
              fontWeight: 400,
              textAlign: "center",
              opacity: 0.92,
            }}
            className="w-full text-center"
          >
            Subscribe to be the first notified when we go live.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row items-center gap-2 w-full justify-start"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: `1px solid ${violet}55`,
              borderRadius: 50,
              padding: "0.5rem",
              maxWidth: 450,
              margin: "0",
            }}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                color: blanc,
                padding: "0.35rem 1rem",
                flex: 1,
                outline: "none",
                fontSize: "1rem",
                minWidth: 0,
              }}
              className="flex-1 min-w-0"
            />
            <button
              type="submit"
              style={{
                // background retiré pour laisser la classe CSS gérer la couleur
                color: blanc,
                border: "none",
                borderRadius: 50,
                padding: "0.38rem 1.1rem",
                fontWeight: 500,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: `0 0 0 2px ${blanc}55, 0 0 40px 10px #c27aff` ,
                transition: "background 0.18s cubic-bezier(.4,0,.2,1), color 0.18s, box-shadow 0.18s, outline 0.18s",
                width: "100%",
                maxWidth: "140px",
              }}
              className="w-auto subscribe-btn"
            >
              Subscribe
            </button>
          </form>
          <br/>
          {/* Lien vers l'article d'observabilité */}
          <a
            href="https://jeoste.github.io/articles/data-observability/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1.2rem",
              padding: "0.5rem 1.3rem",
              borderRadius: "2rem",
              background: "rgba(60,3,102,0.10)",
              color: blanc,
              fontWeight: 600,
              fontSize: "1.05rem",
              letterSpacing: "0.01em",
              textDecoration: "none",
              boxShadow: `0 2px 12px 0 ${violet}22, 0 0 40px 1px #c27aff` ,
              border: `1.5px solid ${violet}33`,
              transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = violet;
              e.currentTarget.style.color = blanc;
              e.currentTarget.style.boxShadow = `0 4px 24px 0 ${violet}55`;
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = "rgba(60,3,102,0.10)";
              e.currentTarget.style.color = blanc;
              e.currentTarget.style.boxShadow = `0 2px 12px 0 ${violet}22`;
            }}
          >
            Know more about Data Observability
          </a>
        </div>
      </main>
      <Toaster richColors position="top-center" />
      <style jsx global>{`
        .subscribe-btn {
          background: #3c0366;
        }
        .subscribe-btn:hover {
          background: linear-gradient(90deg, #a084e8 0%, #c27aff 100%);
          color: #fff;
          box-shadow: 0 0 0 12px #c27aff77, 0 6px 32px 0 #c27aff55;
          transition: background 0.18s cubic-bezier(.4,0,.2,1), color 0.18s, box-shadow 0.18s, outline 0.18s;
        }
        @media (hover: none) {
          .subscribe-btn:hover {
            background: ${violet};
            color: ${blanc};
            box-shadow: 0 0 0 2px ${blanc}55, 0 0 40px 10px #c27aff;
            outline: none;
          }
        }
      `}</style>
    </div>
  );
}
