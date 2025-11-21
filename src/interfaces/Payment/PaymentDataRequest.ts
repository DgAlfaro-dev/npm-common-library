import { CreditCardData } from "./CreditCarData.js";

export interface PaymentDataRequest {
    paymentMediaId?: number,
    tokenize?: boolean,
    creditCardData?: CreditCardData,
    email: string,
    phoneNumber: string,
    amount?: number,
    currencyId?: number,
    countryId?: number,
    businessPartnerId?: number,
    note?: string,
}