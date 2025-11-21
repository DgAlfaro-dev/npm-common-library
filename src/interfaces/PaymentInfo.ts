export interface paymentInfo {
    id?: number;
    paymentGroupId?: string;
    amount?: number;
    dateTimeExecuted?: Date;
    dateTimeConfirmed?: Date;
    businessPartnerId?: number;
    businessPartnerPayerId?: number;
    currency?: number;
    orderIdentifier?: string;
    currencyIso3Code?: string;
    status?: 'CREATED' | 'AUTHORIZED' | 'CAPTURED' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
    paymentMethod?: 'TCR' | 'MANUAL';
    note?: string;
    centroId?: number;
    isPartialPayment?: boolean;
    businessPartnerResponsibleId?: number;
    paymentDate?: Date;
    paymentConcept?: string;
    referenceUserId?: number;
    assignedTo?: number;
    detail?: string;
}