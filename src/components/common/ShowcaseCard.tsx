interface ShowcaseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  stats: { label: string; value: string }[];
  url: string;
}

export function ShowcaseCard({
  title,
  description,
  stats,
  url,
}: ShowcaseCardProps) {
  return (
    <div className="group bg-primary relative overflow-hidden p-4 sm:p-6 md:p-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />

      <div className="relative flex h-full flex-col justify-between gap-6 md:gap-8">
        {/* Top Section with Content and Image */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-8">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-sans text-xl font-bold text-pretty text-gray-100 sm:text-2xl md:text-3xl lg:text-5xl">
              {title}
            </h3>
            <p className="text-smtext-gray-800/90 sm:text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* Image */}
          {/* <div className="relative w-full sm:w-[35%]">
            <img
              src={imageUrl}
              alt={title}
              className="h-48 w-full rounded-sm object-cover sm:h-60"
            />
          </div> */}
        </div>

        {/* Bottom Section with Stats and CTA */}
        <div className="mt-auto space-y-6 sm:space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 px-2 sm:px-4">
            {stats.map((stat, index) => (
              <div key={index} className="px-4 text-center">
                <div className="font-boldtext-gray-800 text-lg sm:text-xl">
                  {stat.value}
                </div>
                <div className="text-xstext-gray-800/75 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-left">
            <a
              href={url}
              className="border-primary/70 hover:border-primary text-smtext-gray-800 inline-block border-2 px-4 py-2 transition-colors sm:px-6 sm:text-base"
            >
              Read Case Study
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
