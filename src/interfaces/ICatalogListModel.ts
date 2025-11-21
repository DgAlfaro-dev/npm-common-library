export interface ICatalogListModel {
    catalogName: string;
    catalogId: string;
    catalogDescription: string;
    catalogCode: string;
}

export interface ICatalogListCurrencyModel {
    catalogName: string;
    catalogId: string;
    catalogDescription: string;
    catalogCode: string;
    ISO2Code: string;
    ISO3Code: string;
}

export interface ICatalogListCentroModel {
    catalogName: string;
    catalogId: string;
    catalogDescription: string;
    catalogCode: string;
    unitWeight: string,
    unitHeight: string,
    dirLine1: string;
    dirLine2: string;
    zipCode: string;
    countryName: string;
    stateName: string;
    cityName: string;
    moreDetail: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ICatalogListModel:
 *       type: object
 *       properties:
 *         catalogName:
 *           type: string
 *           example: Catalogo 1
 *         catalogId:
 *           type: string
 *           example: 1
 *         catalogDescription:
 *           type: string
 *           example: Descripción del catálogo 1
 *         catalogCode:
 *           type: string
 *           example: CODE001
 *       required:
 *         - catalogName
 *         - catalogId
 *         - catalogDescription
 *         - catalogCode
 *       description: Modelo para un elemento de catálogo.
 */
