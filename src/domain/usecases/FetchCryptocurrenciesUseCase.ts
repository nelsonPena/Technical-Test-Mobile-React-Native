// domain/usecases/FetchCryptocurrenciesUseCase.ts
import { CryptoRepository } from '../../data/repositories/CryptoRepository';
import { Cryptocurrency } from '../models/Cryptocurrency';

export class FetchCryptocurrenciesUseCase {
  private cryptoRepository: CryptoRepository;

  constructor(cryptoRepository: CryptoRepository) {
    this.cryptoRepository = cryptoRepository;
  }

  async execute(): Promise<Cryptocurrency[]> {
    return await this.cryptoRepository.fetchCryptocurrencies();
  }
}