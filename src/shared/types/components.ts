import { Cryptocurrency } from './models';

/**
 * Props for the CryptoList component
 */
export interface CryptoListProps {
  cryptocurrencies: Cryptocurrency[]; // List of cryptocurrencies to display
}

/**
 * Props for the CryptoItem component
 */
export interface CryptoItemProps {
  cryptocurrency: Cryptocurrency; // Single cryptocurrency to display
}