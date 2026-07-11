import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — AgriElev" },
      { name: "description", content: "Politique de confidentialité d'AgriElev et de CuniSmart." },
    ],
  }),
});

function PrivacyPage() {
  const { lang, t } = useI18n();
  return (
    <div className="min-h-screen bg-[color:var(--paper)] py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[color:var(--forest)] hover:underline">
          <ArrowLeft className="h-4 w-4" /> {lang === "fr" ? "Retour" : "Back"}
        </Link>
        <h1 className="mt-8 font-display text-4xl font-extrabold text-[color:var(--forest)]">{t("footer.privacy")}</h1>
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
      <p>AgriElev SARL respecte la vie privée de ses utilisateurs et s'engage à protéger les données personnelles collectées via le site www.agrielev.com et l'application CuniSmart.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">1. Données collectées</h2>
      <p>Nom, contact WhatsApp ou email, informations d'élevage saisies dans l'application. Les données d'élevage restent la propriété de l'éleveur.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">2. Utilisation des données</h2>
      <p>Les données sont utilisées uniquement pour fournir le service, améliorer les fonctionnalités et communiquer avec l'utilisateur. Aucune donnée n'est revendue à des tiers.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">3. Stockage et sécurité</h2>
      <p>L'application fonctionne hors-ligne : les données restent localement sur l'appareil. La sauvegarde cloud (offres Pro et Super PRO) est chiffrée en transit.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">4. Droits de l'utilisateur</h2>
      <p>Vous pouvez à tout moment accéder à vos données, les corriger, les exporter ou demander leur suppression en écrivant à hello@cunismart.com.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">5. Cookies</h2>
      <p>Le site utilise uniquement des cookies techniques nécessaires à son fonctionnement.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">6. Contact</h2>
      <p>Pour toute demande : hello@cunismart.com.</p>
    </>
  );
}

function EN() {
  return (
    <>
      <p>AgriElev SARL respects user privacy and is committed to protecting personal data collected through www.agrielev.com and the CuniSmart application.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">1. Data collected</h2>
      <p>Name, WhatsApp or email contact, and livestock information entered in the app. Livestock data remains the property of the farmer.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">2. Use of data</h2>
      <p>Data is used only to provide the service, improve features and communicate with users. No data is sold to third parties.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">3. Storage and security</h2>
      <p>The app is offline-first: data stays locally on the device. Cloud backup (Pro and Super PRO plans) is encrypted in transit.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">4. User rights</h2>
      <p>You may at any time access, correct, export or request deletion of your data by writing to hello@cunismart.com.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">5. Cookies</h2>
      <p>The website uses only technical cookies required for its operation.</p>
      <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">6. Contact</h2>
      <p>For any request: hello@cunismart.com.</p>
    </>
  );
}
