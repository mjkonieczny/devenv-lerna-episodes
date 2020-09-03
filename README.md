# Monorepo with lerna

This repository was created to present how to build applications using [lerna](https://lerna.js.org/) and [neutrino](https://neutrinojs.org/).

There are related YouTube movies that explain process of development
* [Monorepo with lerna](https://youtu.be/RSyJ9ihrHhA)

---

To start project follow below instructions
1. Run `npm i` to install root packages
2. Run `npx lerna bootstrap` to install packages dependencies
3. Run `npx lerna run build --scope=core` to build core package
4. Run `npx lerna run start --scope={backend,frontend} --parallel` to start frontend and backend apps

---

Project contains [tags](https://github.com/matthew-the-equine/devenv-lerna-episodes/tags) related to steps how application was developed

Run e.g. `gco v1.1-neutrino-projects-created-and-linked` to open project at given point