export interface IBusinessPartnerAddressResponse {
    businessPartnerAddressId: number,
    businessPartnerId: number,
    addressType: string,
    indMain: boolean,
    dirName: string,
    country: string,
    state: string,
    city: string,
    dirLine1: string,
    dirLine2: string,
    zipCode: string,
    moreDetail: string,
    referenceGPS: string,
    georeferenceGPS: string,
    indActive: boolean
  }


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerAddressResponse:
 *       type: object
 *       properties:
 *         businessPartnerAddressId:
 *           type: number
 *           example: 1
 *         businessPartnerId:
 *           type: number
 *           example: 123
 *         addressType:
 *           type: string
 *           example: "Residencial"
 *         indMain:
 *           type: boolean
 *           example: true
 *         dirName:
 *           type: string
 *           example: "Casa Principal"
 *         country:
 *           type: string
 *           example: "México"
 *         state:
 *           type: string
 *           example: "CDMX"
 *         city:
 *           type: string
 *           example: "Ciudad de México"
 *         dirLine1:
 *           type: string
 *           example: "Calle Falsa 123"
 *         dirLine2:
 *           type: string
 *           example: "Apto 4B"
 *         zipCode:
 *           type: string
 *           example: "01000"
 *         moreDetail:
 *           type: string
 *           example: "Cerca del parque"
 *         referenceGPS:
 *           type: string
 *           example: "19.432608, -99.133209"
 *         georeferenceGPS:
 *           type: string
 *           example: "19.432608, -99.133209"
 *         indActive:
 *           type: boolean
 *           example: true
 *       required:
 *         - businessPartnerAddressId
 *         - businessPartnerId
 *         - addressType
 *         - indMain
 *         - dirName
 *         - country
 *         - state
 *         - city
 *         - dirLine1
 *         - zipCode
 *         - indActive
 *       description: Respuesta de la dirección del Socio de Negocios.
 */