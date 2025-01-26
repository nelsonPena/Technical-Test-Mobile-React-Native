/**
 * @file CryptoDetail.test.tsx
 * @description Unit tests for the CryptoDetail component.
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import CryptoDetail from '../presentation/components/CryptoDetail/CryptoDetail';

describe('CryptoDetail Component', () => {
  const mockCryptocurrency = {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    priceUsd: 50000.0,
  };

  const mockRoute = {
    params: {
      cryptocurrency: mockCryptocurrency,
    },
  };

  it('renders the cryptocurrency details correctly', () => {
    const { getByText } = render(<CryptoDetail route={mockRoute as any} />);

    // Assert that all details are displayed
    expect(getByText('Bitcoin')).toBeTruthy();
    expect(getByText('Symbol: BTC')).toBeTruthy();
    expect(getByText('Price (USD): $50000.00')).toBeTruthy();
  });

  it('handles missing cryptocurrency data gracefully', () => {
    const mockEmptyRoute = {
      params: {
        cryptocurrency: undefined,
      },
    };

    const { getByText } = render(<CryptoDetail route={mockEmptyRoute as any} />);

    // Verify that fallback messages are displayed
    expect(getByText('Cryptocurrency details not available')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const { toJSON } = render(<CryptoDetail route={mockRoute as any} />);
    expect(toJSON()).toMatchSnapshot();
  });
});