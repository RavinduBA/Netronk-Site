import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

function sortPosts(
  a: { data: { publishDate: Date } },
  b: { data: { publishDate: Date } },
) {
  return Number(b.data.publishDate) - Number(a.data.publishDate);
}

function formatDate(date: Date) {
  date.setUTCHours(0);
  return date;
}

export const GET: APIRoute = async (context) => {
  const unsortedPosts = [
    ...(await getCollection("blog")),
    ...(await getCollection("works")),
    ...(await getCollection("services")),
    ...(await getCollection("technologies")),
  ];
  const posts = unsortedPosts.sort((a, b) => sortPosts(a, b));

  return rss({
    // The RSS Feed title, description, and custom metadata.
    title: "Netronk Insights: Exploring New Frontiers in Technology",
    // See "Styling" section below
    description:
      "Stay updated with the Netronk Blog as we delve into the latest advancements and innovations in the world of technology.",
    site: context.site!.href,
    // The list of items for your RSS feed, sorted.
    items: posts.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      link: item.data.canonicalURL,
      pubDate: formatDate(item.data.publishDate),
    })),
    stylesheet: "/rss/styles.xsl",
  });
};
