export interface IQuoteProductRequest {
  quoteId: number;
  productId: number;
  detail: string;
  quantity: number;
  price: number;
  subtotal: number;
  saleTaxRate: number;
  saleTaxAmount: number;
  discount: number;
  total: number;
}
