import { gridClass } from "@/lib/class-utils";
import { usesData } from "./data";

export default function Uses() {
  return (
    <article className={gridClass}>
      <div className="pb-8 space-y-8">
        <h1 className="text-4xl font-semibold">Uses</h1>

        <p className="text-lg">
          Here&apos;s a breakdown of the tools and stuff I use day-to-day.
        </p>
      </div>

      {usesData.map((section) => (
        <section
          className="space-y-8 py-4"
          key={section.title.split(" ").join("-")}
        >
          <h2 className="text-3xl">{section.title}</h2>

          {section.items.length > 0 && (
            <dl className="space-y-2">
              {section.items.map(({ name, desc }) => {
                const Desc = desc;
                return (
                  <div key={name.toLowerCase().split(" ").join("-")}>
                    <dt className="text-xl">{name}</dt>
                    <dd className="pb-4">
                      <Desc />
                    </dd>
                  </div>
                );
              })}
            </dl>
          )}
        </section>
      ))}
    </article>
  );
}
