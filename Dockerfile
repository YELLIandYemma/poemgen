# Use the official Node.js image as a base image for the frontend
FROM node:14 as client-builder

# Set the working directory for the frontend
WORKDIR /app/client

# Copy the frontend files to the working directory
COPY client/package*.json ./
COPY client/yarn.lock ./

# Install frontend dependencies
RUN yarn install

# Copy the entire frontend directory to the working directory
COPY client .

# Build the frontend
RUN yarn build

# Use the official Node.js image as a base image for the backend
FROM node:14 as server-builder

# Set the working directory for the backend
WORKDIR /app/server

# Copy the backend files to the working directory
COPY server/package*.json ./


# Install backend dependencies
RUN yarn install

# Copy the entire backend directory to the working directory
COPY backend .
RUN "node index.js"
# Expose the port that your Express app will run on
EXPOSE 5000

# Start the Express app
CMD ["yarn", "start"]
