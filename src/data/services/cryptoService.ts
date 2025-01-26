/**
 * @file CryptoService.ts
 * @description Service class to manage cryptocurrency-related API interactions and data processing.
 */

import axios, { AxiosInstance } from 'axios';
import { Cryptocurrency } from '../../domain/models/Cryptocurrency';
import { CryptocurrencyApiResponse } from '../../shared/types/api';

/**
 * Service for fetching and processing cryptocurrency data.
 */
export class CryptoService {
  private apiClient: AxiosInstance;
  private apiUrl: string;

  /**
   * Initializes the CryptoService with a base API URL.
   *
   * @param {string} apiUrl - The base URL for the cryptocurrency API.
   */
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
    this.apiClient = axios.create({
      baseURL: apiUrl,
      timeout: 10000, // 10 seconds timeout
    });
  }

  /**
   * Fetches a list of cryptocurrencies from the API.
   *
   * @async
   * @method
   * @returns {Promise<Cryptocurrency[]>} A promise resolving to an array of cryptocurrencies.
   * @throws Will throw an error if the API call fails.
   */
  async fetchCryptocurrencies(): Promise<Cryptocurrency[]> {
    try {
      const response = await this.apiClient.get<CryptocurrencyApiResponse>('/tickers/');
      return this.transformApiResponse(response.data);
    } catch (error) {
      console.error('Error fetching cryptocurrencies:', error);
      throw new Error('Failed to fetch cryptocurrencies');
    }
  }

  /**
   * Transforms the API response into the internal `Cryptocurrency` model.
   *
   * @private
   * @method
   * @param {CryptocurrencyApiResponse} data - The raw API response.
   * @returns {Cryptocurrency[]} An array of formatted cryptocurrency objects.
   */
  private transformApiResponse(data: CryptocurrencyApiResponse): Cryptocurrency[] {
    return data.data.map((item) => ({
      id: item.id,
      name: item.name,
      symbol: item.symbol,
      priceUsd: parseFloat(item.price_usd),
    }));
  }
}