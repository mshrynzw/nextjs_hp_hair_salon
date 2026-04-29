export function MenuSection() {
  return (
    <section id="menu" style={{ background: "var(--gray-900)" }} className="py-28 md:py-40">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-6 mb-20">
          <span className="mono text-xs tracking-widest" style={{ color: "var(--gray-500)" }}>
            02 — Menu
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--gray-700)" }}></div>
        </div>
        <h2
          className="cormorant font-light mb-20"
          style={{ fontSize: "clamp(36px, 5vw, 72px)", color: "#fafafa", letterSpacing: "-0.01em" }}
        >
          Services &<br />
          Pricing.
        </h2>

        <div className="space-y-0">
          <div className="border-t" style={{ borderColor: "var(--gray-700)" }}>
            <div className="py-6 flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-8">
                <span className="mono text-xs" style={{ color: "var(--gray-600)" }}>
                  CUT
                </span>
                <span
                  className="cormorant text-2xl md:text-3xl font-light"
                  style={{ color: "#fafafa" }}
                >
                  カット
                </span>
              </div>
              <span className="mono text-xs" style={{ color: "var(--gray-500)" }}>
                + EXPAND
              </span>
            </div>
            <div className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-0">
              <div
                className="flex justify-between items-baseline py-4 border-t"
                style={{ borderColor: "var(--gray-800)" }}
              >
                <div>
                  <span className="text-sm" style={{ color: "var(--gray-300)" }}>
                    カット（シャンプー込み）
                  </span>
                  <span className="block mono text-xs mt-1" style={{ color: "var(--gray-600)" }}>
                    Cut + Shampoo
                  </span>
                </div>
                <span className="cormorant text-xl" style={{ color: "#fafafa" }}>
                  ¥ 7,500
                </span>
              </div>
              <div
                className="flex justify-between items-baseline py-4 border-t"
                style={{ borderColor: "var(--gray-800)" }}
              >
                <div>
                  <span className="text-sm" style={{ color: "var(--gray-300)" }}>
                    前髪カット
                  </span>
                  <span className="block mono text-xs mt-1" style={{ color: "var(--gray-600)" }}>
                    Fringe Only
                  </span>
                </div>
                <span className="cormorant text-xl" style={{ color: "#fafafa" }}>
                  ¥ 1,500
                </span>
              </div>
            </div>
          </div>

          <div className="border-t" style={{ borderColor: "var(--gray-700)" }}>
            <div className="py-6 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-8">
                <span className="mono text-xs" style={{ color: "var(--gray-600)" }}>
                  COLOR
                </span>
                <span
                  className="cormorant text-2xl md:text-3xl font-light"
                  style={{ color: "#fafafa" }}
                >
                  カラー
                </span>
              </div>
              <span className="mono text-xs" style={{ color: "var(--gray-500)" }}>
                + EXPAND
              </span>
            </div>
            <div className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-0">
              <div
                className="flex justify-between items-baseline py-4 border-t"
                style={{ borderColor: "var(--gray-800)" }}
              >
                <div>
                  <span className="text-sm" style={{ color: "var(--gray-300)" }}>
                    全体カラー（根元〜毛先）
                  </span>
                  <span className="block mono text-xs mt-1" style={{ color: "var(--gray-600)" }}>
                    Full Color
                  </span>
                </div>
                <span className="cormorant text-xl" style={{ color: "#fafafa" }}>
                  ¥ 12,000〜
                </span>
              </div>
              <div
                className="flex justify-between items-baseline py-4 border-t"
                style={{ borderColor: "var(--gray-800)" }}
              >
                <div>
                  <span className="text-sm" style={{ color: "var(--gray-300)" }}>
                    ハイライト / ローライト
                  </span>
                  <span className="block mono text-xs mt-1" style={{ color: "var(--gray-600)" }}>
                    Highlight / Lowlight
                  </span>
                </div>
                <span className="cormorant text-xl" style={{ color: "#fafafa" }}>
                  ¥ 15,000〜
                </span>
              </div>
              <div
                className="flex justify-between items-baseline py-4 border-t"
                style={{ borderColor: "var(--gray-800)" }}
              >
                <div>
                  <span className="text-sm" style={{ color: "var(--gray-300)" }}>
                    バレイヤージュ
                  </span>
                  <span className="block mono text-xs mt-1" style={{ color: "var(--gray-600)" }}>
                    Balayage
                  </span>
                </div>
                <span className="cormorant text-xl" style={{ color: "#fafafa" }}>
                  ¥ 18,000〜
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-b" style={{ borderColor: "var(--gray-700)" }}>
            <div className="py-6 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-8">
                <span className="mono text-xs" style={{ color: "var(--gray-600)" }}>
                  TREATMENT
                </span>
                <span
                  className="cormorant text-2xl md:text-3xl font-light"
                  style={{ color: "#fafafa" }}
                >
                  トリートメント
                </span>
              </div>
              <span className="mono text-xs" style={{ color: "var(--gray-500)" }}>
                + EXPAND
              </span>
            </div>
            <div className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-0">
              <div
                className="flex justify-between items-baseline py-4 border-t"
                style={{ borderColor: "var(--gray-800)" }}
              >
                <div>
                  <span className="text-sm" style={{ color: "var(--gray-300)" }}>
                    スパトリートメント
                  </span>
                  <span className="block mono text-xs mt-1" style={{ color: "var(--gray-600)" }}>
                    Spa Treatment
                  </span>
                </div>
                <span className="cormorant text-xl" style={{ color: "#fafafa" }}>
                  ¥ 5,000〜
                </span>
              </div>
              <div
                className="flex justify-between items-baseline py-4 border-t"
                style={{ borderColor: "var(--gray-800)" }}
              >
                <div>
                  <span className="text-sm" style={{ color: "var(--gray-300)" }}>
                    縮毛矯正
                  </span>
                  <span className="block mono text-xs mt-1" style={{ color: "var(--gray-600)" }}>
                    Straightening
                  </span>
                </div>
                <span className="cormorant text-xl" style={{ color: "#fafafa" }}>
                  ¥ 22,000〜
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mono text-xs mt-8" style={{ color: "var(--gray-600)" }}>
          * 料金はすべて税込表示です。髪の長さ・量により変動する場合があります。
        </p>
      </div>
    </section>
  );
}
