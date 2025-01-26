import { Cryptocurrency } from '../../domain/models/Cryptocurrency';

export interface CryptoRepository {
  fetchCryptocurrencies(): Promise<Cryptocurrency[]>;
}