"use client"

import Image from "next/image";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const gradientStyle = {
    background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(87, 0, 107, 1) 53%, rgba(132, 0, 184, 1) 80%, rgba(90, 0, 110, 1) 98%)",
    minHeight: "100vh"
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
        setMessage("Merci ! Vous êtes bien inscrit(e).");
        setEmail("");
      } else {
        setSuccess(false);
        setMessage(data.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      setSuccess(false);
      setMessage("Une erreur est survenue. Veuillez réessayer.");
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
      {/* Header */}
      <header
        className="flex justify-between items-center w-full"
        style={{ padding: "2rem 4rem" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image src="/focus_logo.png" alt="Logo Focus" width={32} height={32} />
          </div>
          <span
            style={{
              color: blanc,
              fontWeight: 500,
              fontSize: "1.5rem",
              letterSpacing: "0.02em",
            }}
          >
            F O C U S
          </span>
        </div>
        <nav>
          <a
            href="#"
            style={{
              color: blanc,
              fontSize: "1rem",
              textDecoration: "none",
              fontWeight: 400,
            }}
          >
            Home
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-start justify-center px-8" style={{ padding: "4rem 4rem 0 4rem" }}>
        <div style={{ maxWidth: 600 }}>
          <div
            style={{
              color: texteSecondaire,
              fontSize: "1.2rem",
              marginBottom: "1rem",
              fontWeight: 400,
            }}
          >
            It's only a matter of time...
          </div>
          <h1
            style={{
              color: blanc,
              fontSize: "6rem",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "2rem",
              letterSpacing: "-0.04em",
              textShadow: `0 2px 32px ${blanc}, 0 0 8px ${violet}`,
              filter: "brightness(1.1)",
            }}
          >
            Coming<br />Soon
          </h1>
          <p
            style={{
              color: texteSecondaire,
              fontSize: "1rem",
              marginBottom: "3rem",
              maxWidth: 450,
              fontWeight: 400,
            }}
          >
            Join our newsletter to be the first to know when FOCUS launches and receive updates on the latest in data.
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
              placeholder="Email *"
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
          {message && (
            <div
              style={{
                color: success ? "#22c55e" : "#ef4444",
                marginTop: "1rem",
                fontSize: "0.95rem",
                textAlign: "left",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
