const siteUrl = "https://www.ourweb.blog";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  priority: 1.0,
  changefreq: "monthly",
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.ourweb.blog/sitemap-0.xml"],
  },
};
