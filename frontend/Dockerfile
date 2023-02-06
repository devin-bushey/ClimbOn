# Use a base image with Node.js and npm installed
FROM node:18.12.1-alpine

# Create a non-privileged user
RUN adduser --disabled-password --gecos "" myuser

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files to the container
COPY . .

# Set the ownership of the application files to the non-privileged user
RUN chown -R myuser:myuser /app

# Switch to the non-privileged user
USER myuser

# Start the frontend app
CMD [ "npm", "start" ]
