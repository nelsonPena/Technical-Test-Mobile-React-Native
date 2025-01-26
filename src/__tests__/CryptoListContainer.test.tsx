/**
 * @file CryptoListContainer.test.tsx
 * @description Unit tests for the CryptoListContainer component.
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import { CryptoProvider } from '../context/CryptoContext';
import CryptoListContainer from '../presentation/containers/CryptoListContainer';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mockApi = new MockAdapter(axios);

describe('CryptoListContainer', () => {
  beforeEach(() => {
    mockApi.reset();
  });

  it('should render loading indicator initially', () => {
    const { getByTestId } = render(
      <CryptoProvider>
        <CryptoListContainer searchText="" />
      </CryptoProvider>
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('should display the list of cryptocurrencies after fetching', async () => {
    const mockResponse = {
      data: [
        { id: '1', name: 'Bitcoin', symbol: 'BTC', price_usd: '50000' },
        { id: '2', name: 'Ethereum', symbol: 'ETH', price_usd: '3000' },
      ],
    };

    mockApi.onGet('https://api.coinlore.net/api/tickers/').reply(200, mockResponse);

    render(
      <CryptoProvider>
        <CryptoListContainer searchText="" />
      </CryptoProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Bitcoin/)).toBeTruthy();
      expect(screen.getByText(/Ethereum/)).toBeTruthy();
    });
  });

  it('should display an error message if fetching fails', async () => {
    mockApi.onGet('https://api.coinlore.net/api/tickers/').reply(500);

    render(
      <CryptoProvider>
        <CryptoListContainer searchText="" />
      </CryptoProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Failed to load cryptocurrencies/)).toBeTruthy();
    });
  });
});