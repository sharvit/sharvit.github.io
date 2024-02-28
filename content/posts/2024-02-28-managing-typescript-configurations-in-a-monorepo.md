---
title: Managing TypeScript Configurations in a Monorepo
coverImage: ../post-images/2024-02-28-managing-typescript-configurations-in-a-monorepo.png
---

Monorepos are a popular way to organize multiple related projects in a single
repository. They simplify dependency management, make it easier to refactor
across boundaries, and streamline the development process. However, managing
TypeScript configurations in a monorepo can become cumbersome without
a systematic approach. This blog post will guide you through setting up and
managing TypeScript configurations (`tsconfig.json` files) in a monorepo for
different types of projects, such as libraries, Node.js applications,
and React applications.

## The Challenge

In a monorepo, projects often share common TypeScript configurations, such as
compiler options and library inclusions. However, certain projects, like a
React application vs. a Node.js service, require specific TypeScript
configurations. Manually copying configurations between projects is
error-prone and hard to maintain. The solution? Abstract common configurations
into base configuration files and extend them in individual projects.

## Structuring Your Monorepo

Consider a monorepo structure where your TypeScript configuration templates
live under a `tools/tsconfig` directory, and your projects are organized under
`packages`, categorized into `apps` and `modules`:

```
monorepo/
├── packages/
│   ├── apps/
│   │   ├── api/ (Node.js app)
│   │   └── react-app/ (React app)
│   └── modules/
│       └── my-module/ (Shared library)
└── tools/
    └── tsconfig/
        ├── tsconfig.base.json
        ├── tsconfig.library.json
        ├── tsconfig.node-app.json
        └── tsconfig.react-app.json
```

## Base TypeScript Configurations

### `tsconfig.base.json` - The Core Configuration

This file contains compiler options common across all projects.

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "esnext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": "."
  },
  "exclude": ["node_modules"]
}
```

### Specialized Configurations

#### `tsconfig.library.json` for Libraries

```json
{
  "extends": "@monorepo/tsconfig/tsconfig.base.json",
  "compilerOptions": {
    "declaration": true,
    "outDir": "./lib"
  },
  "include": ["src/**/*"]
}
```

#### `tsconfig.node-app.json` for Node.js Applications

```json
{
  "extends": "@monorepo/tsconfig/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs"
  },
  "include": ["src/**/*"]
}
```

#### `tsconfig.react-app.json` for React Applications

```json
{
  "extends": "@monorepo/tsconfig/tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["dom", "dom.iterable", "esnext"]
  },
  "include": ["src/**/*"]
}
```

### Project Configuration Examples

Projects extend the appropriate base configuration.
Here's how a `tsconfig.json` in the React app would look:

```json
{
  "extends": "@monorepo/tsconfig/tsconfig.react-app.json",
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "include": ["src/**/*"]
}
```

## Conclusion

This setup simplifies managing TypeScript configurations in a monorepo by
centralizing common settings and allowing for project-specific overrides. By
abstracting these configurations into a package, we ensure consistency across
projects and ease the maintenance burden. As your monorepo grows, this
approach scales efficiently, allowing you to focus on development rather
than configuration management.
