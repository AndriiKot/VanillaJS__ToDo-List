# Use Node.js 20 base image
FROM node:20 AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for npm install
COPY package*.json ./

# Copy configuration and tools folders
COPY config ./config
COPY tools ./tools

# Set environment variable to skip prepare scripts (if used)
ENV SKIP_PREPARE=true

# Install dependencies
RUN npm install

# Copy frontend source code
COPY frontend ./frontend

# Development stage
FROM base AS dev

WORKDIR /app

# Expose port 3000 for dev server
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]

# Test stage
FROM base AS test

WORKDIR /app

# Run tests
CMD ["npm", "test"]
