import { ShowcaseCard } from "../common/ShowcaseCard";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "../shared/Carousel";

export function WorksCarousel() {
  const showcaseProjects = [
    {
      title: "E-commerce Redesign",
      description:
        "A complete overhaul of an outdated online store, resulting in a 200% increase in conversions.",
      imageUrl:
        "https://www.cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F281NSZSG7VvkxHDig0qbBA%2Fc401d6edf09f76da70a0b24a6b1f91d2%2FImage_wrapper.png&w=3840&q=80",
      stats: [
        { label: "Conversion Rate", value: "+200%" },
        { label: "Page Load Time", value: "-60%" },
        { label: "User Satisfaction", value: "98%" },
      ],
      url: "/works/ecommerce-redesign",
    },
    {
      title: "Mobile App Development",
      description:
        "Innovative fitness tracking app with over 1 million downloads in the first month.",
      imageUrl:
        "https://www.cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F6fzX5qqUllTtgnYyzDomNy%2F38eee38f4cf7eb224919b21aac6f0fb4%2Favionica.png&w=3840&q=80",
      stats: [
        { label: "Downloads", value: "1M+" },
        { label: "Active Users", value: "500K" },
        { label: "App Store Rating", value: "4.8" },
      ],
      url: "/works/mobile-app-development",
    },
    // Add more showcase projects as needed
  ];
  return (
    <div className="relative my-8 w-full text-white md:my-20">
      <Carousel>
        <CarouselContent className="">
          {showcaseProjects.map((project, index) => (
            <CarouselItem key={index} className="">
              <ShowcaseCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation
          className="absolute top-auto -bottom-20 left-auto w-full justify-end gap-2"
          classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}
