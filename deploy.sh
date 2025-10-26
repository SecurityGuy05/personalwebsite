#!/bin/bash
# Deploy script for your Docker server
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment..."

# Pull latest changes
echo "📥 Pulling latest changes from Git..."
git pull

# Stop and remove old containers
echo "🛑 Stopping old containers..."
docker-compose down

# Build and start new containers
echo "🔨 Building and starting new containers..."
docker-compose up -d --build

# Show logs
echo "📋 Showing logs (press Ctrl+C to exit)..."
docker-compose logs -f
