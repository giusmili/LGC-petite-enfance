"use client";

export default function OfflinePage() {
  return (
    <main className="min-h-dvh grid place-items-center p-8 bg-white text-neutral-900">
      <section className="w-full max-w-[560px] rounded-xl border border-black/10 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
        <h1 className="m-0 mb-2 text-xl font-semibold">Vous êtes hors ligne</h1>
        <p className="m-0 my-1 text-neutral-700">Certains contenus peuvent ne pas être disponibles.</p>
        <p className="m-0 my-1 text-neutral-700">Réessayez lorsque vous serez connecté(e).</p>
        <div className="mt-5 flex gap-3">
          <button onClick={() => location.reload()} className="appearance-none rounded-md border border-black/15 bg-neutral-200 px-3.5 py-2">
            Recharger
          </button>
          <a href="/" className="appearance-none rounded-md border border-black/15 bg-neutral-100 px-3.5 py-2 no-underline">
            Aller à l’accueil
          </a>
        </div>
        <p className="mt-4 text-[0.95rem] text-neutral-600">
          Astuce: ajoutez le site à l’écran d’accueil pour un accès rapide.
        </p>
      </section>
    </main>
  );
}
