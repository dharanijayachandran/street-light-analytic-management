import { commonObject } from "./commonObject";

export class digitalStatusIndicator{
    siteId: number;
    siteName: string;
    totalCount: commonObject;
    lightOffCount: commonObject;
    lightOnCount: commonObject;
    idleCount: commonObject;
    children?:digitalStatusIndicator[];
}