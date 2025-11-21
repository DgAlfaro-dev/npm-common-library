export interface IBulkInvoiceRequest {
    period: string;
    centroId: number;
    productId?: number;
    invoiceDate: Date;
    concept: string;
    autoCharge: boolean;
    reverseBatch: boolean;
    batchNumber?: string;
    docType: 'factura' | 'NC';
}