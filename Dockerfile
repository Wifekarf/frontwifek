# Stage 1: Build the Angular application
FROM node:20.16.0 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all application files
COPY . .

# Build the application in production mode
RUN npm run build --prod

# Optional: List contents of /app/dist for debugging
RUN ls -l /app/dist

# Stage 2: Serve the application with an Nginx server
FROM nginx:alpine

# Copy the Angular app output from the build stage to Nginx's web directory
COPY --from=build /app/dist/foyerfront /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
