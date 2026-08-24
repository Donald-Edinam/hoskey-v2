import { MetadataRoute } from "next";
import { SITE } from "@/lib/config";
import { getProjects, getServices, getTeam } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE.url;
  const now = new Date();

  const projects = await getProjects();
  const services = await getServices();
  const team = await getTeam();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/studios`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  if (team && team.length > 0) {
    staticRoutes.push({ url: `${baseUrl}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const teamRoutes: MetadataRoute.Sitemap = (team && team.length > 0)
    ? team.filter((m) => Boolean(m.bio)).map((m) => ({
        url: `${baseUrl}/team/${m.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      }))
    : [];

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...teamRoutes];
}
