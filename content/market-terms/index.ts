import type { MarketTermContent } from '@/types/content';
import { basis } from './basis';
import { benchmarkPrice } from './benchmark-price';
import { cashMarket } from './cash-market';
import { compositeIndicatorPrice } from './composite-indicator-price';
import { contangoAndBackwardation } from './contango-and-backwardation';
import { crushSpread } from './crush-spread';
import { deferredPricing } from './deferred-pricing';
import { forwardContract } from './forward-contract';
import { freightParity } from './freight-parity';
import { futuresContract } from './futures-contract';
import { hedging } from './hedging';
import { liquidity } from './liquidity';
import { marketDepth } from './market-depth';
import { minimumPrice } from './minimum-price';
import { originDifferential } from './origin-differential';
import { premiumAndDiscount } from './premium-and-discount';
import { priceDiscovery } from './price-discovery';
import { priceIndex } from './price-index';
import { priceVolatility } from './price-volatility';
import { qualityPremium } from './quality-premium';
import { referencePrice } from './reference-price';
import { speculation } from './speculation';
import { spotPrice } from './spot-price';
import { spread } from './spread';
import { stocksToUseRatio } from './stocks-to-use-ratio';
import { supplyAndDemandBalanceSheet } from './supply-and-demand-balance-sheet';

export const marketTerms: MarketTermContent[] = [
  basis,
  benchmarkPrice,
  cashMarket,
  compositeIndicatorPrice,
  contangoAndBackwardation,
  crushSpread,
  deferredPricing,
  forwardContract,
  freightParity,
  futuresContract,
  hedging,
  liquidity,
  marketDepth,
  minimumPrice,
  originDifferential,
  premiumAndDiscount,
  priceDiscovery,
  priceIndex,
  priceVolatility,
  qualityPremium,
  referencePrice,
  speculation,
  spotPrice,
  spread,
  stocksToUseRatio,
  supplyAndDemandBalanceSheet,
];
