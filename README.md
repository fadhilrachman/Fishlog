# Sagara React Project Starter

## Table of Contents
- [Sagara React Project Starter](#sagara-project-starter)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
    - [Tech Stack](#tech-stack)
    - [Environment Variables](#environment-variables)
  - [Installation Guides](#installation-guides)
    - [Manual/local build](#manuallocal-build)
    - [With Docker](#with-docker)
    - [Learn More](#learn-more)
    - [Code Splitting](#code-splitting)
    - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    - [Advanced Configuration](#advanced-configuration)

## Prerequisites

Requirements prior to running/building this app:

### Tech Stack

- node v14
- npm v6
- create-react-app

### Default Branch
- master

### Environment Variables

| Name                               | Description           | Example                          | Location     |
| ---------------------------------- | --------------------- | -------------------------------- | ------------ |
| `REACT_APP_ACCOUNT_SERVICES_URL`   | API ACCOUNT SERVICES  | `https://account.finx.nikici.com` | File `.env*` |

## Installation Guides

### Manual/local build

```bash
# provide environment variables in a .env file
$ cp .env.example .env.local

# install node dependencies
$ npm i

# run app locally
$ npm start
or
# build app for production
$ npm run build
```

### With Docker

```bash
# provide environment variables in a .env file
$ vim .env

# or via a CI/CD
$ echo REACT_APP_API_URL=<ENV> >> .env

# build docker image
$ docker build -t sagara-project-starter:latest .

# run docker container
$ docker run -p 80:80 sagara-project-starter:latest
```

### Learn More

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment