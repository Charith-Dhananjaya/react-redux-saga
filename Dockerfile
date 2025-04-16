# Step 1: Use official Node.js image to build the React app
FROM node:21.1.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Use official Nginx image to serve the app
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Optional: Remove default Nginx config and replace with custom (if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
