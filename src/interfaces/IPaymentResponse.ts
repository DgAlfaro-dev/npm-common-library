export interface IPaymentResponse {
  id: number;
  salesDocId?: number;
  quoteId?: number;
  orderId?: string;
  amount: number;
  dateTimeExecuted: Date;
  dateTimeConfirmed: Date;
  businessPartnerId?: number;
  businessPartnerPayerId?: number;
  centroId?: number;
  salesDocInvoiceId?: number;
  salesDocPaymentId?: number;
  requestId?: number;
  paymentMediaId: number;
  paymentMethod?: 'CREDIT CARD' | 'ACCOUNT TRANSFER' | 'BANK DEPOSIT';
  currency: number;
  status:
    | 'CREATED'
    | 'AUTHORIZED'
    | 'CAPTURED'
    | 'COMPLETED'
    | 'FAILED'
    | 'REFUNDED';
  auto: boolean;
  additionalData?: string;
  paymentExternalReference?: string;
  note?: string;
  indActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  currencyEntity: CurrencyEntity;
}

interface CurrencyEntity {
  currencyId: number;
  ISO2Code: string;
  ISO3Code: string;
  symbol: string;
  name: string;
  indActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
