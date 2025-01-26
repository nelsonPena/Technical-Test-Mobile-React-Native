# Cryptocurrency Tracker App

## Overview

This project is a cryptocurrency tracking application built using **React Native**. It provides real-time cryptocurrency data, including detailed information such as price, symbol, and name. The application is structured following **Object-Oriented Programming (OOP)** principles to ensure scalability, maintainability, and ease of testing.

---

## Features

- Fetch and display a list of cryptocurrencies.
- Search and filter cryptocurrencies by name.
- View detailed information about a selected cryptocurrency.
- Modular and testable architecture using OOP principles.
- Built-in error handling and loading states.

---

## Architecture Overview

The project is structured to emphasize separation of concerns, modularity, and reusability. The architecture is inspired by OOP principles and adheres to modern software engineering best practices.

### **Core Principles**

1. **Encapsulation**:
   - Encapsulate logic within reusable classes such as `CryptoService`.
2. **Single Responsibility Principle**:
   - Each component, class, or module is responsible for one thing.
3. **Abstraction**:
   - Abstract API interactions into service classes.
4. **Modularity**:
   - Separate components into dedicated folders based on their functionality.

### **Project Structure**

```
src/
├── presentation/                # UI layer
│   ├── components/
│   │   ├── CryptoList/
│   │   │   ├── CryptoList.tsx
│   │   │   ├── CryptoList.module.css
│   │   │   └── CryptoItem.tsx
│   │   └── CryptoDetail/
│   │       ├── CryptoDetail.tsx
│   │       └── CryptoDetail.module.css
│   └── containers/
│       ├── CryptoListContainer.tsx
│       └── CryptoDetailContainer.tsx
├── domain/                      # Business logic layer
│   ├── models/                  # Domain entities
│   │   └── Cryptocurrency.ts
│   ├── usecases/                # Application-specific business rules
│       └── FetchCryptocurrenciesUseCase.ts
├── data/                        # Data operations
│   ├── services/                # API service classes
│   │   └── CryptoService.ts
│   ├── repositories/            # Abstract repositories
│   │   ├── CryptoRepository.ts
│   │   └── CryptoRepositoryImpl.ts
├── context/                     # Context providers
│   └── CryptoContext.tsx
├── shared/                      # Shared utilities
│   ├── types/                   # Shared types/interfaces
│   │   ├── api.ts
│   │   └── components.ts
│   └── utils/                   # Shared helper functions
│       └── fetchData.ts
└── App.tsx                      # App entry point
```

### **Key Components**

#### **1. Components**

- **CryptoList**: Renders a list of cryptocurrencies.
- **CryptoItem**: Displays individual cryptocurrency details in the list.
- **CryptoDetail**: Displays detailed information about a selected cryptocurrency.

#### **2. Containers**

- **CryptoListContainer**: Acts as a middle layer between the service and components, managing the state and fetching data.

#### **3. Services**

- **CryptoService**: Handles API interactions and abstracts data fetching logic.

#### **4. Context**

- **CryptoContext**: Manages global state for the cryptocurrency data.

#### **5. Types**

- **models.ts**: Defines the `Cryptocurrency` interface.
- **api.ts**: Defines API response types.

---

## Setup and Installation

### **Prerequisites**

- Node.js
- npm or yarn
- React Native CLI or Expo CLI

### **Steps**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd cryptocurrency-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the project:
   ```bash
   npx react-native run-android # For Android
   npx react-native run-ios # For iOS
   ```

---

## Testing

### **Testing Framework**

- Jest
- React Testing Library

### **Running Tests**

```bash
npm test
```

### **Test Coverage**

- Service layer (`CryptoService`)
- Components (`CryptoList`, `CryptoDetail`)
- Error and loading states

---

## Example Code

### **Service Example**

```typescript
export class CryptoService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async fetchCryptocurrencies(): Promise<Cryptocurrency[]> {
    const response = await fetch(`${this.apiUrl}/tickers/`);
    const data = await response.json();
    return data.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      symbol: item.symbol,
      priceUsd: parseFloat(item.price_usd),
    }));
  }
}
```

