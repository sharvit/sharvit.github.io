---
title: The Difference Between ARG and ENV in a Dockerfile
coverImage: ../post-images/2023-04-20-arg-vs-env-in-dockerfiles.png
---

Docker is a powerful tool that allows you to package and deploy your applications in a consistent and reproducible way.
When building a Docker image, you can use various instructions to specify the environment and configuration for your application.
Two of the most commonly used instructions in a Dockerfile are **ARG** and **ENV**.
In this blog post, we'll explore the key difference between **ARG** and **ENV** and how to use them in your Dockerfile.

## ARG Instruction

**ARG** is short for **argument**. It is used to define a variable that can be passed at build time to a Dockerfile.
**ARG** variables are not persisted in the final image and are only used during the build process.

The syntax for defining an **ARG** variable is as follows:

```Dockerfile
ARG <name>[=<default value>]
```

Here, `<name>` is the name of the variable, and `<default value>` is the default value if the variable is not passed at build time.
You can use **ARG** variables to set the values of other instructions in the Dockerfile, such as **ENV** or `RUN`.

## ENV Instruction

**ENV** is short for **environment**. It is used to set environment variables that will be available in the container at runtime.
Unlike **ARG** variables, **ENV** variables are persisted in the final image and can be used by the running application.

The syntax for defining an **ENV** variable is as follows:

```Dockerfile
ENV <name> <value>
```

Here, `<name>` is the name of the variable, and `<value>` is the value of the variable.
You can use **ENV** variables to pass configuration information to your application, such as database connection strings, API keys, or other settings.

## The Main Difference

The key difference between **ARG** and **ENV** is that **ARG** variables are only available during the **build process**,
while **ENV** variables are available at **runtime**.
This means that using different **ARG** variables will **produce a new and unique image with each build**,
while using different **ENV** variables will only **apply the environment on an existing image**.

In practical terms, this means that if you need to customize the build process and create unique images for different use cases,
then **ARG** variables are the best choice.
On the other hand, if you need to configure your application's environment and want to reuse the same image with different configurations,
then **ENV** variables are the way to go.

Here's an example Dockerfile that demonstrates the use of **ARG** and **ENV** instructions:

```Dockerfile
# Use a specific version of Node.js as a build argument
ARG NODE_VERSION=14.16.0

# Set the Node.js version as an environment variable
ENV NODE_VERSION $NODE_VERSION

# Install Node.js and dependencies
FROM node:$NODE_VERSION
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
```

In this example, we use an **ARG** variable to specify the version of Node.js to use during the build process. We then use an **ENV** variable to persist the Node.js version in the final image, which can be used by the running application. Finally, we use the `CMD` instruction to start the application using the `npm start` command.

## Conclusion

When building a Docker image, it's important to understand the difference between **ARG** and **ENV**.
Use **ARG** variables to set build-time configuration details, and use **ENV** variables to set runtime environment variables for your application.
By understanding the differences between these two instructions, you can create Docker images that are flexible, efficient, and easy to manage.
