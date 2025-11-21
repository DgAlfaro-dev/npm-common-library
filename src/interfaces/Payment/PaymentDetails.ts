export interface PaymentDetails {
    cardNumber?: string;
    cvv?: string;
    expiration?: string;
    cardholderName?: string;
    use3DS?: boolean;
    currency: string;
    token?: string;  // Optional panToken to support dynamic handling
  }