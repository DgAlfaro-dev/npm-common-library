export interface PaymentResponse {
    requires3DS: boolean;
    redirectData?: string;  // HTML or URL for 3DS
    success?: boolean;
    message?: string;
}