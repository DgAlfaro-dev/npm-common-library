export type OperatorTypes =  'eq' | 'in'; 

export type FilterParams = {
    [field: string]: {
        [operator in OperatorTypes]?: string;
    };
};

export interface IQueryParams {
    filters: FilterParams;
    limit?: number;
    page?: number;
}