export interface IPriceListResponse {
    priceListId: number,
    centro: ICentro,
    businessPartnerGroup: IBusinessPartnerGroup,
    businessPartnerName: string,
    businessParntner: IBusinessPartner,
    productName: string,
    product: IProduct,
    startDate: Date,
    endDate: Date,
    indApproved: boolean,
    priceAmount: number,
    ISO3Code: string,
    priceCurrency: ICurrency,
    priceUnitQuantity: number,
    taxRatePorc: number,
    payDay: number,
    indFraccionalPay: boolean,
}

interface ICentro {
    centroId: number,
    codigo: string,
    nombre: string,
}

interface IBusinessPartnerGroup {
    businessPartnerGroupId: number,
    businessPartnerGroupName: string,
    indActive: boolean
}

interface IBusinessPartner {
    businessPartnerId: number,
    firstname: string,
    secondName: string,
    lastName: string,
    sLastName: string
}

interface IProduct {
    productId: number,
    productCode: string,
    name: string
}

interface ICurrency {
    currencyId: number,
    ISO2Code: string,
    ISO3Code: string,
    symbol: string,
    name: string
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IPriceListResponse:
 *       type: object
 *       properties:
 *         priceListId:
 *           type: integer
 *           example: 1
 *           description: ID de la lista de precios.
 *         centro:
 *           $ref: '#/components/schemas/ICentro'
 *         businessPartnerGroup:
 *           $ref: '#/components/schemas/IBusinessPartnerGroup'
 *         businessPartnerName:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre del socio de negocios.
 *         businessParntner:
 *           $ref: '#/components/schemas/IBusinessPartner'
 *         productName:
 *           type: string
 *           example: "Producto A"
 *           description: Nombre del producto.
 *         product:
 *           $ref: '#/components/schemas/IProduct'
 *         startDate:
 *           type: string
 *           format: date
 *           example: "2024-01-01"
 *           description: Fecha de inicio de la vigencia del precio.
 *         endDate:
 *           type: string
 *           format: date
 *           example: "2024-12-31"
 *           description: Fecha de fin de la vigencia del precio.
 *         indApproved:
 *           type: boolean
 *           example: true
 *           description: Indica si el precio está aprobado.
 *         priceAmount:
 *           type: number
 *           format: float
 *           example: 100.50
 *           description: Importe del precio.
 *         ISO3Code:
 *           type: string
 *           example: "USD"
 *           description: Código ISO de la moneda.
 *         priceCurrency:
 *           $ref: '#/components/schemas/ICurrency'
 *         priceUnitQuantity:
 *           type: number
 *           example: 10
 *           description: Cantidad de unidades para el precio.
 *         taxRatePorc:
 *           type: number
 *           format: float
 *           example: 18.0
 *           description: Porcentaje de impuesto aplicado.
 *         payDay:
 *           type: integer
 *           example: 30
 *           description: Día de pago.
 *         indFraccionalPay:
 *           type: boolean
 *           example: true
 *           description: Indica si el pago es fraccional.
 *       required:
 *         - priceListId
 *         - centro
 *         - businessPartnerGroup
 *         - businessPartnerName
 *         - productName
 *         - startDate
 *         - endDate
 *         - indApproved
 *         - priceAmount
 *         - ISO3Code
 *         - priceCurrency
 *         - priceUnitQuantity
 *         - taxRatePorc
 *         - payDay
 *       description: Información detallada de una lista de precios.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     ICentro:
 *       type: object
 *       properties:
 *         centroId:
 *           type: integer
 *           example: 1
 *           description: ID del centro.
 *         codigo:
 *           type: string
 *           example: "C001"
 *           description: Código del centro.
 *         nombre:
 *           type: string
 *           example: "Centro A"
 *           description: Nombre del centro.
 *       required:
 *         - centroId
 *         - codigo
 *         - nombre
 *       description: Información de un centro.
 *     IBusinessPartnerGroup:
 *       type: object
 *       properties:
 *         businessPartnerGroupId:
 *           type: integer
 *           example: 1
 *           description: ID del grupo de socios de negocios.
 *         businessPartnerGroupName:
 *           type: string
 *           example: "Grupo A"
 *           description: Nombre del grupo de socios de negocios.
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indica si el grupo está activo.
 *       required:
 *         - businessPartnerGroupId
 *         - businessPartnerGroupName
 *         - indActive
 *       description: Información de un grupo de socios de negocios.
 *     IBusinessPartner:
 *       type: object
 *       properties:
 *         businessPartnerId:
 *           type: integer
 *           example: 1
 *           description: ID del socio de negocios.
 *         firstname:
 *           type: string
 *           example: "John"
 *           description: Primer nombre del socio de negocios.
 *         secondName:
 *           type: string
 *           example: "A."
 *           description: Segundo nombre del socio de negocios.
 *         lastName:
 *           type: string
 *           example: "Doe"
 *           description: Primer apellido del socio de negocios.
 *         sLastName:
 *           type: string
 *           example: "Smith"
 *           description: Segundo apellido del socio de negocios.
 *       required:
 *         - businessPartnerId
 *         - firstname
 *         - lastName
 *       description: Información de un socio de negocios.
 *     IProduct:
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
 *       required:
 *         - productId
 *         - productCode
 *         - name
 *       description: Información de un producto.
 *     ICurrency:
 *       type: object
 *       properties:
 *         currencyId:
 *           type: integer
 *           example: 1
 *           description: ID de la moneda.
 *         ISO2Code:
 *           type: string
 *           example: "US"
 *           description: Código ISO 2 de la moneda.
 *         ISO3Code:
 *           type: string
 *           example: "USD"
 *           description: Código ISO 3 de la moneda.
 *         symbol:
 *           type: string
 *           example: "$"
 *           description: Símbolo de la moneda.
 *         name:
 *           type: string
 *           example: "Dollar"
 *           description: Nombre de la moneda.
 *       required:
 *         - currencyId
 *         - ISO3Code
 *         - name
 *       description: Información de una moneda.
 */
