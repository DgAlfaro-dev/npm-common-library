export interface ISalesDocResponse {
  salesDocId: number;
  centro: ICentro;
  docType: string;
  reason: IReason;
  detail: string;
  note: string;
  businessPartnerId: number;
  businessPartner: string;
  businessPartnerPayerId: number;
  businessPartnerPayer: string;
  countryName: string;
  country: ICountry;
  businessPartnerAddress: IBusinessPartnerAddress;
  request: IRequest;
  quote: IQuote;
  assignedSalesPersonId: number;
  assignedSalesPerson: string;
  salesDocDate: Date;
  dueDate: Date;
  currency: ICurrency;
  netAmount: number;
  balanceAmount: number;
  salesDocReference: string;
  salesDocIdRef: number;
  createdUser: string;
  indReserved: boolean;
  salesDocRef: ISalesDocRef[];
  salesDocProduct: ISalesDocProduct[];
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISalesDocResponse:
 *       type: object
 *       properties:
 *         salesDocId:
 *           type: number
 *           description: Identificador único del documento de venta.
 *         centro:
 *           $ref: '#/components/schemas/ICentro'
 *         docType:
 *           type: string
 *           description: Tipo de documento.
 *         reason:
 *           $ref: '#/components/schemas/IReason'
 *         detail:
 *           type: string
 *           description: Detalle del documento de venta.
 *         note:
 *           type: string
 *           description: Nota adicional sobre el documento de venta.
 *         businessPartnerId:
 *           type: number
 *           description: Identificador único del socio de negocio.
 *         businessPartner:
 *           type: string
 *           description: Nombre del socio de negocio.
 *         businessPartnerPayerId:
 *           type: number
 *           description: Identificador único del pagador.
 *         businessPartnerPayer:
 *           type: string
 *           description: Nombre del pagador.
 *         countryName:
 *           type: string
 *           description: Nombre del país.
 *         country:
 *           $ref: '#/components/schemas/ICountry'
 *         businessPartnerAddress:
 *           $ref: '#/components/schemas/IBusinessPartnerAddress'
 *         request:
 *           $ref: '#/components/schemas/IRequest'
 *         quote:
 *           $ref: '#/components/schemas/IQuote'
 *         assignedSalesPersonId:
 *           type: number
 *           description: Identificador único del vendedor asignado.
 *         assignedSalesPerson:
 *           type: string
 *           description: Nombre del vendedor asignado.
 *         salesDocDate:
 *           type: string
 *           format: date-time
 *           description: Fecha del documento de venta.
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de vencimiento del documento de venta.
 *         currency:
 *           $ref: '#/components/schemas/ICurrency'
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
 *         createdUser:
 *           type: string
 *           description: Usuario que creó el documento de venta.
 *         indReserved:
 *           type: boolean
 *           description: Indicador de si el documento de venta está reservado.
 *         salesDocRef:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ISalesDocRef'
 *           description: Lista de referencias del documento de venta.
 *         salesDocProduct:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ISalesDocProduct'
 *           description: Lista de productos asociados al documento de venta.
 */

interface ICountry {
  countryId: number;
  countryName: string;
  note: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ICountry:
 *       type: object
 *       properties:
 *         countryId:
 *           type: number
 *           description: Identificador único del país.
 *         countryName:
 *           type: string
 *           description: Nombre del país.
 *         note:
 *           type: string
 *           description: Nota sobre el país.
 */

export interface ISalesDocProduct {
  salesDocId: number;
  product: IProduct;
  detail: string;
  quantity: number;
  price: number;
  subtotal: number;
  saleTaxRate: number;
  saleTaxAmount: number;
  discount: number;
  total: number;
  startDate: Date;
  endDate: Date;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISalesDocProduct:
 *       type: object
 *       properties:
 *         salesDocId:
 *           type: number
 *           description: Identificador único del documento de venta.
 *         product:
 *           $ref: '#/components/schemas/IProduct'
 *         detail:
 *           type: string
 *           description: Detalle del producto.
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

interface IProduct {
  productId: number;
  productCode: string;
  name: string;
  productPhotoUrl: string;
  detail: string;
  note: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISalesDocRef:
 *       type: object
 *       properties:
 *         salesDocId:
 *           type: number
 *           description: Identificador único del documento de venta.
 *         centroId:
 *           type: number
 *           description: Identificador único del centro.
 *         salesDocRef:
 *           type: object
 *           properties:
 *             salesDocIdRef:
 *               type: number
 *               description: Identificador único de referencia del documento de venta.
 *             salesDocDate:
 *               type: string
 *               format: date-time
 *               description: Fecha del documento de venta de referencia.
 *             dueDate:
 *               type: string
 *               format: date-time
 *               description: Fecha de vencimiento del documento de venta de referencia.
 *         currencyId:
 *           type: number
 *           description: Identificador único de la moneda.
 *         netAmount:
 *           type: number
 *           description: Importe neto.
 *         balanceAmount:
 *           type: number
 *           description: Saldo pendiente.
 *         amount:
 *           type: number
 *           description: Importe total.
 */

export interface ISalesDocRef {
  salesDocId: number;
  centroId: number;
  salesDocIdRef: number;
  salesDocRef: {
    salesDocIdRef: number;
    salesDocDate: Date;
    dueDate: Date;
  };
  currencyId: number;
  netAmount: number;
  balanceAmount: number;
  amount: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ICurrency:
 *       type: object
 *       properties:
 *         currencyId:
 *           type: number
 *           description: Identificador único de la moneda.
 *         ISO2Code:
 *           type: string
 *           description: Código ISO 2 de la moneda.
 *         ISO3Code:
 *           type: string
 *           description: Código ISO 3 de la moneda.
 *         symbol:
 *           type: string
 *           description: Símbolo de la moneda.
 *         name:
 *           type: string
 *           description: Nombre de la moneda.
 */

interface ICurrency {
  currencyId: number;
  ISO2Code: string;
  ISO3Code: string;
  symbol: string;
  name: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IQuote:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Identificador único de la cotización.
 *         businessPartnerId:
 *           type: number
 *           description: Identificador único del socio de negocio.
 *         businessPartner:
 *           type: string
 *           description: Nombre del socio de negocio.
 *         customerName:
 *           type: string
 *           description: Nombre del cliente.
 *         customerMail:
 *           type: string
 *           description: Correo electrónico del cliente.
 *         customerPhone:
 *           type: string
 *           description: Teléfono del cliente.
 *         status:
 *           type: string
 *           description: Estado de la cotización.
 */

interface IQuote {
  id: number;
  businessPartnerId: number;
  businessPartner: string;
  customerName: string;
  customerMail: string;
  customerPhone: string;
  status: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IRequest:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Identificador único de la solicitud.
 *         subject:
 *           type: string
 *           description: Asunto de la solicitud.
 *         note:
 *           type: string
 *           description: Nota adicional sobre la solicitud.
 *         status:
 *           type: string
 *           description: Estado de la solicitud.
 */

interface IRequest {
  id: number;
  subject: string;
  note: string;
  status: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerAddress:
 *       type: object
 *       properties:
 *         businessPartnerAddressId:
 *           type: number
 *           description: Identificador único de la dirección del socio de negocio.
 *         businessPartnerId:
 *           type: string
 *           description: Identificador único del socio de negocio.
 *         addressType:
 *           type: string
 *           description: Tipo de dirección.
 *         indMain:
 *           type: boolean
 *           description: Indicador de si es la dirección principal.
 *         dirName:
 *           type: string
 *           description: Nombre de la dirección.
 *         country:
 *           type: string
 *           description: País de la dirección.
 *         state:
 *           type: string
 *           description: Estado de la dirección.
 *         city:
 *           type: string
 *           description: Ciudad de la dirección.
 *         dirLine1:
 *           type: string
 *           description: Línea 1 de la dirección.
 *         dirLine2:
 *           type: string
 *           description: Línea 2 de la dirección.
 *         zipCode:
 *           type: string
 *           description: Código postal de la dirección.
 *         moreDetail:
 *           type: string
 *           description: Detalles adicionales de la dirección.
 *         referenceGPS:
 *           type: string
 *           description: Referencia GPS de la dirección.
 *         georeferenceGPS:
 *           type: string
 *           description: Georeferencia GPS de la dirección.
 *         indActive:
 *           type: boolean
 *           description: Indicador de si la dirección está activa.
 */

interface IBusinessPartnerAddress {
  businessPartnerAddressId: number;
  businessPartnerId: string;
  addressType: string;
  indMain: boolean;
  dirName: string;
  country: string;
  state: string;
  city: string;
  dirLine1: string;
  dirLine2: string;
  zipCode: string;
  moreDetail: string;
  referenceGPS: string;
  georeferenceGPS: string;
  indActive: boolean;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IReason:
 *       type: object
 *       properties:
 *         reasonId:
 *           type: number
 *           description: Identificador único del motivo.
 *         docType:
 *           type: string
 *           description: Tipo de documento relacionado con el motivo.
 *         name:
 *           type: string
 *           description: Nombre del motivo.
 *         note:
 *           type: string
 *           description: Nota adicional sobre el motivo.
 *         indActive:
 *           type: boolean
 *           description: Indicador de si el motivo está activo.
 */

interface IReason {
  reasonId: number;
  docType: string;
  name: string;
  note: string;
  indActive: boolean;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ICentro:
 *       type: object
 *       properties:
 *         centroId:
 *           type: number
 *           description: Identificador único del centro.
 *         codigo:
 *           type: string
 *           description: Código del centro.
 *         nombre:
 *           type: string
 *           description: Nombre del centro.
 */

interface ICentro {
  centroId: number;
  codigo: string;
  nombre: string;
}
