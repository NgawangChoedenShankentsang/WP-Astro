# Astro + WordPress Headless CMS

This project is a minimal Headless CMS setup built using [Astro](https://astro.build/) for the frontend and [WordPress](https://wordpress.org/) as a headless backend. WordPress delivers content via the WPGraphQL API, and images are served through Cloudinary to avoid direct WordPress dependency for media delivery.

## ✨ Tech Stack

- **Frontend**: Astro
- **Backend**: WordPress (headless mode)
- **API**: WPGraphQL plugin
- **Image Handling**: Cloudinary plugin
- **Language**: TypeScript (for API integration)



## 🚀 Features

- Blog posts fetched dynamically from WordPress via GraphQL.
- Clean separation of content and presentation.
- Image delivery via Cloudinary (faster, CDN-optimized).
- SEO-friendly routing with dynamic blog pages.
- Astro’s island architecture for performance.



## 📁 Project Structure



```text
/
├── pages/
│ ├── index.astro // Blog post listing (homepage)
│ └── blog/[slug].astro // Individual blog post page
│
├── data/
│ └── wordpress.ts // Fetch function for WPGraphQL
│
├── layouts/
│ └── Layout.astro // Shared layout for pages
```




## 🔧 WordPress Setup

Make sure your WordPress instance includes the following plugins:

- ✅ [WPGraphQL](https://www.wpgraphql.com/)
- ✅ [Cloudinary – Image CDN](https://wordpress.org/plugins/cloudinary-image-management-and-manipulation-in-the-cloud-cdn/)

**Cloudinary** handles media delivery, so blog images are not directly served from WordPress, improving performance and security.


## 📦 Installation

1. Clone the repository.
2. Install dependencies:

```bash
   npm install
```
3. Update the GraphQL endpoint in data/wordpress.ts:

```bash
   const res = await fetch('http://your-wp-domain/graphql', { ... });
```
4. Run the Astro dev server:
```bash
   npm run dev
```


## 🧠 How it works
- pages/index.astro: Fetches all posts with title, slug, and excerpt.

- pages/blog/[slug].astro: Uses getStaticPaths() to generate dynamic routes for each post.

- wpquery(): Sends GraphQL queries to the WP backend and returns the parsed result.

- Cloudinary images are rendered with srcSet, sizes, and altText for responsive design and accessibility.

## 🔗 Live Demo

👉 [View Demo](https://chic-chimera-d3dcff.netlify.app/)
