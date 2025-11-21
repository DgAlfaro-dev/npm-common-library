export interface IManualPaymentResponse {
    paymentId: number,
    paymentGroupId: string,
    amount: number,
    status: string,
    paymentMethod: string,
}