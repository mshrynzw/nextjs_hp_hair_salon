import Image from "next/image";

export function StylistSection() {
  const stylists = [
    {
      name: "Aoi Yamada",
      role: "Director / Color Specialist",
      no: "01",
      desc: "外国人風カラーとドライカットを得意とする。NY・Londonでの修行を経て帰国。",
      image: "/images/stylist-photo-01.webp",
    },
    {
      name: "Kenji Mori",
      role: "Senior Stylist / Cut Art",
      no: "02",
      desc: "骨格診断に基づくカットで定評。メンズスタイルからロングヘアまで幅広く対応。",
      offset: true,
      image: "/images/stylist-photo-02.webp",
    },
    {
      name: "Rin Sasaki",
      role: "Stylist / Treatment Expert",
      no: "03",
      desc: "ヘアケアと頭皮環境の改善を専門とする。繊細な質感表現を得意とする。",
      image: "/images/stylist-photo-03.webp",
    },
  ];

  return (
    <section id="stylist" className="py-28 md:py-40">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-6 mb-20">
          <span className="section-label">03 — Stylist</span>
          <div className="flex-1 thin-line"></div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <h2
            className="cormorant font-light"
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              color: "var(--gray-900)",
              lineHeight: "1.1",
            }}
          >
            Meet the
            <br />
            <em>Team.</em>
          </h2>
          <p className="text-xs leading-loose max-w-xs" style={{ color: "var(--gray-500)" }}>
            それぞれのスタイリストが専門的な技術と独自の視点を持ち、あなたのスタイルを担当します。
          </p>
        </div>

        <div className="stylist-row grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {stylists.map((s) => (
            <div key={s.name} className={`stylist-card ${s.offset ? "md:mt-16" : ""}`}>
              <div
                className="mb-6 relative overflow-hidden"
                style={{ height: "420px", background: "var(--gray-100)" }}
              >
                <Image
                  src={s.image}
                  alt={`${s.name} photo`}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 30vw"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="cormorant text-2xl font-light" style={{ color: "var(--gray-900)" }}>
                    {s.name}
                  </p>
                  <p className="mono text-xs mt-1" style={{ color: "var(--gray-400)" }}>
                    {s.role}
                  </p>
                </div>
                <span className="mono text-xs" style={{ color: "var(--gray-300)" }}>
                  {s.no}
                </span>
              </div>
              <p className="text-xs leading-loose" style={{ color: "var(--gray-500)" }}>
                {s.desc}
              </p>
              <a
                href="#"
                className="inline-block mt-6 mono text-xs tracking-widest"
                style={{
                  color: "var(--gray-700)",
                  borderBottom: "1px solid var(--gray-300)",
                  paddingBottom: "2px",
                }}
              >
                Profile →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
