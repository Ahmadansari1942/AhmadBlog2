# 📝 AhmadBlog2

A beautiful, fully-featured React blog application — deployable on **AWS Amplify** in minutes.

> Built with React 18 · React Router v6 · Lucide Icons · Pure CSS — **zero UI library dependencies**

---

## 🖥️ Live Preview

Deploy to AWS Amplify and your blog is live at:
```
https://<branch>.<app-id>.amplifyapp.com
```

---

## ✨ Features

- **Home** — Hero section, animated stats, category filter, featured article, article grid
- **Article Detail** — Full article view, author card, related articles, share button
- **About** — Mission, values grid, team section
- **Contact** — Contact form with loading/success states
- **Create Article** — Submission form with live image preview
- **Search** — Instant search across all articles via navbar
- **Responsive** — Fully mobile-friendly with hamburger menu
- **Dark Theme** — Rich dark aesthetic with gradient accents
- **SPA Routing** — All routes handled client-side (Amplify redirect configured)

---

## 📁 Project Structure

```
AhmadBlog2/
├── public/
│   ├── index.html          # HTML entry point
│   └── _redirects          # SPA redirect rule for Amplify
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   ├── Footer.js / .css
│   │   ├── ArticleCard.js / .css
│   │   └── CategoryFilter.js / .css
│   ├── pages/
│   │   ├── Home.js / .css
│   │   ├── ArticleDetail.js / .css
│   │   ├── About.js / .css
│   │   ├── Contact.js / .css
│   │   └── CreateArticle.js / .css
│   ├── data/
│   │   └── articles.js     # All blog data (articles, authors, categories)
│   ├── App.js              # Routes setup
│   ├── App.css
│   ├── index.js            # React entry point
│   └── index.css           # Global styles & CSS variables
├── amplify.yml             # AWS Amplify build configuration
├── package.json
└── .gitignore
```

---

## 🚀 Deploy on AWS Amplify — Step by Step

### Step 1: Push to GitHub

```bash
# Inside the AhmadBlog folder
git init
git add .
git commit -m "Initial commit — AhmadBlog"
git branch -M main
git remote add origin https://github.com/Ahmadansari1942/AhmadBlog.git
git push -u origin main
```

### Step 2: Open AWS Amplify Console

1. Go to [https://console.aws.amazon.com/amplify](https://console.aws.amazon.com/amplify)
2. Click **"New App"** → **"Host web app"**
3. Select **GitHub** → Authorize → Choose repo **Ahmadansari1942/AhmadBlog**
4. Select branch: **main**

### Step 3: Build Settings

Amplify will auto-detect `amplify.yml`. Verify it shows:

| Setting        | Value        |
|----------------|--------------|
| Build command  | `npm run build` |
| Output dir     | `build`      |
| Node version   | 18.x (default) |

Click **"Save and deploy"** ✅

### Step 4: Fix SPA Routing (Important!)

After first deploy, go to:

**App settings → Rewrites and redirects → Add rule:**

| Source         | Target        | Type |
|----------------|---------------|------|
| `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|js\|png\|txt\|svg\|woff\|woff2\|ttf\|map\|json)$)([^.]+$)/>` | `/index.html` | 200 |

This ensures React Router handles all routes correctly.

### Step 5: Done! 🎉

Your blog is live at:
```
https://main.<your-app-id>.amplifyapp.com
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm start

# Build for production
npm run build
```

---

## 🛠️ Customization

### Add New Articles
Edit `src/data/articles.js` — add a new object to the `ARTICLES` array:

```js
{
  id: 16,
  slug: "my-new-article",
  title: "My New Article",
  excerpt: "A short summary...",
  content: `Paragraph one.\n\nParagraph two.`,
  category: "web",        // must match a CATEGORIES id
  author: AUTHORS[0],
  date: "March 16, 2026",
  readTime: "5 min",
  featured: false,
  image: "https://...",
  tags: ["Tag1", "Tag2"],
}
```

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-orange: #ff6b35;
  --accent-purple: #7c5cbf;
  /* ... */
}
```

### Add New Category
Add to `CATEGORIES` array in `src/data/articles.js` and add the corresponding Lucide icon to `CategoryFilter.js`.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI library |
| react-dom | ^18.2.0 | DOM rendering |
| react-router-dom | ^6.22.0 | Client-side routing |
| react-scripts | 5.0.1 | Build tooling (CRA) |
| lucide-react | ^0.383.0 | Icon library |

---

## 👤 Author

**Ahmad Ansari**  
GitHub: [@Ahmadansari1942](https://github.com/Ahmadansari1942)

---

## 📄 License

MIT — free to use, modify, and distribute.
