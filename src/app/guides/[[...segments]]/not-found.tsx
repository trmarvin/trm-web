// src/app/guides/[[...segments]]/loading.tsx

export default function LoadingGuideRoute() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <div className="space-y-6 animate-pulse">
        <div className="h-4 w-40 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-10 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-6 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800" />

        <div className="space-y-3 pt-6">
          <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </main>
  );
}
