const fs = require("fs");

const pages = ["/", "/about", "/services", "/portfolio", "/contact"];
const domain = "https://www.adityatechndevoops.web.app";

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${domain}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemapContent);
console.log("Sitemap generated!");
