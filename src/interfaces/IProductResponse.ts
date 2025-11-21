import { IPriceListResponse } from './IPriceListResponse.js';

export interface IProductResponse {
  priceCurrency: ICurrency;
  productId: number;
  productCode: string;
  name: string;
  productPhotoUrl: string;
  detail: string;
  note: string;
  subCategory: ISubCategory;
  indActive: boolean;
  indArchived: boolean;
  inactivationDate: Date;
  inactivationUser: string;
  activationDate: Date;
  activationUser: string;
  termsAndConditionsLink: string;
  contractMonths: number;
  priceInvoiceFrequencyMonths: number;
  taxRequired: number;
  responsibleApprovalRequired: boolean;
  supervisorApprovalRequired: boolean;
  payRequired: boolean;
  dueDate: Date;
  indPack: boolean;
  productDetail: IProductDetail[];
  productTerms: IProductTerms[];
  productTranslate: IProductTranslate[];
  priceList?: IPriceListResponse;
  indPlan: Boolean;
}

export interface IProductTranslate {
  productTranslateId: number;
  productId: number;
  languageId: number;
  name: string;
  detail: string;
}

export interface IProductTerms {
  productTermsId: number;
  productId: number;
  country: string;
  languageId: number;
  termsAndConditionsLink: string;
  indActive: boolean;
  startDate: Date;
  finishDate: Date;
}

export interface IProductDetail {
  productDetailId: number;
  product: string;
  productMember: string;
  quantity: number;
  note: string;
}

interface ICurrency {
  currencyId: number;
  ISO2Code: string;
  ISO3Code: string;
  symbol: string;
  name: string;
  indActive: boolean;
}

interface ISubCategory {
  productSubCategoryId: number;
  productCategory: IProductCategory;
  name: string;
  detail: string;
  indActive: boolean;
}

interface IProductCategory {
  productCategoryId: number;
  productClass: IProductClass;
  name: string;
  detail: string;
  indActive: boolean;
}

interface IProductClass {
  productClassId: number;
  name: string;
  detail: string;
  indActive: boolean;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IProductResponse:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           example: 1
 *           description: ID del producto.
 *         productCode:
 *           type: string
 *           example: "P001"
 *           description: Código del producto.
 *         name:
 *           type: string
 *           example: "Producto A"
 *           description: Nombre del producto.
 *         productPhotoUrl:
 *           type: string
 *           example: "https://example.com/product.jpg"
 *           description: URL de la foto del producto.
 *         detail:
 *           type: string
 *           example: "Detalle del producto"
 *           description: Detalle del producto.
 *         note:
 *           type: string
 *           example: "Nota adicional del producto"
 *           description: Nota adicional sobre el producto.
 *         subCategory:
 *           $ref: '#/components/schemas/ISubCategory'
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indica si el producto está activo.
 *         indArchived:
 *           type: boolean
 *           example: false
 *           description: Indica si el producto está archivado.
 *         inactivationDate:
 *           type: string
 *           format: date-time
 *           example: "2024-09-01T00:00:00Z"
 *           description: Fecha de inactivación del producto.
 *         inactivationUser:
 *           type: string
 *           example: "John Doe"
 *           description: Usuario que inactivó el producto.
 *         activationDate:
 *           type: string
 *           format: date-time
 *           example: "2024-01-01T00:00:00Z"
 *           description: Fecha de activación del producto.
 *         activationUser:
 *           type: string
 *           example: "Jane Doe"
 *           description: Usuario que activó el producto.
 *         termsAndConditionsLink:
 *           type: string
 *           example: "https://example.com/terms"
 *           description: Enlace a los términos y condiciones del producto.
 *         contractMonths:
 *           type: integer
 *           example: 12
 *           description: Meses de contrato del producto.
 *         priceInvoiceFrequencyMonths:
 *           type: integer
 *           example: 6
 *           description: Frecuencia de facturación del producto en meses.
 *         taxRequired:
 *           type: number
 *           format: float
 *           example: 18.0
 *           description: Porcentaje de impuesto requerido para el producto.
 *         responsibleApprovalRequired:
 *           type: boolean
 *           example: true
 *           description: Indica si se requiere aprobación del responsable.
 *         supervisorApprovalRequired:
 *           type: boolean
 *           example: true
 *           description: Indica si se requiere aprobación del supervisor.
 *         payRequired:
 *           type: boolean
 *           example: true
 *           description: Indica si se requiere pago para el producto.
 *         dueDate:
 *           type: string
 *           format: date-time
 *           example: "2024-09-30T00:00:00Z"
 *           description: Fecha de vencimiento del pago.
 *         indPack:
 *           type: boolean
 *           example: false
 *           description: Indica si el producto es parte de un paquete.
 *         productDetail:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IProductDetail'
 *         productTerms:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IProductTerms'
 *         productTranslate:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IProductTranslate'
 *         priceList:
 *           $ref: '#/components/schemas/IPriceListResponse'
 *       required:
 *         - productId
 *         - productCode
 *         - name
 *         - indActive
 *         - indArchived
 *         - contractMonths
 *         - priceInvoiceFrequencyMonths
 *         - taxRequired
 *         - responsibleApprovalRequired
 *         - supervisorApprovalRequired
 *         - payRequired
 *         - indPack
 *       description: Información detallada de un producto.
 */
