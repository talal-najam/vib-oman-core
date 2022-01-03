# VIB Oman Core

Online store for Gaming PCs, peripherals and esports community for players in Oman. This repository contains the backend code for the full-stack web application.

## Overview

* This project provides the VIB Oman API for consumption.
* The API powers the VIB Oman web application, which is also an [open source project](https://github.com/talal-najam/vib-oman-web).
* The backend API is built using NodeJS and Express.
* Database layer is using Postgresql with ObjectionJS for ORM

---

To run this project locally:
* Clone the repoistory on to your computer
* Copy the .env.example to create a new .env file as below

```bash
$ cp .env.example .env
```

In the same project directory, you can run:

```bash
# Install dependencies
$ npm install   
```

Once packages are installed, start the server in watch mode:

```bash
# watch mode
$ npm run dev
```

Runs the app in the development mode.\
The server runs on [http://localhost:5000](http://localhost:5000) by default. You will also see any errors in the console.