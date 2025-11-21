export interface IBusinessPartnerConditionUpdateRequest {
    conditionId: number,
    diagnosticDate: Date,
    medicalRptId: number,
    note: string,
    registerDate: Date,
    registeredBy: number,
    endDate: Date,
    endedBy: number,
    indActive: boolean,
    inactivationNote: string,
}