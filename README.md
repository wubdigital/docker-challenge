<div align="center">

# 🚀 Enterprise Users Management System

### A Production-Ready Microservices Architecture Built with Node.js, Express, MongoDB & Docker

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

</div>

---

# 📖 Overview

This repository showcases an enterprise-grade approach to backend engineering and core DevOps methodologies. It transitions an agile Node.js/Express service from a traditional local runtime into a fully containerized, orchestrated, and automated lifecycle environment.

The core objective of this project was to implement production-like deployment standards, eliminate environmental drift (_"it works on my machine"_), and establish a seamless delivery pipeline using declarative infrastructure and automated workflows.

---

# ✨ Engineering & Architecture Features

- **Robust RESTful API Design:** Clean, semantic CRUD endpoints handling payload distributions.
- **Enterprise MVC Topology:** Strict structural separation between routing layers, request logic, and schemas.
- **Immutability via Docker:** Custom-built layers optimizing runtime environments and caching strategies.
- **Multi-Container Isolation:** Software-defined network topologies separating app logic from data storage.
- **Continuous Integration & Delivery (CI/CD):** Git-triggered automation pipelines handling secure credentials and delivery.
- **Resilient Data Storage:** Persistent data state mechanisms using isolated volume mappings.
- **Fail-Safe Validation:** Graceful centralized error management and standard JSON response layouts.

---

# 🛠️ Enterprise Tech Stack

| Technology         | Architectural Purpose    | Technical Impact                                                       |
| :----------------- | :----------------------- | :--------------------------------------------------------------------- |
| **Node.js**        | Server-Side Runtime      | High-throughput asynchronous event-driven execution                    |
| **Express.js**     | Backend MVC Framework    | Modular HTTP pipeline layout and decoupled routing                     |
| **MongoDB**        | NoSQL Document Store     | Dynamic schema structures handling complex JSON objects                |
| **Docker**         | Containerization Layer   | Guarantees code immutability across testing and cloud platforms        |
| **Docker Compose** | Local Multi-Service Grid | Controls software-defined isolated bridge networks and storage volumes |
| **GitHub Actions** | CI/CD Pipeline Worker    | Automates artifact compilation, testing, and remote delivery           |

---

# 📂 System Directory Structure

```text
docker-challenge/
├── .github/workflows/
│   └── docker-ci.yml       # Automated CI/CD GitHub Actions workflow
├── config/                 # Dynamic database connection configurations
├── controllers/            # Request handlers and business logic processing
├── model/                  # MongoDB schemas and database models
├── public/                 # Static frontend assets and dashboard views (index.html, api.js)
├── routes/                 # HTTP endpoint router configurations
├── .dockerignore           # Excludes local runtimes (node_modules, .env) from context
├── .env                    # Runtime environment variables (Protected)
├── .gitignore              # Secures upstream Git tracking leaks
├── app.js                  # Express framework entry point server script
├── docker-compose.yml      # Declarative multi-container grid mapping ports & data volumes
├── Dockerfile              # Immutable infrastructure blueprint instruction layer
├── load-users.js           # Automated data seeder script
└── package.json            # Node.js manifest file tracking dependencies
🏗️ Request Pipeline Architecture
Plaintext
[ Client Request ]
        │
        ▼
 [ Express Router ]  ───► (Layer Isolation / Security Middleware)
        │
        ▼
 [ Controller Layer ] ───► (Executes Business & Validation Logic)
        │
        ▼
[ Database Models ]  ───► (Enforces Object Schemas / Data Mapping)
        │
        ▼
 [ MongoDB Core ]    ───► (Persistent NoSQL Data Layer)
🐳 Infrastructure as Code (Docker Configuration)
The ecosystem is completely abstracted from the underlying host machine, eliminating local dependency requirements.

Standard Container Compilation
Bash
docker build -t docker-challenge-app:1.0 .
Decoupled Runtime Ingress
Bash
docker run -d -p 3000:3000 --env-file .env docker-challenge-app:1.0
Orchestrating the Multi-Container Cluster
Deploy the entire application and database stack simultaneously inside an isolated bridge network using Docker Compose:

Bash
# Boot infrastructure cluster in background detached state
docker compose up -d --build

# Interrogate cluster health and exposed system ports
docker ps
⚙️ Environment Cryptography & Configuration
To govern production configurations securely, initialize a local runtime .env file in the root scope:

קטע קוד
PORT=3000
DB_URI=mongodb://mongo:27017/dockerChallengeDB
🚀 Automated Continuous Integration & Delivery (CI/CD)
The workflow file .github/workflows/docker-ci.yml outlines a strict integration pipeline triggered on upstream push actions to production branches:

Environment Setup: Provisions a clean virtualization worker runner instance (ubuntu-latest).

Repository Checkout: Materializes the codebase state context locally for analysis.

Secure Vault Authentication: Signs into target remote registries leveraging hardware-encrypted GitHub Secrets (DOCKERHUB_USERNAME, DOCKERHUB_TOKEN).

Compilation & Tagging: Compiles declarative image layers and maps production semantic tags (:1.0).

Artifact Delivery: Pushes validated ready-to-deploy images directly to remote cloud repositories under the target user profile.

💡 Core Competencies Practiced
Infrastructure Decoupling: Separating applications into modular container runtimes.

Secrets Management: Handling structural API keys and credentials without plaintext codebase leakage.

Declarative Environments: Standardizing networks, data volumes, and dependent database lifecycles.

Git Flow Workflow: Utilizing structured branches, merging configurations, and testing.

📚 Advanced Future Implementations
Stateless Authentication: Embedding signed JWT layers into secure routing.

Production Orchestration: Migrating local Compose configurations into managed Kubernetes (K8s) node clusters.

Cloud Infrastructure Delivery: Deploying scalable application clusters to AWS (Amazon Web Services).

API Spec Standardization: Constructing automated Open-API/Swagger documentation matrices.

👨‍💻 Author
**[יהודה וובאיה (Yehuda Wubaya)](https://www.linkedin.com/in/yehuda-wubaye-623995176/)**
Yehuda Wubaya DevOps Engineer & Digital Automation Specialist Passionate about modern cloud infrastructure, secure delivery pipelines, and scalable backend system design.

⭐ If this DevOps implementation helped or inspired your process, feel free to leave a star!
```
