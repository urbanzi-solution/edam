export default function sitemap() {
  const baseUrl = "https://www.edamdesignstudio.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },

    // ✅ Service sub-pages
    {
      url: `${baseUrl}/services/construction`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/interior-design`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/mep-services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/post-construction`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/remodelling`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/renovation`,
      lastModified: new Date(),
    },
  ];
}