import { PaymentDataRequest } from "./PaymentDataRequest.js";


export interface PaymentRequestBody {
    salesDocId: number;
    paymentDetails: PaymentDataRequest;
}