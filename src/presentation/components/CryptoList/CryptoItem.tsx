/**
 * @file CryptoItem.tsx
 * @description A component that renders the details of a single cryptocurrency.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cryptocurrency } from '../../../domain/models/Cryptocurrency';

/**
 * Props for the CryptoItem component.
 */
interface CryptoItemProps {
  /**
   * The cryptocurrency object containing the details to display.
   */
  cryptocurrency: Cryptocurrency;
}

/**
 * CryptoItem Component
 * Displays the name, symbol, and price of a cryptocurrency.
 *
 * @param {CryptoItemProps} props - The properties passed to the component.
 * @param {Cryptocurrency} props.cryptocurrency - The cryptocurrency object to display.
 * @returns {React.FC} A functional component rendering a single cryptocurrency item.
 */
const CryptoItem: React.FC<CryptoItemProps> = ({ cryptocurrency }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>
        {cryptocurrency.name} ({cryptocurrency.symbol})
      </Text>
      <Text style={styles.price}>${cryptocurrency.priceUsd.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  /**
   * Style for the container of a single cryptocurrency item.
   */
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  /**
   * Style for the name of the cryptocurrency.
   */
  name: {
    fontSize: 16,
  },
  /**
   * Style for the price of the cryptocurrency.
   */
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CryptoItem;