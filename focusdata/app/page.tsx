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
      <main className="flex-1 flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 w-full" style={{ position: "relative", zIndex: 2 }}>
        <div className="flex flex-col items-start text-left w-full max-w-[600px]">

          {/* Logo centré */}
          <div className="flex flex-col items-start gap-6 mb-8 w-full">

            <span
              style={{
                color: blanc,
                textShadow: `0 2px 26px ${blanc}, 0 0 26px ${violet}`,
                fontWeight: 500,
                fontSize: "3rem",
                letterSpacing: "0.05em",
              }}
              className="w-full text-left"
            >
              Coming soon
            </span>
          </div>
          <h1
            className="font-extrabold break-words text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 w-full text-left"
            style={{
              color: blanc,
              textShadow: `0 2px 2px ${blanc}, 0 0 2px ${violet}`,
              filter: "brightness(1.1)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
            }}
          >
            F O C U S
          </h1>

          <h2
            className="font-normal break-words text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 w-full text-left"
            style={{
              color: blanc,
              textShadow: `0 2px 2px ${blanc}, 0 0 2px ${violet}`,
              filter: "brightness(1.1)",
              fontWeight: 400,
              letterSpacing: "-0.04em",
            }}
          >
            Data Observability Platform
          </h2>

          <p
            style={{
              color: texteSecondaire,
              textShadow: `0 2px 26px ${blanc}, 0 0 26px ${violet}`,
              fontSize: "1.1rem",
              marginBottom: "2rem",
              fontWeight: 400,
              textAlign: "left",
            }}
            className="w-full text-left"
          >
            Subscribe to be the first notified when we go live.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-2 w-full justify-start"
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
                padding: "0.5rem 1rem",
                flex: 1,
                outline: "none",
                fontSize: "1rem",
                minWidth: 0,
              }}
              className="w-full sm:w-auto"
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
                width: "100%",
                maxWidth: "180px",
              }}
              className="w-full sm:w-auto"
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
