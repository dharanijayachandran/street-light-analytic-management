import { commonObject } from "./commonObject";

export class statusIndicator{
    siteId: number;
    siteName: string;
    totalCount: commonObject;
    gatewayUpCount:commonObject
    gatewayDownCount: commonObject;
    children?:statusIndicator[];
}