# Deployment Guide

## Prerequisites

- Docker and Docker Compose installed on your server
- Git installed on your server
- GitHub account

## Setup GitHub Repository

### 1. Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., `portfolio`)
3. Don't initialize with README (we already have files)

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Deploy to Docker Server

### Option 1: Build and Run with Docker Compose

1. **Clone the repository on your server:**
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

2. **Build and start the container:**
```bash
docker-compose up -d --build
```

3. **Check the logs:**
```bash
docker-compose logs -f
```

4. **Access your site:**
Open http://YOUR_SERVER_IP:3000

### Option 2: Direct Docker Build

1. **Build the image:**
```bash
docker build -t portfolio:latest .
```

2. **Run the container:**
```bash
docker run -d \
  --name portfolio \
  -p 3000:3000 \
  --restart unless-stopped \
  portfolio:latest
```

## Updating Your Site

### From your local machine:
```bash
git add .
git commit -m "Update description"
git push
```

### On your server:
```bash
cd /path/to/your/repo
git pull
docker-compose down
docker-compose up -d --build
```

## Using a Reverse Proxy (Nginx/Traefik)

If you want to use a domain name and SSL:

### Nginx Example
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Update docker-compose.yml for Traefik
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.portfolio.rule=Host(`yourdomain.com`)"
  - "traefik.http.routers.portfolio.entrypoints=websecure"
  - "traefik.http.routers.portfolio.tls.certresolver=myresolver"
```

## Troubleshooting

### Container won't start
```bash
docker logs portfolio-app
```

### Port already in use
Change port in `docker-compose.yml`:
```yaml
ports:
  - "8080:3000"  # Use port 8080 instead
```

### Clear cache and rebuild
```bash
docker-compose down
docker system prune -a
docker-compose up -d --build
```

## Environment Variables

If you need environment variables (API keys, etc.):

1. Create `.env.production` file (already in .gitignore)
2. Uncomment the `env_file` section in `docker-compose.yml`
3. Never commit `.env.production` to Git

## Automated Deployment (Optional)

Consider setting up:
- GitHub Actions for CI/CD
- Watchtower for automatic container updates
- Webhook-based deployment
