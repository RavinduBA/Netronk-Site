import { useState } from "react";
import { TransitionPanel } from "../core/transition-panel";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    {
      title: "Shopify Solutions",
      subtitle: "Customized e-commerce solutions tailored for growth",
      description:
        "We specialize in developing robust Shopify stores that align with your brand's vision and business goals. Our team handles everything from theme customization and advanced functionality integration to performance optimization. We focus on creating a seamless shopping experience for your customers, ensuring scalability, security, and conversion-focused design.",
      techStack: [
        "Shopify",
        "Remix",
        "Next Js",
        "Tailwind CSS",
        "GraphQL",
        "Shopify APIs",
      ],
    },
    {
      title: "App Development",
      subtitle: "Innovative and scalable mobile and web applications",
      description:
        "We design and develop feature-rich mobile and web applications that deliver intuitive user experiences and seamless functionality. Our process involves detailed planning, wireframing, and iterative prototyping, ensuring that the final product is both scalable and secure. We focus on cross-platform compatibility and performance, creating apps that drive engagement and growth.",
      techStack: ["React Native", "Flutter", "Firebase"],
    },
    {
      title: "Website Development",
      subtitle: "End-to-end responsive and interactive web solutions",
      description:
        "Our website design and development services cover everything from concept to deployment. We create responsive, user-friendly websites that reflect your brand identity and engage your audience. Using modern technologies, we ensure fast-loading, SEO-friendly websites with intuitive navigation, custom features, and powerful backend infrastructure.",
      techStack: ["Next.js", "Astro Js", "Tailwind CSS", "Node.js", "Hono Js"],
    },
    {
      title: "Illustration & Multimedia",
      subtitle: "High-quality visual content for enhanced storytelling",
      description:
        "We create engaging multimedia content, including custom illustrations, animations, and high-quality photo and video production. Our visual assets are designed to enhance your brand's story, convey complex messages effectively, and capture audience attention across digital platforms.",
      techStack: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "After Effects",
        "Premiere Pro",
        "Figma",
        "Blender",
      ],
    },
    {
      title: "Logo Design & Branding",
      subtitle: "Distinctive logos and comprehensive brand identities",
      description:
        "Our creative team crafts memorable logos and cohesive brand identities that resonate with your target audience. We focus on understanding your brand values and creating designs that communicate your message clearly and leave a lasting impression, helping you build a strong brand presence.",
      techStack: ["Adobe Illustrator", "Figma", "Sketch"],
    },
    {
      title: "Social Media Marketing",
      subtitle: "Strategic campaigns to boost online visibility and engagement",
      description:
        "We develop and manage strategic social media marketing campaigns to increase your brand's visibility and foster meaningful connections with your audience. Our services include content creation, targeted ads, performance analysis, and community management across major platforms. We ensure your brand stays relevant and influential in the digital space.",
      techStack: [
        "Meta Ads Manager",
        "Google Analytics",
        "Hootsuite",
        "Canva",
        "Buffer",
        "Sprout Social",
      ],
    },
  ];

  return (
    <div className="pb-8 md:pb-20">
      <div className="py-4 md:py-8">
        <h1 className="text-start font-sans text-3xl font-bold md:text-4xl lg:text-5xl">
          Our Services
        </h1>
      </div>
      <div className="spance-y-2 mb-4 flex flex-col md:flex-row md:space-x-2">
        {ITEMS.map((item, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            key={index}
            className="group relative inline-block px-4 py-2 font-medium"
          >
            <span
              className={`absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0 ${activeIndex === index ? "bg-primary" : "bg-black"}`}
            ></span>
            <span
              className={`absolute inset-0 h-full w-full border-2 bg-white ${activeIndex === index ? "border-primary group-hover:bg-primary" : "border-black group-hover:bg-black"}`}
            ></span>
            <span className="relative font-semibold text-black group-hover:text-white">
              {item.title}
            </span>
          </button>
        ))}
      </div>
      <div className="overflow-hidden">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
        >
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 py-2 pt-4 md:gap-4 md:pt-8"
            >
              <h3 className="text-xl font-semibold text-zinc-900">
                {item.subtitle}
              </h3>
              <p className="text-lg text-zinc-900">{item.description}</p>
              <ul className="flex flex-wrap gap-2">
                {item.techStack.map((tech, index) => (
                  <li
                    key={index}
                    className="border-primary border-1 border-r-2 border-b-2 bg-gray-100 px-2 py-1 text-sm font-semibold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
