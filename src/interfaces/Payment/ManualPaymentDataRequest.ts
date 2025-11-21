export interface ManualPaymentDataRequest {
    businessPartnerId: number;
    date: Date;
    businessPartnerResponsibleId: number;
    currencyId: number;
    referenceId?: number;
    concept: string;
    assignedTo: number;
    details?: string;
    internalNote?: string;
    netAmount: number;
    centerId: number;
}