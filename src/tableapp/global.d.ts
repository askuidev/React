// Actions Props
export interface AllocationDataProps {
    description: string;
    adjustCash: boolean;
    actionType: string;
    actionValue: string;
    currentPer: string;
    symbol: string;
    targetPer: string;
    value: string;
    id: string | number;
    targetPrice: string;
    buySellPrice: string;
    driftPer: string;
}

export interface ChangeAllocationDataProps {
    value: string;
    id: string;
    field: string;
}

export interface AdjustCashDataProps {
    id: string;
    actionType: string;
    actionValue: string;
}

export interface HandleAdjustCashProps {
    type: string,
    data: string | number
}

// Reducer Props
export interface IAdjustCashData {
    actionType: string;
    actionValue: string;
}

export interface IInitialState {
    allocationData: any[];
    assetData: any[];
    allocationId: any;
    showAdjustCashModal: boolean;
    adjustCashData: IAdjustCashData;
}

// Table Props
export interface ITableRowDataProps {
    description: string;
    adjustCash: boolean;
    actionType: string;
    actionValue: string;
    currentPer: string;
    symbol: string;
    targetPer: string;
    value: string;
    id: string | number;
    targetPrice: string;
    buySellPrice: string;
    driftPer: string;
}

export interface ITableRowDataProps {
    description: string;
    adjustCash: boolean;
    actionType: string;
    actionValue: string;
    currentPer: string;
    symbol: string;
    targetPer: string;
    value: string;
    id: string | number;
    targetPrice: string;
    buySellPrice: string;
    driftPer: string;
}

export interface ITableCellProps {
    value?: string;
    id?: string | number;
    field?: string;
}

export interface ITableProps {
    tableClass?: string;
    fieldType?: string;
    allocationData: ITableRowDataProps[];
    onAdjustCashClick?: (params: ITableRowDataProps) => any;
    onDataChange?: (params: ITableCellProps) => any;
}

export interface INoDataRowProps {
    colSpan: number;
    message: string;
}

export interface ITableRowDataProps {
    description: string;
    adjustCash: boolean;
    actionType: string;
    actionValue: string;
    currentPer: string;
    symbol: string;
    targetPer: string;
    value: string;
    id: string | number;
    targetPrice: string;
    buySellPrice: string;
    driftPer: string;
}

export interface ITableCellProps {
    value?: string;
    id?: string | number;
    field?: string;
}

export interface ITableBodyProps {
    allocationData?: ITableRowDataProps[];
    fieldType?: string;
    onAdjustCashClick?: (allocationData: ITableRowDataProps) => any;
    onDataChange?: (params: ITableCellProps) => any;
}

export interface ITableControlsProps {
    leftGroupActive?: string;
    middleGroupActive?: string;
    onLeftGroupClick?: (leftGroupActive: string) => any;
    onMiddleGroupClick?: (middleGroupActive: string) => any;
}

export interface ITableRowDataProps {
    description: string;
    adjustCash: boolean;
    actionType: string;
    actionValue: string;
    currentPer: string;
    symbol: string;
    targetPer: string;
    value: string;
    id: string | number;
    targetPrice: string;
    buySellPrice: string;
    driftPer: string;
}

export interface ITableFooterProps {
    allocationData?: ITableRowDataProps[];
    searchText?: string;
}

export interface ITableFooterState {
    searchText: string;
}

export interface ITableCellProps {
    value?: string;
    id?: string | number;
    field?: string;
}

export interface ITableRowProps {
    rowData?: ITableRowDataProps;
    fieldType?: string;
    onAdjustCashClick?: (rowData: ITableRowDataProps) => any;
    onDataChange?: (params: ITableCellProps) => any;
}

export interface ITableRowState {
    targetPer?: string
}

// Button Props
export interface IButtonGroupProps {
    buttonType?: string;
    withIcons?: boolean;
    isGroup?: boolean;
    activeBtn?: string;
    mainClass?: string;
    grouped?: boolean;
    buttons?: any[];
    checkedRadio?: string;
    onButtonGroupClick?: (field: string) => any;
    onRadioChange?: (text: string, e: object) => any;
}

export interface IButtonProps {
    text?: string;
    field?: string;
    iconClass?: string;
    className?: string;
}

export interface IRadioBtnProps {
    name?: string;
    type?: string;
    text?: string;
}

// Checkbox Props
export interface ICheckboxProps {
    id?: string | number;
    label?: string;
    mainClass?: string;
    onChange?: (id: string | number, e: any) => any;
}
