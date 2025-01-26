/**
 * @file CryptoDetail.tsx
 * @description Displays detailed information about a selected cryptocurrency.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';

/**
 * Type definition for the route prop of the CryptoDetail screen.
 */
type CryptoDetailRouteProp = RouteProp<RootStackParamList, 'CryptoDetail'>;

/**
 * Props for the CryptoDetail component.
 */
interface CryptoDetailProps {
  /**
   * The navigation route containing the cryptocurrency details passed as parameters.
   */
  route: CryptoDetailRouteProp;
}

/**
 * CryptoDetail Component
 * Displays the name, symbol, and price of a selected cryptocurrency.
 *
 * @param {CryptoDetailProps} props - Props containing the route with cryptocurrency details.
 * @returns {React.FC} A functional component rendering cryptocurrency details.
 */
const CryptoDetail: React.FC<CryptoDetailProps> = ({ route }) => {
  const { cryptocurrency } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cryptocurrency.name}</Text>
      <Text style={styles.symbol}>Symbol: {cryptocurrency.symbol}</Text>
      <Text style={styles.price}>Price (USD): ${cryptocurrency.priceUsd.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  /**
   * Style for the container of the cryptocurrency detail screen.
   */
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  /**
   * Style for the cryptocurrency title (name).
   */
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  /**
   * Style for the cryptocurrency symbol text.
   */
  symbol: {
    fontSize: 18,
    marginBottom: 8,
  },
  /**
   * Style for the cryptocurrency price text.
   */
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CryptoDetail;