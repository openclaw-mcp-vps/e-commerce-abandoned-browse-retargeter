import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abandoned Browse Retargeter – Recover Lost Sales",
  description: "Track product page visits without cart additions and trigger personalized email sequences to recover lost sales."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="02b4ae86-899d-481d-b5a2-e8a3ff41fb73"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
