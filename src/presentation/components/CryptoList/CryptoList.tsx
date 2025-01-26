/**
 * @file CryptoList.tsx
 * @description Displays a list of cryptocurrencies with navigation to their details.
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { CryptoListProps } from '../../../shared/types/components';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * Type definition for navigation in the CryptoList component.
 */
type NavigationProp = StackNavigationProp<RootStackParamList, 'CryptoList'>;

/**
 * CryptoList Component
 * Renders a list of cryptocurrencies and allows navigation to the details screen.
 *
 * @param {CryptoListProps} props - The properties passed to the component.
 * @param {Array} props.cryptocurrencies - Array of cryptocurrency objects to be displayed.
 * @returns {React.FC} A functional component rendering the cryptocurrency list.
 */
const CryptoList: React.FC<CryptoListProps> = ({ cryptocurrencies }) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      {cryptocurrencies.map((crypto) => (
        <TouchableOpacity
          key={crypto.id}
          style={styles.cryptoItem}
          onPress={() => navigation.navigate('CryptoDetail', { cryptocurrency: crypto })}
        >
          <Text style={styles.name}>
            {crypto.name} ({crypto.symbol})
          </Text>
          <Text style={styles.price}>${crypto.priceUsd.toFixed(2)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  /**
   * Style for each cryptocurrency item container.
   */
  cryptoItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  /**
   * Style for the cryptocurrency name text.
   */
  name: {
    fontSize: 16,
  },
  /**
   * Style for the cryptocurrency price text.
   */
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CryptoList;