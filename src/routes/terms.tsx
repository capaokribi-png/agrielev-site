import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Conditions d'utilisation — AgriElev" },
      { name: "description", content: "Conditions d'utilisation du site AgriElev et de l'application CuniSmart." },
    ],
  }),
});

function TermsPage() {
  const { lang, t } = useI18n();
  return (
    <div className="min-h-screen bg-[color:var(--paper)] py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[color:var(--forest)] hover:underline">
          <ArrowLeft className="h-4 w-4" /> {lang === "fr" ? "Retour" : "Back"}
        </Link>
        <h1 className="mt-8 font-display text-4xl font-extrabold text-[color:var(--forest)]">{t("footer.terms")}</h1>
        <div className="prose prose-neutral mt-8 space-y-6 text-[color:var(--ink)]/80">
          {lang === "fr" ? <FR /> : <EN />}
        </div>
        <p className="mt-12 text-xs text-[color:var(--ink)]/50">{t("footer.copy")}</p>
      </div>
    </div>
  );
}

function FR() {
  return (
    <>
      <p>Les présentes conditions régissent l'accès et l'utilisation du site www.agrielev.com et de l'application CuniSmart, éditée par AgriElev SARL, société de droit camerounais dont le siège est à Kribi, Cameroun.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">1. Objet</h2>
      <p>AgriElev propose des logiciels de gestion d'élevage à destination des petits et moyens éleveurs d'Afrique. L'utilisation de l'application CuniSmart est proposée en formule gratuite et en formules payantes annuelles.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">2. Compte utilisateur</h2>
      <p>L'utilisateur s'engage à fournir des informations exactes lors de la création de son compte et à préserver la confidentialité de ses identifiants.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">3. Abonnements et paiement</h2>
      <p>Les paiements des offres Pro et Super PRO s'effectuent par Mobile Money. Les tarifs sont exprimés en francs CFA (FCFA) et renouvelables annuellement.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">4. Propriété intellectuelle</h2>
      <p>L'ensemble des contenus, marques et logiciels demeurent la propriété exclusive d'AgriElev SARL. La marque CuniSmart fait l'objet d'un dépôt en cours auprès de l'OAPI.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">5. Responsabilité</h2>
      <p>AgriElev met tout en œuvre pour assurer la disponibilité du service mais ne peut être tenue responsable des interruptions liées aux réseaux ou aux services tiers.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">6. Contact</h2>
      <p>Pour toute question : hello@cunismart.com.</p>
    </>
  );
}

function EN() {
  return (
    <>
      <p>These terms govern access to and use of www.agrielev.com and the CuniSmart application, published by AgriElev SARL, a company incorporated under the laws of Cameroon and headquartered in Kribi, Cameroon.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">1. Purpose</h2>
      <p>AgriElev provides livestock management software for small and medium farmers in Africa. CuniSmart is offered as a free tier and as annual paid tiers.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">2. User account</h2>
      <p>Users must provide accurate information when creating an account and keep their credentials confidential.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">3. Subscriptions and payment</h2>
      <p>Pro and Super PRO subscriptions are paid via Mobile Money. Prices are stated in CFA francs (FCFA) and renew annually.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">4. Intellectual property</h2>
      <p>All content, trademarks and software remain the exclusive property of AgriElev SARL. The CuniSmart trademark filing is in progress with OAPI.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">5. Liability</h2>
      <p>AgriElev does its best to ensure service availability but is not responsible for interruptions caused by networks or third-party services.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">6. Contact</h2>
      <p>For any question: hello@cunismart.com.</p>
    </>
  );
}
