# Coolify Deployment Guide for Soma Kiran Gonella Thought Leadership Platform

This repository is pre-configured and optimized for 1-click or Git-based deployment on **Coolify**.

---

## 🛠 What Has Been Configured

1. **`next.config.mjs`**: Configured with `output: 'standalone'` for ultra-lightweight, high-performance containerized execution.
2. **`Dockerfile`**: Production multi-stage Alpine Docker build with security best practices (non-root `nextjs` user, caching, minimal runtime image size).
3. **`docker-compose.yml`**: Out-of-the-box Compose definition ready for Coolify's Docker Compose application type.
4. **`.dockerignore`**: Excludes `.next`, `node_modules`, and local files to ensure fast build times.
5. **Port**: Application listens on port `3000` (mapped to `0.0.0.0`).

---

## 🚀 Deployment Options in Coolify

### Option A: Via Git Repository (Recommended)
1. Push this project to your GitHub, GitLab, or Git repository:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. In your Coolify dashboard:
   - Click **+ Create Resource** → **Application** → **Public/Private Repository**.
   - Select or paste your Git repository URL.
   - Build Pack: Select **Dockerfile** or **Nixpacks** (Coolify will automatically detect the root `Dockerfile`).
   - Port: Set **3000**.
   - Domains: Add your custom domain (e.g., `somakirangonella.com` or your Coolify sub-domain).
3. Click **Deploy**.

---

### Option B: Via Coolify Webhook / Docker Compose
1. In Coolify, select **+ Create Resource** → **Application** → **Docker Compose**.
2. Paste the contents of `docker-compose.yml` from this repository.
3. Set your domain and click **Deploy**.

---

## ⚙️ Environment Variables (Optional)

Configure these in Coolify's **Environment Variables** tab if needed:
- `PORT`: `3000` (default)
- `NODE_ENV`: `production`
- `RESEND_API_KEY`: *(Optional, for live contact form email notifications)*
- `CONTACT_NOTIFICATION_EMAIL`: `soma.kiran20@gmail.com` *(Optional)*
