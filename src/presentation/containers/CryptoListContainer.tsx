/**
 * @file CryptoListContainer.tsx
 * @description Container component for managing and displaying a list of cryptocurrencies using CryptoService.
 */

import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useCryptoContext } from '../../context/CryptoContext';
import { CryptoService } from '../../data/services/cryptoService';
import CryptoList from '../components/CryptoList/CryptoList';
import { FetchCryptocurrenciesUseCase } from '../../domain/usecases/FetchCryptocurrenciesUseCase';
import { CryptoRepositoryImpl } from '../../data/repositories/CryptoRepositoryImpl';

const cryptoService = new CryptoService('https://api.coinlore.net/api');
const cryptoRepository = new CryptoRepositoryImpl(cryptoService);
const fetchCryptocurrenciesUseCase = new FetchCryptocurrenciesUseCase(cryptoRepository);


/**
 * Props for CryptoListContainer
 */
interface CryptoListContainerProps {
  searchText: string;
}

/**
 * CryptoListContainer Component
 * Fetches and filters a list of cryptocurrencies based on user input and provides it to the CryptoList component.
 */
const CryptoListContainer: React.FC<CryptoListContainerProps> = ({ searchText }) => {
  const { cryptocurrencies, setCryptocurrencies } = useCryptoContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // CryptoService instance with dependency injection
  const cryptoService = React.useMemo(() => new CryptoService('https://api.coinlore.net/api'), []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCryptocurrenciesUseCase.execute();
        setCryptocurrencies(data);
      } catch (err) {
        setError('Failed to load cryptocurrencies');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCryptocurrencies = cryptocurrencies.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Render loading state
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  // Render error state
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Render the cryptocurrency list
  return (
    <View style={styles.container}>
      <CryptoList cryptocurrencies={filteredCryptocurrencies} />
    </View>
  );
};

/**
 * Styles for CryptoListContainer
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 16,
  },
});

export default CryptoListContainer;