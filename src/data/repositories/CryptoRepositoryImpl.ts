import { CryptoRepository } from './CryptoRepository';
import { CryptoService } from '../services/CryptoService';
import { Cryptocurrency } from '../../domain/models/Cryptocurrency';

export class CryptoRepositoryImpl implements CryptoRepository {
  private cryptoService: CryptoService;

  constructor(cryptoService: CryptoService) {
    this.cryptoService = cryptoService;
  }

  async fetchCryptocurrencies(): Promise<Cryptocurrency[]> {
    return await this.cryptoService.fetchCryptocurrencies();
  }
}