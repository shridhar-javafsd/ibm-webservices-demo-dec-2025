# Employee Management System (EMS) – REST API

Production-grade EMS built using Node.js, Express.js, and MySQL.
Designed for IBM SOA / REST / Web Services training.

## Tech Stack
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- RESTful architecture

## Core Entities
- Employee
- Department
- Project

## Relationships
- Department 1---N Employee
- Employee M---N Project

## Features
- REST APIs (CRUD)
- Layered architecture
- DTO-like validation
- Proper HTTP status codes
- Centralized error handling

## How to Run
1. npm install
2. Configure DB in config/db.js
3. npm start
