export interface StockItem {
  readonly name: string;
  readonly symbol: string;
  readonly country: string;
  readonly currency: string;
  readonly type?: string;
}
