# Crypto App

## Overview
Crypto App is a React Native application that provides a list of cryptocurrencies and their details. Users can:
- Search for cryptocurrencies using a search bar.
- View detailed information about each cryptocurrency.

---

## Features
- **Cryptocurrency Search:** Search bar to filter cryptocurrencies in real time.
- **List View:** Display a scrollable list of cryptocurrencies with their name, symbol, and price.
- **Detail View:** Navigate to a screen showing detailed information about a selected cryptocurrency.
- **Keyboard Handling:** Ensures seamless user experience while interacting with input fields and lists.

---

## Project Structure
```plaintext
src/
├── components/
│   ├── CryptoDetail/
│   │   ├── CryptoDetail.tsx
│   │   └── CryptoDetail.module.css
│   ├── CryptoList/
│   │   ├── CryptoList.tsx
│   │   └── CryptoItem.tsx
├── containers/
│   ├── CryptoListContainer.tsx
├── context/
│   ├── CryptoContext.tsx
├── services/
│   ├── cryptoService.ts
├── types/
│   ├── models.ts
