import Link from "next/link";
import SingleContentPage from "@/components/pages/SingleContentPage";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5 border-t border-neutral-200 pt-8">
      <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Entry({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
      {meta ? <p className="text-sm text-neutral-500">{meta}</p> : null}
      {children ? (
        <div className="leading-7 text-neutral-700">{children}</div>
      ) : null}
    </div>
  );
}

export default function CvPage() {
  return (
    <SingleContentPage
      eyebrow="Curriculum Vitae"
      title="Tamar Ron Marvin, Ph.D."
      description="Historian of Jewish thought working at the intersection of medieval intellectual history, rationalist philosophy and Kabbalah, and the interpretive traditions through which Jewish texts generate meaning across manuscript, print, and digital cultures."
      rail={
        <div className="space-y-8 text-sm text-neutral-600">
          <div className="space-y-2">
            <div className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
              Contact
            </div>
            <p>Los Angeles, California</p>
            <a
              href="mailto:trmarvin@gmail.com"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
            >
              trmarvin@gmail.com
            </a>
            <div>
              <Link
                href="/"
                className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
              >
                trmarvin.org
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
              Download
            </div>
            <a
              href="/cv/tamar-marvin-cv.pdf"
              download
              className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-500 hover:text-neutral-900"
            >
              PDF CV
            </a>
          </div>
        </div>
      }
      body={
        <div className="space-y-10">
          <Section title="Books & Major Projects">
            <div className="space-y-6">
              <Entry
                title="Rishonim: An Intellectual History of Medieval Judaism"
                meta="Jewish Publication Society, forthcoming"
              />
              <Entry
                title="The Crisis of Meaning in Medieval Judaism: Philosophy and Kabbalah"
                meta="Book project in progress"
              />
            </div>
          </Section>

          <Section title="Peer-Reviewed Articles">
            <div className="space-y-6">
              <Entry
                title="A Heretic From a Good Family?: A New Look at Why Levi b. Abraham b. Ḥayyim Was Hounded"
                meta="AJS Review 41, no. 1 (2017): 175–201"
              />
              <Entry
                title="Sites of Controversy: Jews Debating Philosophy between Iberia and Occitania in the Fourteenth Century"
                meta="Medieval Encounters 24 (2018): 631–648"
              />
            </div>
          </Section>

          <Section title="Book Chapter & Public Scholarship">
            <div className="space-y-6">
              <Entry
                title="The Radical Rationalist: Maimonides Reshapes Rabbinic Discourse"
                meta="In Re-Forming Judaism: Moments of Disruption in Jewish Thought, CCAR Press, 2023"
              />
              <Entry
                title="One Truth or Multiple Meanings? Interpreting Fact in Jewish Medieval Culture"
                meta="Kenraith, 2024"
              />
              <Entry
                title="On Building a Better World: The Tension in Jewish Thought Between Yeridat ha-Dorot and Aliyat ha-Dorot"
                meta="The Lehrhaus, 2023"
              />
              <Entry
                title="Lost Literary Worlds: A Review of David Torollo’s edition of Yedaya ha-Penini’s Sefer ha-Pardes"
                meta="The Lehrhaus, 2023"
              />
            </div>
          </Section>

          <Section title="Work in Progress">
            <div className="space-y-3 leading-7 text-neutral-700">
              <p>The Age of the Jewish Commentator.</p>
              <p>Digital Commentary and the Future of the Beit Midrash.</p>
            </div>
          </Section>

          <Section title="Teaching & Academic Appointments">
            <div className="space-y-6">
              <Entry
                title="Faculty, Wexner Heritage Foundation"
                meta="Seattle, 2020"
              >
                <p>
                  Lecturer in medieval Jewish history, 500–1500, as part of a
                  team-taught year-long course in Jewish history.
                </p>
              </Entry>

              <Entry
                title="Adjunct Professor, Hebrew Union College–Jewish Institute of Religion"
                meta="Los Angeles, 2018–19"
              >
                <p>
                  Seminar on medieval Bible commentaries; advanced text-based
                  instruction focused on interpretive methodology.
                </p>
              </Entry>

              <Entry
                title="Adjunct Professor, American Jewish University"
                meta="Los Angeles, 2017–19"
              >
                <p>
                  Seminars on medieval Bible commentaries taught in the original
                  language.
                </p>
              </Entry>

              <Entry
                title="Adjunct Online Professor, Jewish Theological Seminary"
                meta="New York, 2014, 2016, 2018"
              >
                <p>
                  Developed and taught an online iteration of Classics of the
                  Jewish Tradition, a required graduate course spanning Jewish
                  thought from the Middle Ages to the present.
                </p>
              </Entry>
            </div>
          </Section>

          <Section title="Selected Lectures & Conference Presentations">
            <div className="space-y-3 leading-7 text-neutral-700">
              <p>
                “The Reconstitution of Occitan Jewish Culture after the French
                Expulsions,” American Historical Association, 2015.
              </p>
              <p>
                “Was There a Medieval Mediterranean Jewry?: The Case of
                Occitania, Epicenter of the Maimonidean Controversies,”
                Association for Jewish Studies, 2014.
              </p>
              <p>
                “Tolerance of Theological Differences Among Medieval Jewish
                Intellectuals During the Last Maimonidean Controversy,” Medieval
                Academy of America, 2014.
              </p>
              <p>
                “Debating Philosophy in the Medieval Jewish Community of
                Montpellier,” American Historical Association, 2014.
              </p>
              <p>
                “The Social Lives of the Minḥat Qenaʾot Letters from the
                1304–1306 Maimonidean Controversy,” Association for Jewish
                Studies, 2013.
              </p>
            </div>
          </Section>

          <Section title="Fellowships & Honors">
            <div className="space-y-3 leading-7 text-neutral-700">
              <p>Sefaria Word-by-Word Writing Fellow, 2023–2026</p>
              <p>
                Emerging Scholar, Paula E. Hyman Mentorship Program of HUC and
                the AJS Women’s Caucus, 2016
              </p>
              <p>Travel Subvention Grant, University of Pennsylvania, 2013</p>
              <p>
                Charles H. Revson Fellowship in Advanced Jewish Studies, Jewish
                Theological Seminary, 2005–2010
              </p>
            </div>
          </Section>

          <Section title="Digital Scholarship & Projects">
            <div className="space-y-6">
              <Entry title="SeforimTracker">
                <p>
                  Digital platform for tracking engagement with classical Jewish
                  texts and mapping reading practices across the Jewish textual
                  canon.
                </p>
              </Entry>

              <Entry title="Digital Beit Midrash">
                <p>
                  Ongoing digital humanities project exploring Jewish commentary
                  traditions through structured text, annotation, and
                  interpretive layering.
                </p>
              </Entry>

              <Entry title="Stories from Jewish History">
                <p>
                  Scholarly newsletter examining Jewish intellectual history,
                  textual traditions, and ideas across the centuries.
                </p>
              </Entry>
            </div>
          </Section>

          <Section title="Digital Methods & Technical Expertise">
            <div className="space-y-3 leading-7 text-neutral-700">
              <p>Web development: JavaScript, Node.js, React, Next.js</p>
              <p>CMS development: WordPress (custom themes/plugins)</p>
              <p>Database design: PostgreSQL, Prisma</p>
              <p>Digital humanities and structured text systems</p>
            </div>
          </Section>

          <Section title="Education">
            <div className="space-y-6">
              <Entry
                title="Ph.D., Medieval and Early Modern Jewish Studies"
                meta="Jewish Theological Seminary, New York, 2013"
              >
                <p>
                  Dissertation: “The Controversy over Ideational Transgression
                  in Fourteenth-Century Jewish Occitania and the Making of
                  Minḥat Qenaʾot.” Advisor: Prof. Benjamin R. Gampel.
                </p>
              </Entry>

              <Entry
                title="Rabbinic Ordination"
                meta="Yeshivat Maharat, New York, 2024"
              />

              <Entry
                title="M.A., Medieval and Early Modern Jewish Studies"
                meta="Jewish Theological Seminary, New York, 2005"
              />

              <Entry
                title="B.A., Literature and Journalism, summa cum laude, Phi Beta Kappa"
                meta="New York University, New York, 2000"
              />
            </div>
          </Section>

          <Section title="Affiliations & Languages">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 leading-7 text-neutral-700">
                <h3 className="text-base font-medium text-neutral-900">
                  Affiliations
                </h3>
                <p>Association for Jewish Studies</p>
                <p>Medieval Academy of America</p>
                <p>American Historical Association</p>
                <p>American Academy of Religion</p>
                <p>
                  Society for the History of Authorship, Reading and Publishing
                </p>
              </div>

              <div className="space-y-3 leading-7 text-neutral-700">
                <h3 className="text-base font-medium text-neutral-900">
                  Languages
                </h3>
                <p>Hebrew — native fluency</p>
                <p>Aramaic — research proficiency</p>
                <p>French — reading knowledge</p>
                <p>Latin — reading knowledge</p>
                <p>Arabic — reading knowledge</p>
                <p>German — reading knowledge</p>
              </div>
            </div>
          </Section>
        </div>
      }
    />
  );
}
