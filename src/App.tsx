/**
 * @file App.tsx
 * @description Entry point of the Crypto App. Manages navigation, context, and main screens.
 */

import React, { useState } from 'react';
import { TextInput, StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CryptoProvider } from './context/CryptoContext';
import CryptoListContainer from './presentation/containers/CryptoListContainer';
import CryptoDetail from './presentation/components/CryptoDetail/CryptoDetail';
import { Cryptocurrency } from './domain/models/Cryptocurrency';

/**
 * Type definitions for the application's navigation stack.
 */
export type RootStackParamList = {
  CryptoList: undefined; // No parameters for the CryptoList screen
  CryptoDetail: { cryptocurrency: Cryptocurrency }; // CryptoDetail requires a cryptocurrency object
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Main application component.
 * @returns {React.FC} The main app component wrapped in navigation and context providers.
 */
const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  /**
   * Screen displaying the list of cryptocurrencies.
   * @returns {JSX.Element} The list screen with a search bar and scrollable content.
   */
  const CryptoListScreen = (): JSX.Element => (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <CryptoListContainer searchText={searchText} />
    </ScrollView>
  );

  return (
    <CryptoProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* CryptoList Screen */}
          <Stack.Screen
            name="CryptoList"
            component={CryptoListScreen}
            options={{
              headerTitle: () => (
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search cryptocurrencies..."
                    placeholderTextColor="#888"
                    value={searchText}
                    onChangeText={setSearchText}
                  />
                </View>
              ),
            }}
          />
          {/* CryptoDetail Screen */}
          <Stack.Screen
            name="CryptoDetail"
            component={CryptoDetail}
            options={{ title: 'Cryptocurrency Detail' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CryptoProvider>
  );
};

const styles = StyleSheet.create({
  /**
   * Styles for the search container.
   */
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  /**
   * Styles for the search input field.
   */
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  /**
   * Styles for the scroll view content.
   */
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default App;