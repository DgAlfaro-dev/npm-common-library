export interface IBlockingReasonModel {
  blockingReasonId: number;
  blockingReasonName: string;
  colour: string;
  colourId: {
    catalogId: string;
    catalogCode: string;
    catalogDescription: string;
  };
  indActive: boolean;
  indStatus: {
    catalogId: string;
    catalogCode: string;
    catalogDescription: string;
  };
  note: null | string;
}
