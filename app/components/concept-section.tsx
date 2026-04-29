import Image from "next/image";

export function ConceptSection() {
  return (
    <section id="concept" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-6 mb-20">
          <span className="section-label">01 — Concept</span>
          <div className="flex-1 thin-line"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 items-start">
          <div className="md:col-span-6 lg:col-span-5">
            <h2
              className="cormorant font-light leading-snug mb-8"
              style={{ fontSize: "clamp(36px, 4.5vw, 64px)", color: "var(--gray-900)" }}
            >
              Stillness
              <br />
              as Design.
            </h2>
            <div className="thin-line mb-8 md:hidden"></div>
          </div>

          <div className="md:col-span-5 md:col-start-8 lg:col-start-7 lg:col-span-6 pt-2">
            <p className="text-sm leading-loose mb-6" style={{ color: "var(--gray-600)" }}>
              MAISONは「余白」を大切にしているヘアデザインスタジオです。トレンドを追うのではなく、あなた自身の輪郭・質感・ライフスタイルに向き合い、長期的に美しいスタイルを提案します。
            </p>
            <p className="text-sm leading-loose" style={{ color: "var(--gray-600)" }}>
              We believe beauty is not a trend. It is an accumulated practice of small, precise
              choices —taken together over time.
            </p>

            <div className="mt-12 md:mt-16 relative overflow-hidden" style={{ height: "320px" }}>
              <Image
                src="/images/concept-image.webp"
                alt="Concept image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px mt-24 md:mt-32"
          style={{ background: "var(--gray-200)" }}
        >
          <div className="bg-white p-10 md:p-12">
            <span className="mono text-xs" style={{ color: "var(--gray-400)" }}>
              — 01
            </span>
            <h3
              className="cormorant text-2xl font-light mt-4 mb-4"
              style={{ color: "var(--gray-900)" }}
            >
              Listen
            </h3>
            <p className="text-xs leading-loose" style={{ color: "var(--gray-500)" }}>
              まず、あなたの話を聞くことから始めます。カウンセリングに十分な時間をとります。
            </p>
          </div>
          <div className="bg-white p-10 md:p-12">
            <span className="mono text-xs" style={{ color: "var(--gray-400)" }}>
              — 02
            </span>
            <h3
              className="cormorant text-2xl font-light mt-4 mb-4"
              style={{ color: "var(--gray-900)" }}
            >
              Craft
            </h3>
            <p className="text-xs leading-loose" style={{ color: "var(--gray-500)" }}>
              技術と感覚を融合させた施術。トレーニングを積んだスタイリストが担当します。
            </p>
          </div>
          <div className="bg-white p-10 md:p-12">
            <span className="mono text-xs" style={{ color: "var(--gray-400)" }}>
              — 03
            </span>
            <h3
              className="cormorant text-2xl font-light mt-4 mb-4"
              style={{ color: "var(--gray-900)" }}
            >
              Sustain
            </h3>
            <p className="text-xs leading-loose" style={{ color: "var(--gray-500)" }}>
              次回の来店まで続く美しさを設計します。ホームケアのアドバイスも丁寧に。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
