export interface ISalesDocRequest {
  centroId: number;
  docType: string;
  reasonId: number;
  detail: string;
  note: string;
  businessPartnerId: number;
  businessPartnerPayerId: number;
  businessPartnerAddressId: number;
  requestId: number;
  quoteId: number;
  assignedSalesPersonId: number;
  salesDocDate: Date;
  dueDate: Date;
  currencyId: number;
  netAmount: number;
  balanceAmount: number;
  salesDocReference: string;
  salesDocIdRef: number;
  createdUserId: number;
  countryId: number;
  indReversed: boolean;
  salesDocProduct: ISalesDocProductRequest[];
  salesDocRef: ISalesDocRefRequest[];
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISalesDocRequest:
 *       type: object
 *       properties:
 *         centroId:
 *           type: number
 *           description: Identificador único del centro asociado al documento de venta.
 *         docType:
 *           type: string
 *           description: Tipo de documento de venta.
 *         reasonId:
 *           type: number
 *           description: Identificador único del motivo asociado al documento de venta.
 *         detail:
 *           type: string
 *           description: Detalles adicionales del documento de venta.
 *         note:
 *           type: string
 *           description: Nota adicional sobre el documento de venta.
 *         businessPartnerId:
 *           type: number
 *           description: Identificador único del socio de negocio asociado.
 *         businessPartnerPayerId:
 *           type: number
 *           description: Identificador único del pagador asociado al documento de venta.
 *         businessPartnerAddressId:
 *           type: number
 *           description: Identificador único de la dirección del socio de negocio.
 *         requestId:
 *           type: number
 *           description: Identificador único de la solicitud asociada al documento de venta.
 *         quoteId:
 *           type: number
 *           description: Identificador único de la cotización asociada al documento de venta.
 *         assignedSalesPersonId:
 *           type: number
 *           description: Identificador único del vendedor asignado.
 *         salesDocDate:
 *           type: string
 *           format: date-time
 *           description: Fecha del documento de venta.
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de vencimiento del documento de venta.
 *         currencyId:
 *           type: number
 *           description: Identificador único de la moneda utilizada.
 *         netAmount:
 *           type: number
 *           description: Importe neto del documento de venta.
 *         balanceAmount:
 *           type: number
 *           description: Saldo pendiente del documento de venta.
 *         salesDocReference:
 *           type: string
 *           description: Referencia del documento de venta.
 *         salesDocIdRef:
 *           type: number
 *           description: Identificador único de referencia del documento de venta.
 *         createdUserId:
 *           type: number
 *           description: Identificador único del usuario que creó el documento de venta.
 *         countryId:
 *           type: number
 *           description: Identificador único del país asociado al documento de venta.
 *         indReversed:
 *           type: boolean
 *           description: Indicador de si el documento de venta ha sido revertido.
 *         salesDocProduct:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ISalesDocProductRequest'
 *           description: Lista de productos asociados al documento de venta.
 *         salesDocRef:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ISalesDocRefRequest'
 *           description: Lista de referencias del documento de venta.
 */

export interface ISalesDocProductRequest {
  productId: number;
  quantity: number;
  price: number;
  subtotal: number;
  saleTaxRate: number;
  saleTaxAmount: number;
  discount: number;
  total: number;
  startDate?: Date;
  endDate?: Date;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISalesDocProductRequest:
 *       type: object
 *       properties:
 *         productId:
 *           type: number
 *           description: Identificador único del producto.
 *         quantity:
 *           type: number
 *           description: Cantidad del producto.
 *         price:
 *           type: number
 *           description: Precio del producto.
 *         subtotal:
 *           type: number
 *           description: Subtotal del producto.
 *         saleTaxRate:
 *           type: number
 *           description: Tasa de impuesto de venta aplicada al producto.
 *         saleTaxAmount:
 *           type: number
 *           description: Importe de impuesto de venta aplicado al producto.
 *         discount:
 *           type: number
 *           description: Descuento aplicado al producto.
 *         total:
 *           type: number
 *           description: Importe total del producto.
 */

export interface ISalesDocRefRequest {
  centroId: number;
  salesDocIdRef: number;
  currencyId: number;
  netAmount: number;
  balanceAmount: number;
  amount: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISalesDocRefRequest:
 *       type: object
 *       properties:
 *         centroId:
 *           type: number
 *           description: Identificador único del centro asociado a la referencia del documento de venta.
 *         salesDocIdRef:
 *           type: number
 *           description: Identificador único de referencia del documento de venta.
 *         currencyId:
 *           type: number
 *           description: Identificador único de la moneda utilizada en la referencia del documento de venta.
 *         netAmount:
 *           type: number
 *           description: Importe neto de la referencia del documento de venta.
 *         balanceAmount:
 *           type: number
 *           description: Saldo pendiente de la referencia del documento de venta.
 *         amount:
 *           type: number
 *           description: Importe total de la referencia del documento de venta.
 */
