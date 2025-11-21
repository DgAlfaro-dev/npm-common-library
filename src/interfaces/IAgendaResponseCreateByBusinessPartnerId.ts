export interface IAgendaResponseCreateByBusinessPartner {
    agendaId: number;
    agendaIdOrigin: number | null;
    usuarioId: number;
    agendaTypeId: number;
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
    indFinish?: boolean;
    finishedBy?: number | null;
    finishDate?: Date | null;
  }



  /**
 * @swagger
 * components:
 *  schemas:
 *    IAgendaResponseCreateByBusinessPartner:
 *      type: object
 *      properties:
 *        agendaId:
 *          type: integer
 *          description: Unique identifier of the agenda
 *        agendaIdOrigin:
 *          type: integer
 *          nullable: true
 *          description: Origin identifier of the agenda, if any
 *        usuarioId:
 *          type: integer
 *          description: Identifier of the user associated with the agenda
 *        agendaTypeId:
 *          type: integer
 *          description: Type identifier of the agenda
 *        aTitle:
 *          type: string
 *          description: Title of the agenda
 *        origen:
 *          type: string
 *          description: Origin of the agenda
 *        detail:
 *          type: string
 *          description: Detail of the agenda
 *        createdDate:
 *          type: string
 *          format: date-time
 *          description: Creation date of the agenda
 *        StartDateTime:
 *          type: string
 *          format: date-time
 *          description: Start date and time of the agenda
 *        FinishDateTime:
 *          type: string
 *          format: date-time
 *          description: Finish date and time of the agenda
 *        aRepeat:
 *          type: string
 *          description: Repeat pattern of the agenda
 *        RepeatFreq:
 *          type: integer
 *          description: Frequency of repetition
 *        Alert1:
 *          type: integer
 *          nullable: true
 *          description: First alert time
 *        Alert2:
 *          type: integer
 *          nullable: true
 *          description: Second alert time
 *        Alert3:
 *          type: integer
 *          nullable: true
 *          description: Third alert time
 *        createdByUsuarioId:
 *          type: integer
 *          description: User ID who created the agenda
 *        businessPartnerMedicineId:
 *          type: integer
 *          nullable: true
 *          description: Associated business partner medicine ID, if any
 *        indActivo:
 *          type: boolean
 *          description: Indicates whether the agenda is active
 *        indFinish:
 *          type: boolean
 *          nullable: true
 *          description: Indicates whether the agenda is finished
 *        finishedBy:
 *          type: integer
 *          nullable: true
 *          description: User ID who finished the agenda, if any
 *        finishDate:
 *          type: string
 *          format: date-time
 *          nullable: true
 *          description: Finish date of the agenda, if any
 *      required:
 *        - agendaId
 *        - usuarioId
 *        - agendaTypeId
 *        - aTitle
 *        - origen
 *        - detail
 *        - createdDate
 *        - StartDateTime
 *        - FinishDateTime
 *        - aRepeat
 *        - RepeatFreq
 *        - createdByUsuarioId
 *        - indActivo
 */
