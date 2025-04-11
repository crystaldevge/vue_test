# Base image
FROM node:18-alpine AS build-stage

WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Build Vue app
RUN npm run build

# Production image
FROM nginx:alpine AS production-stage

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built app to nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
