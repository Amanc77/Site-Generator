# ---- Stage 1: Build the Vite app ----
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy rest of the app and build
COPY . .
RUN npm run build

# ---- Stage 2: Serve with a lightweight web server ----
FROM nginx:alpine

# Copy build output to nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for container
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
