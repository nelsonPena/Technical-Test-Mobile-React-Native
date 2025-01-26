/**
 * @file CryptoContext.tsx
 * @description Provides a context to manage the state of cryptocurrencies throughout the application.
 */

import React, { createContext, useState, useContext } from 'react';
import { Cryptocurrency } from '../domain/models/Cryptocurrency';

/**
 * Defines the structure of the CryptoContext.
 */
export interface CryptoContextType {
  /**
   * Array of cryptocurrency objects representing the current state.
   */
  cryptocurrencies: Cryptocurrency[];
  /**
   * Function to update the cryptocurrencies state.
   */
  setCryptocurrencies: React.Dispatch<React.SetStateAction<Cryptocurrency[]>>;
}

/**
 * Create the CryptoContext with an undefined default value.
 */
const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

/**
 * CryptoProvider Component
 * Wraps the application or specific components with the CryptoContext provider.
 *
 * @param {React.ReactNode} children - Child components that require access to the context.
 * @returns {React.FC} A provider component for the cryptocurrency context.
 */
export const CryptoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>([]);

  return (
    <CryptoContext.Provider value={{ cryptocurrencies, setCryptocurrencies }}>
      {children}
    </CryptoContext.Provider>
  );
};

/**
 * useCryptoContext Hook
 * Provides access to the CryptoContext for managing cryptocurrency state.
 *
 * @returns {CryptoContextType} The current context value.
 * @throws Will throw an error if used outside of a CryptoProvider.
 */
export const useCryptoContext = () => {
  const context = useContext(CryptoContext);
  if (!context) throw new Error('useCryptoContext must be used within a CryptoProvider');
  return context;
};