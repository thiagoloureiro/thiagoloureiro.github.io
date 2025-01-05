# Stage 1 - Build the Next.js application
FROM node:23-alpine AS next-build
WORKDIR /app

# Copy only the necessary files for dependency installation
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . ./
RUN npm run build

# Stage 2 - Production environment
FROM node:23-alpine
WORKDIR /app

# Copy the build output and necessary files
COPY --from=next-build /app/.next ./.next
COPY --from=next-build /app/package.json /app/package-lock.json ./

# Install production dependencies only
RUN npm install --production

# Expose port 3000 for the Next.js server
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
