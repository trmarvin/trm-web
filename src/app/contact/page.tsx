import SingleContentPage from "@/components/pages/SingleContentPage";
import Prose from "@/components/content/Prose";

export default function ContactPage() {
  return (
    <SingleContentPage
      eyebrow="Contact"
      title="Get in touch"
      body={
        <div className="space-y-8">
          <Prose>
            <p>
              I welcome inquiries about teaching, speaking, writing, and select
              collaborations.
            </p>
            <p>
              The best way to reach me is by email. I may not be able to respond
              to every message, but I do read them.
            </p>
          </Prose>

          <div>
            <a
              href="mailto:trmarvin@gmail.com"
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-500 hover:text-neutral-900"
            >
              Email Tamar
            </a>
          </div>
        </div>
      }
    />
  );
}
