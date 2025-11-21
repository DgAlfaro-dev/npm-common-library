export interface CreditCardData {
    cardNumber: string;
    cvv: string;
    expiration: string;
    cardholderName: string;
    use3DS?: boolean;
    ponToken?: string
  }