# Portainer Setup Guide

## Method 1: Webhook Auto-Deploy (Recommended) 🚀

### Step 1: Create Stack in Portainer

1. **Go to Portainer** → **Stacks** → **Add stack**
2. **Name:** `portfolio`
3. **Build method:** Choose **Git Repository**
4. **Repository URL:** `https://github.com/SecurityGuy05/personalwebsite`
5. **Repository reference:** `refs/heads/main`
6. **Compose path:** `docker-compose.yml`
7. **Authentication:** 
   - If public repo: Leave blank
   - If private: Add GitHub Personal Access Token

### Step 2: Enable Auto-Update Options

- ✅ Enable **Automatic updates**
- ✅ Enable **Re-pull image and redeploy**
- ✅ Enable **Webhook**

Click **Deploy the stack**

### Step 3: Get Webhook URL

1. After stack is created, click on the **portfolio** stack
2. Scroll down to **Webhook** section
3. Copy the webhook URL (looks like: `https://portainer.example.com/api/stacks/webhooks/abc123xyz`)

### Step 4: Configure GitHub Webhook

1. Go to https://github.com/SecurityGuy05/personalwebsite
2. **Settings** → **Webhooks** → **Add webhook**
3. **Payload URL:** Paste the Portainer webhook URL
4. **Content type:** `application/json`
5. **Which events:** Select "Just the push event"
6. **Active:** ✅ Check this box
7. Click **Add webhook**

### ✨ Done! 

Now whenever you:
```bash
git push
```

GitHub will automatically trigger Portainer to:
1. Pull latest code
2. Rebuild the Docker image
3. Redeploy the container

---

## Method 2: Manual Update in Portainer

### From Stack View:

1. Go to **Stacks** → Click **portfolio**
2. Click **Editor** tab
3. Click **Pull and redeploy** button
4. Confirm the action

### From Container View:

1. Go to **Containers**
2. Select **portfolio-app**
3. Click **Recreate**
4. Check "Pull latest image"
5. Confirm

---

## Method 3: Polling (Automatic Checks)

If webhooks don't work (firewall issues):

1. Edit your stack in Portainer
2. Enable **Automatic updates**
3. Set **Fetch interval:** `5m` (checks every 5 minutes)
4. Portainer will automatically pull and redeploy when changes are detected

---

## Troubleshooting

### Webhook not triggering?

**Check Portainer webhook logs:**
1. Portainer → **Settings** → **Edge Compute**
2. Check webhook request logs

**Test webhook manually:**
```bash
curl -X POST https://your-portainer-url/api/stacks/webhooks/YOUR_WEBHOOK_ID
```

**Check GitHub webhook deliveries:**
1. GitHub repo → **Settings** → **Webhooks**
2. Click on your webhook
3. Check **Recent Deliveries** tab for errors

### Build failing?

**View build logs in Portainer:**
1. Stacks → portfolio → **Logs**

**Common issues:**
- Make sure Portainer has internet access
- Check if GitHub repo is accessible
- Verify docker-compose.yml syntax

### Can't access webhook URL?

If Portainer is behind a firewall:
- Use **polling method** instead
- Or set up a reverse proxy with SSL
- Or use Portainer Cloud for webhook relay

---

## Advanced: Using Watchtower

For automatic image updates without webhooks:

### Deploy Watchtower alongside your stack:

```yaml
watchtower:
  image: containrrr/watchtower
  container_name: watchtower
  restart: unless-stopped
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
  environment:
    - WATCHTOWER_POLL_INTERVAL=300  # Check every 5 minutes
    - WATCHTOWER_CLEANUP=true
    - WATCHTOWER_LABEL_ENABLE=true
  command: --interval 300 --cleanup
```

This will automatically update containers with the label:
```yaml
labels:
  - "com.centurylinklabs.watchtower.enable=true"
```

---

## Quick Commands Reference

### Portainer API (if you need it)

**Trigger webhook manually:**
```bash
curl -X POST https://portainer.example.com/api/stacks/webhooks/YOUR_ID
```

**Update stack via API:**
```bash
curl -X PUT https://portainer.example.com/api/stacks/STACK_ID \
  -H "X-API-Key: YOUR_API_KEY" \
  -d @docker-compose.yml
```

---

## Workflow Summary

1. **Make changes locally**
2. **Test locally:** `npm run dev`
3. **Commit & push:**
   ```bash
   git add .
   git commit -m "Update feature"
   git push
   ```
4. **Automatic deployment** happens via webhook
5. **Check Portainer** to verify deployment
6. **View site** at your server URL

That's it! 🎉
