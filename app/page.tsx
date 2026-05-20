export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          E-commerce Retargeting
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Retarget Users Who Browse Without Adding
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Drop a lightweight tracking pixel on your store. When shoppers browse products but never add to cart, we automatically send personalized email sequences to bring them back.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Recovering Sales – $14/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "One-Line Pixel", desc: "Paste a single script tag into your store. Works with Shopify, WooCommerce, and any HTML site." },
            { title: "Smart Browse Detection", desc: "Detects product views with no cart additions within a configurable time window." },
            { title: "Automated Email Sequences", desc: "Sends personalized emails featuring the exact products the shopper browsed." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited tracking pixels",
              "Up to 10,000 tracked sessions/mo",
              "Automated 3-email sequences",
              "Personalized product recommendations",
              "Dashboard & conversion analytics",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the tracking pixel work?",
              a: "You paste one script tag into your store's HTML. It listens for product page views and cart events. If a visitor views a product but doesn't add it to cart within your configured window, they enter a retargeting sequence."
            },
            {
              q: "Which e-commerce platforms are supported?",
              a: "Any platform that lets you add custom HTML — Shopify, WooCommerce, BigCommerce, Wix, or a custom-built store. Setup takes under 5 minutes."
            },
            {
              q: "How do you send emails without my ESP?",
              a: "We integrate with your existing email provider (Mailchimp, Klaviyo, SendGrid, etc.) via API, or you can use our built-in transactional email service included in the plan."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Abandoned Browse Retargeter. All rights reserved.
      </footer>
    </main>
  );
}
