export function MainVisual() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", background: "var(--gray-100)" }}
    >
      <div className="absolute inset-0" style={{ borderTop: "none" }}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/main_visual.webm" type="video/webm" />
          <source src="/videos/main_visual.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-end pb-20 md:pb-32"
        style={{ minHeight: "90vh" }}
      >
        <div className="max-w-xl">
          <p className="section-label mb-6">Hair Design Studio — Tokyo</p>
          <h1
            className="cormorant font-light leading-none mb-8"
            style={{
              fontSize: "clamp(52px, 8vw, 112px)",
              color: "var(--gray-900)",
              letterSpacing: "-0.01em",
            }}
          >
            The Art
            <br />
            <em>of Hair.</em>
          </h1>
          <p
            className="text-sm leading-loose mb-10"
            style={{ color: "var(--gray-600)", maxWidth: "34ch" }}
          >
            あなたの個性を引き出す、静かで丁寧な時間。
            <br />
            Quiet precision. Personal style.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#reserve" className="btn-primary">
              ご予約はこちら
            </a>
            <a href="#concept" className="btn-outline">
              About Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2">
        <span
          className="section-label"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}
        >
          SCROLL
        </span>
        <div className="w-px h-12" style={{ background: "var(--gray-400)" }}></div>
      </div>
    </section>
  );
}
