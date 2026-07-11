import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useI18n, waLink, APP_URL, WA_CM, WA_BJ, type Lang } from "@/lib/i18n";
const agrielevLogo = { url: "/agrielev-logo.png" };
const cunismartApp = { url: "/cunismart-app.png" };
const cunismartShield = { url: "/cunismart-shield.png" };
import {
  Bell, WifiOff, Layers, Sprout, FileBarChart, QrCode,
  TrendingUp, ShieldCheck, Code2, GraduationCap, HandHeart, Heart,
} from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function LangToggle() {
  const { lang, setLang } = useI18n();
  const Btn = ({ code, label }: { code: Lang; label: string }) => (
    <button
      onClick={() => setLang(code)}
      className={`px-2 py-1 text-xs font-semibold tracking-wide transition-colors ${
        lang === code ? "text-[color:var(--forest)]" : "text-[color:var(--forest)]/40 hover:text-[color:var(--forest)]/70"
      }`}
      aria-pressed={lang === code}
    >
      {label}
    </button>
  );
  return (
    <div className="inline-flex items-center rounded-full border border-[color:var(--forest)]/15 bg-white/60 px-1">
      <Btn code="fr" label="FR" />
      <span className="text-[color:var(--forest)]/20">|</span>
      <Btn code="en" label="EN" />
    </div>
  );
}

function AppButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--orange-cta)] px-6 py-3.5 font-display font-semibold text-white shadow-[0_10px_30px_-10px_rgba(217,107,27,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_35px_-10px_rgba(217,107,27,0.65)] ${className}`}
    >
      {children}
    </a>
  );
}

function WaButton({ children, phone = WA_CM, variant = "outline" as "outline" | "solid" }: {
  children: ReactNode; phone?: string; variant?: "outline" | "solid";
}) {
  const { t } = useI18n();
  const cls =
    variant === "solid"
      ? "bg-[color:var(--whatsapp)] text-white hover:brightness-105"
      : "border-2 border-[color:var(--forest)] text-[color:var(--forest)] hover:bg-[color:var(--forest)] hover:text-[color:var(--cream)]";
  return (
    <a
      href={waLink(phone, t("waMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-display font-semibold transition-all hover:-translate-y-0.5 ${cls}`}
    >
      {children}
    </a>
  );
}

function Header() {
  const { t } = useI18n();
  const links = [
    ["#product", t("nav.product")],
    ["#pricing", t("nav.pricing")],
    ["#pledge", t("nav.pledge")],
    ["#b2b", t("nav.partners")],
    ["#about", t("nav.about")],
    ["#contact", t("nav.contact")],
  ] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--forest)]/10 bg-[color:var(--paper)]/85 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between lg:px-8 lg:py-4">
        <a href="#top" className="flex min-w-0 shrink-0 items-center" aria-label="AgriElev">
          <img
            src={agrielevLogo.url}
            alt="AgriElev — logiciels AgriTech"
            className="h-11 w-auto sm:h-14 lg:h-16"
            width={520}
            height={150}
          />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-semibold tracking-wide text-[color:var(--ink)]/75 transition-colors hover:text-[color:var(--forest)] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-[color:var(--gold)] after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <AppButton className="hidden sm:inline-flex !py-2.5 !px-4 text-sm">{t("nav.openApp")}</AppButton>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[color:var(--gold)]/15 blur-3xl" />
        <div className="absolute right-[-10%] top-40 h-[560px] w-[560px] rounded-full bg-[color:var(--forest)]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-[color:var(--orange-cta)]/8 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-16">
        {/* left column */}
        <div>
          {/* launch pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--orange-cta)]/25 bg-white/70 py-1.5 pl-1.5 pr-4 shadow-sm backdrop-blur">
            <span className="relative inline-flex h-6 items-center rounded-full bg-[color:var(--orange-cta)] px-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              {t("hero.launch")}
            </span>
            <span className="text-xs font-semibold text-[color:var(--forest)]">{t("hero.launchWhen")}</span>
          </div>

          <span className="mt-4 inline-block text-[11px] font-semibold tracking-[0.22em] text-[color:var(--forest)]/60">
            {t("hero.eyebrow")}
          </span>

          <h1 className="mt-3 font-display text-[40px] font-extrabold leading-[1] tracking-tight text-[color:var(--forest)] sm:text-[56px] lg:text-[68px]">
            {t("hero.title").split("CuniSmart")[0]}
            <span className="relative inline-block text-[color:var(--orange-cta)]">
              CuniSmart
              <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[color:var(--gold)]/40" />
            </span>
            {t("hero.title").split("CuniSmart")[1]}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--ink)]/75">{t("hero.subtitle")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <AppButton className="text-base">
              {t("hero.ctaApp")}
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </AppButton>
            <WaButton>{t("hero.ctaWa")}</WaButton>
          </div>

          {/* trust chips */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--forest)]/12 bg-white/70 px-3 py-1.5 font-medium text-[color:var(--forest)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" /> 🇨🇲 Cameroun
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--forest)]/12 bg-white/70 px-3 py-1.5 font-medium text-[color:var(--forest)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--orange-cta)]" /> 🇧🇯 Bénin
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--forest)]/12 bg-white/70 px-3 py-1.5 font-medium text-[color:var(--forest)]">
              <WifiOff className="h-3.5 w-3.5" /> {t("hero.badge.offline")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--forest)]/12 bg-white/70 px-3 py-1.5 font-medium text-[color:var(--forest)]">
              <ShieldCheck className="h-3.5 w-3.5" /> OAPI · 17 pays
            </span>
          </div>
        </div>

        {/* right column — phone + floating badges */}
        <div className="relative flex items-center justify-center pt-6 lg:pt-0">
          <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-[color:var(--gold)]/35 via-[color:var(--orange-cta)]/10 to-[color:var(--forest)]/20 blur-3xl" />
          <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
            {/* phone frame */}
            <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-[color:var(--forest)] bg-[color:var(--forest)] p-2 shadow-[var(--shadow-lift)]">
              <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-[color:var(--forest)]" />
              <div className="relative overflow-hidden rounded-[2rem] bg-white">
                <img
                  src={cunismartApp.url}
                  alt="CuniSmart — application mobile"
                  width={512}
                  height={512}
                  className="w-full"
                />
              </div>
            </div>

            {/* Label Qualité shield */}
            <img
              src={cunismartShield.url}
              alt="CuniSmart Label Qualité"
              width={220}
              height={220}
              className="absolute -bottom-8 -right-6 w-28 rounded-2xl bg-white p-2 shadow-[var(--shadow-soft)] sm:w-36"
            />

            {/* OAPI floating badge */}
            <div className="absolute -right-4 top-6 rotate-6 rounded-2xl border border-[color:var(--gold)]/40 bg-white/95 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-extrabold text-[color:var(--gold)]">{t("hero.badge.oapi")}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--forest)]" />
              </div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-[color:var(--forest)]/60">{t("hero.badge.oapiSub")}</div>
            </div>

            {/* 5% Pledge floating */}
            <div className="absolute -left-6 top-24 -rotate-6 rounded-2xl bg-[color:var(--forest)] px-3 py-2 shadow-[var(--shadow-lift)]">
              <div className="font-display text-2xl font-black leading-none text-[color:var(--gold)]">{t("hero.badge.pledge")}</div>
              <div className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-[color:var(--cream)]/80">{t("hero.badge.pledgeSub")}</div>
            </div>

            {/* Mobile Money floating */}
            <div className="absolute -left-4 bottom-16 rotate-3 rounded-2xl border border-[color:var(--forest)]/10 bg-[color:var(--gold)] px-3 py-2 shadow-[var(--shadow-soft)]">
              <div className="font-display text-xs font-black text-[color:var(--forest)]">{t("hero.badge.money")}</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-[color:var(--forest)]/70">{t("hero.badge.moneySub")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function SectionKicker({ kicker, title, tone = "light" }: { kicker: string; title: string; tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.15em] ${
        isDark ? "bg-[color:var(--cream)]/15 text-[color:var(--cream)]" : "bg-[color:var(--gold)]/15 text-[color:var(--forest)]"
      }`}>{kicker}</span>
      <h2 className={`mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-[42px] ${
        isDark ? "text-[color:var(--cream)]" : "text-[color:var(--forest)]"
      }`}>{title}</h2>
    </div>
  );
}

function Why() {
  const { t } = useI18n();
  const items = [
    { icon: Bell, k: "1" },
    { icon: TrendingUp, k: "2" },
    { icon: ShieldCheck, k: "3" },
  ];
  return (
    <section className="bg-[color:var(--cream)]/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionKicker kicker={t("why.kicker")} title={t("why.title")} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, k }) => (
            <div key={k} className="group rounded-3xl bg-white p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--forest)] text-[color:var(--cream)]">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-[color:var(--forest)]">{t(`why.${k}.title`)}</h3>
              <p className="mt-3 text-[color:var(--ink)]/70">{t(`why.${k}.body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  const { t } = useI18n();
  const items = [
    { icon: Bell, k: "1" },
    { icon: WifiOff, k: "2" },
    { icon: Layers, k: "3" },
    { icon: Sprout, k: "4" },
    { icon: FileBarChart, k: "5" },
    { icon: QrCode, k: "6" },
  ];
  return (
    <section id="product" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionKicker kicker={t("product.kicker")} title={t("product.title")} />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, k }) => (
            <div key={k} className="rounded-2xl border border-[color:var(--forest)]/10 bg-white p-7 transition-all hover:border-[color:var(--gold)]/40 hover:shadow-[var(--shadow-soft)]">
              <Icon className="h-8 w-8 text-[color:var(--gold)]" strokeWidth={2} />
              <h3 className="mt-5 font-display text-lg font-bold text-[color:var(--forest)]">{t(`product.f${k}.title`)}</h3>
              <p className="mt-2 text-sm text-[color:var(--ink)]/70">{t(`product.f${k}.body`)}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-[color:var(--forest)]/10 bg-white p-6 shadow-[var(--shadow-soft)]">
          <img src={cunismartShield.url} alt="CuniSmart Label Qualité" width={80} height={80} className="h-16 w-16 sm:h-20 sm:w-20" />
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-bold text-[color:var(--forest)]">{t("product.label.title")}</p>
            <p className="text-sm text-[color:var(--ink)]/70">{t("product.label.body")}</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <AppButton>{t("product.try")}</AppButton>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  name, price, desc, cta, featured = false, badge,
}: { name: string; price: string; desc: string; cta: string; featured?: boolean; badge?: string }) {
  return (
    <div className={`relative flex flex-col rounded-3xl p-8 ${
      featured
        ? "border-2 border-[color:var(--gold)] bg-white shadow-[var(--shadow-lift)] lg:-translate-y-3"
        : "border border-[color:var(--forest)]/12 bg-white shadow-[var(--shadow-soft)]"
    }`}>
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--gold)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[color:var(--ink)]">
          {badge}
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-[color:var(--forest)]">{name}</h3>
      <div className="mt-4 font-display text-3xl font-extrabold text-[color:var(--ink)]">{price}</div>
      <p className="mt-4 text-sm text-[color:var(--ink)]/70">{desc}</p>
      <div className="mt-8">
        {featured ? <AppButton className="w-full">{cta}</AppButton> : (
          <a
            href={APP_URL} target="_blank" rel="noopener noreferrer"
            className="block w-full rounded-2xl border-2 border-[color:var(--forest)] px-6 py-3 text-center font-display font-semibold text-[color:var(--forest)] transition-colors hover:bg-[color:var(--forest)] hover:text-[color:var(--cream)]"
          >{cta}</a>
        )}
      </div>
    </div>
  );
}

function Pricing() {
  const { t } = useI18n();
  return (
    <section id="pricing" className="bg-[color:var(--cream)]/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionKicker kicker={t("pricing.kicker")} title={t("pricing.title")} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <PriceCard name={t("pricing.free.name")} price={t("pricing.free.price")} desc={t("pricing.free.desc")} cta={t("pricing.free.cta")} />
          <PriceCard name={t("pricing.pro.name")} price={t("pricing.pro.price")} desc={t("pricing.pro.desc")} cta={t("pricing.pro.cta")} featured badge={t("pricing.pro.badge")} />
          <PriceCard name={t("pricing.super.name")} price={t("pricing.super.price")} desc={t("pricing.super.desc")} cta={t("pricing.super.cta")} />
        </div>
        <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-white/60 py-4 text-center text-sm text-[color:var(--forest)]">
          <img src={cunismartShield.url} alt="CuniSmart Label Qualité" width={40} height={40} className="h-10 w-10" />
          <span className="font-medium">{t("pricing.label")}</span>
        </div>
        <div className="mt-6 space-y-3 text-center text-sm text-[color:var(--forest)]">
          <p>{t("pricing.pay")}</p>
          <p className="font-medium">{t("pricing.referral")}</p>
        </div>
      </div>
    </section>
  );
}

function B2B() {
  const { t } = useI18n();
  return (
    <section id="b2b" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[color:var(--forest)] to-[color:var(--forest-deep)] p-8 text-[color:var(--cream)] shadow-[var(--shadow-lift)] sm:p-12 lg:p-16">
          <span className="inline-block rounded-full bg-[color:var(--cream)]/15 px-3 py-1 text-[11px] font-semibold tracking-[0.15em]">
            {t("b2b.kicker")}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">{t("b2b.title")}</h2>
          <p className="mt-5 max-w-2xl text-[color:var(--cream)]/85">{t("b2b.body")}</p>
          <p className="mt-4 text-sm text-[color:var(--gold)]">{t("b2b.partners")}</p>
          <div className="mt-8">
            <WaButton variant="solid">{t("b2b.cta")}</WaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pledge() {
  const { t } = useI18n();
  return (
    <section id="pledge" className="bg-[color:var(--forest)] py-20 text-[color:var(--cream)] lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <span className="inline-block rounded-full bg-[color:var(--cream)]/15 px-3 py-1 text-[11px] font-semibold tracking-[0.15em]">
          {t("pledge.kicker")}
        </span>
        <div className="mt-6 inline-grid h-16 w-16 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--forest)]">
          <Heart className="h-8 w-8" fill="currentColor" />
        </div>
        <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">{t("pledge.title")}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--cream)]/85">{t("pledge.body")}</p>
        <p className="mt-6 text-sm text-[color:var(--gold)]">✓ {t("pledge.note")}</p>
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  const items = [
    { icon: Code2, k: "1", num: "01" },
    { icon: GraduationCap, k: "2", num: "02" },
    { icon: HandHeart, k: "3", num: "03" },
  ];
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionKicker kicker={t("about.kicker")} title={t("about.title")} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, k, num }) => (
            <div key={k} className="rounded-3xl border border-[color:var(--forest)]/10 bg-white p-8">
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--cream)] text-[color:var(--forest)]">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-display text-4xl font-extrabold text-[color:var(--gold)]/40">{num}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-[color:var(--forest)]">{t(`about.${k}.title`)}</h3>
              <p className="mt-3 text-sm text-[color:var(--ink)]/70">{t(`about.${k}.body`)}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm italic text-[color:var(--forest)]/70">{t("about.footer")}</p>
      </div>
    </section>
  );
}

function FinalCta() {
  const { t } = useI18n();
  return (
    <section id="contact" className="bg-[color:var(--forest-deep)] py-20 text-[color:var(--cream)] lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">{t("cta.title")}</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <AppButton>{t("cta.app")}</AppButton>
          <WaButton variant="solid">{t("cta.wa.cm")}</WaButton>
        </div>
        <a
          href={waLink(WA_BJ, t("waMessage"))}
          target="_blank" rel="noopener noreferrer"
          className="mt-6 inline-block text-sm text-[color:var(--cream)]/75 underline underline-offset-4 hover:text-[color:var(--gold)]"
        >
          {t("cta.wa.bj")}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-[color:var(--forest)]/10 bg-[color:var(--paper)] py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#top" className="flex items-center gap-3" aria-label="AgriElev">
            <img src={agrielevLogo.url} alt="AgriElev" className="h-8 w-auto sm:h-10" width={340} height={80} />
          </a>
          <p className="mt-4 text-sm text-[color:var(--ink)]/70">{t("footer.tagline")}</p>
          <div className="mt-4"><LangToggle /></div>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[color:var(--forest)]">{t("footer.nav")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink)]/75">
            <li><a href="#product" className="hover:text-[color:var(--forest)]">{t("nav.product")}</a></li>
            <li><a href="#pricing" className="hover:text-[color:var(--forest)]">{t("nav.pricing")}</a></li>
            <li><a href="#pledge" className="hover:text-[color:var(--forest)]">{t("nav.pledge")}</a></li>
            <li><a href="#about" className="hover:text-[color:var(--forest)]">{t("nav.about")}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[color:var(--forest)]">{t("footer.product")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink)]/75">
            <li><a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--forest)]">cunismart.com</a></li>
            <li><Link to="/terms" className="hover:text-[color:var(--forest)]">{t("footer.terms")}</Link></li>
            <li><Link to="/privacy" className="hover:text-[color:var(--forest)]">{t("footer.privacy")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[color:var(--forest)]">{t("footer.contact")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink)]/75">
            <li><a href={waLink(WA_CM, t("waMessage"))} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--forest)]">🇨🇲 WhatsApp +237 696 603 209</a></li>
            <li><a href={waLink(WA_BJ, t("waMessage"))} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--forest)]">🇧🇯 WhatsApp +229 90 11 39 15</a></li>
            <li><a href="mailto:hello@cunismart.com" className="hover:text-[color:var(--forest)]">hello@cunismart.com</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-[color:var(--forest)]/10 px-4 pt-6 text-center text-xs text-[color:var(--ink)]/55 lg:px-8">
        {t("footer.copy")}
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[color:var(--paper)]">
      <Header />
      <main>
        <Hero />
        <Why />
        <Product />
        <Pricing />
        <B2B />
        <Pledge />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

