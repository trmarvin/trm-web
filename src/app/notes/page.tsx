import { getNotes } from "@/lib/strapi";
import { ContentCard } from "@/components/lists/ContentCard";

type Note = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
};

const notes: Note[] = await getNotes();

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Notes</h1>

      <div className="mt-10 space-y-10">
        {notes.map((note: any) => (
          <ContentCard
            key={note.id}
            href={`/notes/${note.slug}`}
            title={note.title}
            excerpt=""
          />
        ))}
      </div>
    </main>
  );
}
