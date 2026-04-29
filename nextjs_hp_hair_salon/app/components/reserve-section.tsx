export function ReserveSection() {
  return (
    <section
      id="reserve"
      className="py-32 md:py-48 relative overflow-hidden"
      style={{ background: "white" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="cormorant font-light"
          style={{
            fontSize: "clamp(100px, 18vw, 240px)",
            color: "var(--gray-100)",
            letterSpacing: "-0.03em",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          RESERVE
        </span>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <p className="section-label mb-8">05 — Book Appointment</p>
        <h2
          className="cormorant font-light mb-8"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            color: "var(--gray-900)",
            lineHeight: "1.1",
          }}
        >
          Ready when
          <br />
          <em>you are.</em>
        </h2>
        <p
          className="text-sm leading-loose mb-14 mx-auto"
          style={{ color: "var(--gray-500)", maxWidth: "40ch" }}
        >
          お電話またはオンラインフォームよりご予約いただけます。初めての方もお気軽にどうぞ。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="btn-primary w-full sm:w-auto text-center">
            オンライン予約
          </a>
          <a href="tel:0300000000" className="btn-outline w-full sm:w-auto text-center">
            電話で予約 03-0000-0000
          </a>
        </div>
        <p className="mono text-xs mt-12" style={{ color: "var(--gray-400)" }}>
          ※ 初回カウンセリング無料 ※ キャンセルは前日19時まで
        </p>
      </div>
    </section>
  );
}
