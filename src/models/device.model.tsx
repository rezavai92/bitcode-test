export interface DeviceModelType {

    Id : number ,
    BrandId : string ,
    Name : string ,
    TypeId : number,
    Comment : string|null,
    Description : string
}

export interface DeviceType{
    Id : number,
    Description : string
}

export interface DeviceModelDataType {
    Id: number;
    DataType: string;
    Brand: string;
    Model: string;
    Name: string;
    DisplayName: string;
    Description: string;
    Status: null|string;
    GroupId: null | string|number;
    ProtocolOrder: null | string;
}
