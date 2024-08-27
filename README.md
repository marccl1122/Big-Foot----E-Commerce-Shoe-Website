# Big Foot CA - Agile Project Implementation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Documentation](#documentation)
   - [1. Big Foot CA Overview](#1-big-foot-ca-overview)
   - [2. Mid Term Project Structure](#2-mid-term-project-structure)
3. [Agile Methodology](#agile-methodology)
   - [User Stories](#user-stories)
   - [Sprint Planning](#sprint-planning)
4. [Algorithmic Implementation](#algorithmic-implementation)
   - [Fetching and Displaying Products](#fetching-and-displaying-products)
   - [Adding and Removing Items from Cart](#adding-and-removing-items-from-cart)
5. [Project Structure](#project-structure)
   - [Folder Structure](#folder-structure)
   - [Implementation Steps](#implementation-steps)
6. [Getting Started](#getting-started)
7. [Tools and Configuration](#tools-and-configuration)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Final Touches](#final-touches)

---

## Project Overview

**Big Foot CA** is the ultimate online sneaker marketplace where affordability meets style. Our mission is to revolutionize the sneaker buying and selling experience by providing an affordable, sustainable, and community-driven platform for sneaker enthusiasts.

## Documentation

### 1. Big Foot CA Overview

#### 1.1 About Us

Big Foot CA is an e-commerce startup that connects buyers and sellers of new and gently used sneakers. We aim to provide a platform offering affordable prices, a wide selection, and a community-driven environment to promote sustainable fashion.

#### 1.2 The Problem

The traditional sneaker market is plagued by high prices, limited availability, and lack of transparency, making it difficult for enthusiasts to access the sneakers they love.

#### 1.3 Our Solution

- **Affordable Prices**: Making stylish sneakers accessible without breaking the bank.
- **Wide Selection**: Offering a vast collection from various brands to ensure the perfect pair for everyone.
- **Community-Driven**: Building a space for sneaker enthusiasts to connect, share, and discover new kicks.
- **Sustainable Fashion**: Promoting the reuse and recycling of sneakers to reduce waste and support environmentally friendly fashion.

#### 1.4 Features

- **User Profiles**: Create and showcase your sneaker collection, connect with others.
- **Listing System**: Easily list your sneakers for sale and browse available shoes.
- **Rating and Review System**: Maintain a safe and trustworthy community by rating and reviewing transactions.
- **Secure Payment Gateway**: Ensure secure transactions for both buyers and sellers.

### 2. Mid Term Project Structure

#### 2.1 Description

Create a fake shop using Object-Oriented Programming (OOP). Implement various classes and functionalities to build the shop.

#### 2.2 Objectives

- Create one file per class and import where needed.
- Show a list of products from an API with image, title, price, and description.
- Enable adding products to the cart.
- Display the total amount of the cart.

#### 2.3 Requirements

- **ESLint**
- **Prettier**
- **Husky**
- **Jest**
- **GitHub Actions**

#### 2.4 Agile Methodology

##### 2.4.1 User Stories

1. **User Story 1:** As a user, I want to browse through a wide selection of sneakers.
2. **User Story 2:** As a user, I want to add sneakers to my cart.
3. **User Story 3:** As a user, I want to view the total price of items in my cart.
4. **User Story 4:** As a user, I want to increase or decrease the quantity of sneakers in my cart.
5. **User Story 5:** As a user, I want to securely check out and complete my purchase.

##### 2.4.2 Sprint Planning

- **Sprint 1:** Setup Project, Implement Basic Classes (`ProductItem`, `ProductList`), Fetch and Display Products.
- **Sprint 2:** Implement Cart Functionality (`Cart`, `CartItem`, `CartItemList`), Add and Remove Items from Cart.
- **Sprint 3:** Create User Profiles, Implement Secure Payment Gateway, Test Core Functionalities.
- **Sprint 4:** Final Testing, Bug Fixes, and Deployment.

---

## Algorithmic Implementation

### Fetching and Displaying Products

```javascript
// src/services/ApiService.js
class ApiService {
    static async fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data;
    }
}

export default ApiService;
