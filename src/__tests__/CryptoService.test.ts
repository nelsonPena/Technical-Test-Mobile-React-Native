/**
 * @file CryptoService.test.ts
 * @description Unit tests for the CryptoService class.
 */

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { CryptoService } from '../data/services/CryptoService';
import { CryptocurrencyApiResponse } from '../shared/types/api';

const mockApi = new MockAdapter(axios);
const cryptoService = new CryptoService('https://api.coinlore.net/api');

describe('CryptoService', () => {
  afterEach(() => {
    mockApi.reset();
  });

  it('should fetch cryptocurrencies successfully', async () => {
    const mockResponse: CryptocurrencyApiResponse = {
      data: [
        { id: '1', name: 'Bitcoin', symbol: 'BTC', price_usd: '50000' },
        { id: '2', name: 'Ethereum', symbol: 'ETH', price_usd: '3000' },
      ],
    };

    mockApi.onGet('/tickers/').reply(200, mockResponse);

    const result = await cryptoService.fetchCryptocurrencies();
    expect(result).toEqual([
      { id: '1', name: 'Bitcoin', symbol: 'BTC', priceUsd: 50000 },
      { id: '2', name: 'Ethereum', symbol: 'ETH', priceUsd: 3000 },
    ]);
  });

  it('should handle API failure gracefully', async () => {
    mockApi.onGet('/tickers/').reply(500);

    await expect(cryptoService.fetchCryptocurrencies()).rejects.toThrow('Failed to fetch cryptocurrencies');
  });
});