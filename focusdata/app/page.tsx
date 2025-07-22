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
    overflow: "hidden",
    background: "conic-gradient(from 145deg at 65% 45%, #0b1a3e 0deg, #11264f 175deg, #34785c 180deg, #3e8959 270deg, #29684b 360deg)",
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
  const texteSecondaire = "#E0E0E0";
  const focusGlow = "0 0 40px 10px #c27aff";

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={gradientStyle}
    >
      {/* Overlay pour le fond dégradé et la séparation diagonale */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          background: `linear-gradient(120deg, #3ecf8e 0%, #1b2e5a 50%, #3c0366 100%)`,
        }}
      />
      {/* Séparation nette en diagonale */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
          background: `linear-gradient(120deg, transparent 49.5%, #181028 50%)`,
          mixBlendMode: "normal",
        }}
      />
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8" style={{ position: "relative", zIndex: 2 }}>
        <div className="flex flex-col items-center text-center" style={{ maxWidth: 600 }}>

          {/* Logo centré */}
          <div className="flex flex-col items-center gap-6 mb-8">

            <span
              style={{
                color: blanc,
                fontWeight: 400,
                fontSize: "3rem",
                letterSpacing: "0.05em",
              }}
            >
              Coming soon
            </span>
          </div>
          <h1
            className="font-extrabold whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-16"
            style={{
              color: blanc,
              textShadow: `0 2px 26px ${blanc}, 0 0 26px ${violet}`,
              filter: "brightness(1.1)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            F O C U S
          </h1>
          
          
          <p
            style={{
              color: texteSecondaire,
              fontSize: "1.2rem",
              marginBottom: "3rem",
              maxWidth: 500,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Subscribe to be the first notified when we go live.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: `1px solid ${violet}55`,
              borderRadius: 50,
              padding: "0.5rem",
              maxWidth: 450,
              boxShadow: focusGlow,
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
                padding: "0.5rem 1rem",
                flex: 1,
                outline: "none",
                fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
                background: violet,
                color: blanc,
                border: "none",
                borderRadius: 50,
                padding: "0.75rem 1.5rem",
                fontWeight: 500,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: `0 0 0 2px ${blanc}55`,
                transition: "background 0.2s, color 0.2s",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>
      <Toaster richColors position="top-center" />
    </div>
  );
}
