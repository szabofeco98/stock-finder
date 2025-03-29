export interface TickerData {
  //Basics
  readonly name: string;
  readonly symbol: string;
  readonly exchange: string;
  readonly currency: string;
  readonly price: string;
  readonly change: number;
  readonly changePercent: string;
  // About
  readonly description: string;
  readonly sector: string;
  readonly country: string;
  readonly industry: string;
  readonly address: string;
  readonly webSite: string;
  //Metrics
  readonly marketCap: string;
  readonly pERatio: string;
  readonly eps: string;
  readonly beta: string;
  readonly dividendRate: string;
  readonly dividendYield: string;
}
