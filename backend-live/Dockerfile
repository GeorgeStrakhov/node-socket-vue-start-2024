# Base Image: Use a slim Node.js image for smaller size
FROM node:21-alpine

# Working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for efficient cache utilization
COPY package*.json ./

# Install dependencies (use yarn for efficiency)
RUN yarn install

# Copy the rest of your project files
COPY . .

# Expose your application's port
EXPOSE 3000

# Command to start the application
CMD [ "node", "src/index.js" ]
