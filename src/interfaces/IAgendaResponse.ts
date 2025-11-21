import { randomUUID as UUID } from "crypto";
import { IAgendaResponse } from "./IAlertResponse.js";
import { ICatalogModel } from "./ICatalogModel.js";

export interface IAgendaResponseModel {
    agendaId: number;
    agendaIdOrigin: number | null;
    usuarioId: number;
    notificationTypeId: IAgendaTypeResponse;
    aTitle: string;
    origen: string;
    detail: string;
    createdDate: Date;
    StartDateTime: Date;
    FinishDateTime: Date;
    aRepeat: string;
    RepeatFreq: number;
    Alert1: number | null;
    Alert2: number | null;
    Alert3: number | null;
    createdByUsuarioId: number;
    businessPartnerMedicineId: number | null;
    indActivo: boolean;
    measure: ICatalogModel,
    dosisQuantity: number,
    isDeleted: boolean,
  }

export interface IAgendaTypeResponse{
  notificationTypeId: number,
  name: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IAgendaTypeResponse:
 *       type: object
 *       properties:
 *         agendaTypeId:
 *           type: number
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Reunión
 *       required:
 *         - agendaTypeId
 *         - nombre
 *       description: Respuesta del tipo de agenda
 * 
 *     IAgendaResponseModel:
 *       type: object
 *       properties:
 *         agendaIdOrigin:
 *           type: number
 *           nullable: true
 *           example: 1
 *         usuarioId:
 *           type: number
 *           example: 123
 *         agendaTypeId:
 *           $ref: '#/components/schemas/IAgendaTypeResponse'
 *         aTitle:
 *           type: string
 *           example: Reunión de equipo
 *         origen:
 *           type: string
 *           example: Oficina
 *         detail:
 *           type: string
 *           example: Detalles de la reunión
 *         createdDate:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T12:00:00Z"
 *         StartDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T13:00:00Z"
 *         FinishDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T14:00:00Z"
 *         aRepeat:
 *           type: string
 *           example: Diario
 *         RepeatFreq:
 *           type: number
 *           example: 1
 *         Alert1:
 *           type: number
 *           nullable: true
 *           example: 15
 *         Alert2:
 *           type: number
 *           nullable: true
 *           example: 30
 *         Alert3:
 *           type: number
 *           nullable: true
 *           example: 60
 *         createdByUsuarioId:
 *           type: number
 *           example: 456
 *         indActivo:
 *           type: boolean
 *           example: true
 *       required:
 *         - usuarioId
 *         - agendaTypeId
 *         - aTitle
 *         - origen
 *         - detail
 *         - createdDate
 *         - StartDateTime
 *         - FinishDateTime
 *         - aRepeat
 *         - RepeatFreq
 *         - createdByUsuarioId
 *         - indActivo
 *       description: Respuesta del modelo de agenda
 */