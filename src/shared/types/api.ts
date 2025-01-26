export interface CryptocurrencyApiResponse {
    data: {
      id: string;
      name: string;
      symbol: string;
      price_usd: string;
    }[];
  }