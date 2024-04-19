# Use Node.js v16.x as the base image
FROM node:16

# Set the working directory inside the image
WORKDIR /app

# Copy all source code to /app
COPY . .

# Install dependencies (inside the container)
RUN npm install && npm install supervisor -g && npm install concurrently -g

# Expose server port
EXPOSE 3000

# Start server using npm script
CMD ["npm", "run", "start"]
