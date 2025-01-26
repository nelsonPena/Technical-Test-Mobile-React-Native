/**
 * @file CryptoList.test.tsx
 * @description Unit tests for the CryptoList component.
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import CryptoList from '../presentation/components/CryptoList/CryptoList';

describe('CryptoList', () => {
  it('should render a list of cryptocurrencies', () => {
    const mockCryptos = [
      { id: '1', name: 'Bitcoin', symbol: 'BTC', priceUsd: 50000 },
      { id: '2', name: 'Ethereum', symbol: 'ETH', priceUsd: 3000 },
    ];

    const { getByText } = render(<CryptoList cryptocurrencies={mockCryptos} />);

    expect(getByText(/Bitcoin/)).toBeTruthy();
    expect(getByText(/Ethereum/)).toBeTruthy();
  });
});