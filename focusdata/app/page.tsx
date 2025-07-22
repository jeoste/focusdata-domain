"use client"

import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const gradientStyle = {
    background: "radial-gradient(circle, rgba(49, 1, 83, 1) 10%, rgba(59, 8, 70, 1) 53%, rgba(132, 0, 184, 1) 80%, rgba(255, 255, 255, 1) 92%)",
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
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8">
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
            style={{
              color: blanc,
              fontSize: "7rem",
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: "4rem",
              letterSpacing: "-0.04em",
              textShadow: `0 2px 26px ${blanc}, 0 0 26px ${violet}`,
              filter: "brightness(1.1)",
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
