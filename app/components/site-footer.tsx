export function SiteFooter() {
  return (
    <footer style={{ background: "var(--gray-900)" }} className="pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 pb-16"
          style={{ borderBottom: "1px solid var(--gray-800)" }}
        >
          <div className="md:col-span-4">
            <p
              className="cormorant text-3xl font-light tracking-widest mb-4"
              style={{ color: "#fafafa", letterSpacing: "0.25em" }}
            >
              MAISON
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--gray-500)" }}>
              静かな空間と丁寧な技術で、
              <br />
              あなた自身の美しさを引き出します。
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <p
              className="mono text-xs mb-6"
              style={{ color: "var(--gray-600)", letterSpacing: "0.1em" }}
            >
              NAVIGATION
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#concept" className="nav-link">
                  Concept
                </a>
              </li>
              <li>
                <a href="#menu" className="nav-link">
                  Menu
                </a>
              </li>
              <li>
                <a href="#stylist" className="nav-link">
                  Stylist
                </a>
              </li>
              <li>
                <a href="#access" className="nav-link">
                  Access
                </a>
              </li>
              <li>
                <a href="#reserve" className="nav-link">
                  Reserve
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <p
              className="mono text-xs mb-6"
              style={{ color: "var(--gray-600)", letterSpacing: "0.1em" }}
            >
              SOCIAL
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="nav-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  LINE
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Hotpepper Beauty
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="mono text-xs" style={{ color: "var(--gray-600)" }}>
            © 2025 MAISON Hair Design Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="mono text-xs" style={{ color: "var(--gray-600)" }}>
              Privacy Policy
            </a>
            <a href="#" className="mono text-xs" style={{ color: "var(--gray-600)" }}>
              特定商取引法
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
