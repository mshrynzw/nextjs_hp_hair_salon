export function AccessSection() {
  return (
    <section id="access" style={{ background: "var(--gray-100)" }} className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-6 mb-20">
          <span className="section-label">04 — Access</span>
          <div className="flex-1 thin-line"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">
          <div className="lg:col-span-4">
            <h2
              className="cormorant font-light mb-12"
              style={{ fontSize: "clamp(36px, 3.5vw, 52px)", color: "var(--gray-900)" }}
            >
              Find Us.
            </h2>

            <dl className="space-y-8">
              <div>
                <dt
                  className="mono text-xs mb-2"
                  style={{ color: "var(--gray-400)", letterSpacing: "0.1em" }}
                >
                  ADDRESS
                </dt>
                <dd className="text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
                  〒000-0000
                  <br />
                  東京都渋谷区○○ 1-2-3
                  <br />
                  ○○ビル 3F
                </dd>
              </div>
              <div className="thin-line"></div>
              <div>
                <dt
                  className="mono text-xs mb-2"
                  style={{ color: "var(--gray-400)", letterSpacing: "0.1em" }}
                >
                  HOURS
                </dt>
                <dd className="text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
                  Mon – Fri 11:00 – 20:00
                  <br />
                  Sat – Sun 10:00 – 19:00
                  <br />
                  <span className="mono text-xs" style={{ color: "var(--gray-400)" }}>
                    定休日：毎週火曜日
                  </span>
                </dd>
              </div>
              <div className="thin-line"></div>
              <div>
                <dt
                  className="mono text-xs mb-2"
                  style={{ color: "var(--gray-400)", letterSpacing: "0.1em" }}
                >
                  CONTACT
                </dt>
                <dd className="text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
                  TEL：03-0000-0000
                  <br />
                  mail@maison-salon.jp
                </dd>
              </div>
              <div className="thin-line"></div>
              <div>
                <dt
                  className="mono text-xs mb-2"
                  style={{ color: "var(--gray-400)", letterSpacing: "0.1em" }}
                >
                  NEAREST STATION
                </dt>
                <dd className="text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
                  渋谷駅 徒歩5分
                  <br />
                  表参道駅 徒歩8分
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {/* <div
              className="wf-img w-full"
              style={{ height: "480px", background: "var(--gray-200)" }}
            >
              <span className="wf-img-label">
                MAP EMBED
                <br />
                Google Maps / Static Map
                <br />
                lat: 00.0000 lng: 000.0000
              </span>
            </div> */}
            <div className="mt-3 w-full h-[360px] md:h-[480px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9714.368534044972!2d139.70175299715862!3d35.657751820219744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b582c15c3cf%3A0x8c0e68a8aa03fd5c!2z5riL6LC36aeF!5e0!3m2!1sja!2sjp!4v1777465995462!5m2!1sja!2sjp"
                className="block w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
