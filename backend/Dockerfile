# Build container
FROM node:18.12.1-alpine as builder

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . ./

# Install packages, build and keep only prod packages
RUN npm ci
RUN npm run build
RUN npm prune --production

# Deployment container
FROM node:18.12.1-alpine
# RUN npm cache clean --force

# Create a non-privileged user
RUN adduser --disabled-password --gecos "" myuser

# Set the working directory to /app inside the deployment container
WORKDIR /app

# Set environment variables
ENV POSTGRES_HOST=db
ENV POSTGRES_DB=mydb
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

# Copy production files from build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expose Port
EXPOSE 5000

# Set the ownership of the application files to the non-privileged user
RUN chown -R myuser:myuser /app

# Switch to the non-privileged user
USER myuser

# Start the app
CMD ["npm", "run", "start:prod"]