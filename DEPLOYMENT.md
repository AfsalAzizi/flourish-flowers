# Deployment Guide for Flourish Flowers

This guide covers how to deploy the Flourish Flowers Next.js application using Docker and Vercel.

## 🐳 Docker Deployment

### Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier development)

### Local Docker Development

1. **Build and run with Docker Compose (Recommended):**

   ```bash
   npm run docker:dev
   ```

2. **Build and run manually:**

   ```bash
   npm run docker:build
   npm run docker:run
   ```

3. **Production Docker setup:**
   ```bash
   npm run docker:prod
   ```

### Docker Configuration Features

Our optimized Dockerfile includes:

- **Multi-stage builds** for smaller image sizes
- **Standalone output** for optimized production builds
- **Non-root user** for enhanced security
- **Telemetry disabled** for privacy
- **Alpine Linux** for minimal footprint
- **Health checks** via Docker Compose

### Environment Variables

Create a `.env.local` file for local development:

```bash
CUSTOM_KEY=your_custom_value_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## ☁️ Vercel Deployment

### Prerequisites

- Vercel CLI installed: `npm i -g vercel`
- Vercel account

### Quick Deploy

1. **Preview deployment:**

   ```bash
   npm run vercel:preview
   ```

2. **Production deployment:**
   ```bash
   npm run vercel:deploy
   ```

### Vercel Configuration Features

Our `vercel.json` includes:

- **Security headers** (X-Frame-Options, X-XSS-Protection, etc.)
- **Optimized caching** for static assets and images
- **SPA rewrites** for client-side routing
- **Next.js framework detection**
- **Performance optimizations**

### Environment Variables on Vercel

Set these in your Vercel dashboard:

- `CUSTOM_KEY`
- `NEXT_PUBLIC_APP_URL`

## 🔧 Next.js Configuration

Our optimized `next.config.ts` includes:

- **Standalone output** for Docker
- **Image optimization** with WebP and AVIF support
- **CSS optimization**
- **Compression enabled**
- **Security headers**
- **Production source maps disabled**

## 📦 Available Scripts

```bash
# Development
npm run dev                 # Start development server
npm run build              # Build for production
npm run start              # Start production server
npm run lint               # Run ESLint

# Docker
npm run docker:build       # Build Docker image
npm run docker:run         # Run Docker container
npm run docker:dev         # Development with Docker Compose
npm run docker:prod        # Production with Docker Compose

# Vercel
npm run vercel:preview     # Deploy preview to Vercel
npm run vercel:deploy      # Deploy to production on Vercel
```

## 🚀 Performance Optimizations

1. **Image Optimization:**

   - Automatic WebP/AVIF conversion
   - Responsive images with Next.js Image component
   - CDN caching headers

2. **Build Optimizations:**

   - Standalone output for smaller Docker images
   - CSS optimization
   - Tree shaking
   - Code splitting

3. **Caching Strategy:**
   - Static assets cached for 1 year
   - Next.js static files optimized
   - Browser caching headers

## 🔒 Security Features

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection enabled
- Referrer-Policy configured
- No powered-by header exposure
- Production source maps disabled

## 🐛 Troubleshooting

### Docker Issues

- If build fails, try: `docker system prune` and rebuild
- For permission issues, ensure Docker has proper permissions
- Check logs with: `docker logs <container-name>`

### Vercel Issues

- Ensure environment variables are set correctly
- Check build logs in Vercel dashboard
- Verify `vercel.json` syntax

### Performance Issues

- Enable image optimization
- Check bundle size with `npm run build`
- Monitor Core Web Vitals in production

## 📝 Notes

- The app is optimized for both Docker and Vercel deployments
- Docker uses standalone output for minimal image size
- Vercel configuration includes all necessary optimizations
- All security headers are configured for production use
