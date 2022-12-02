import { Deed } from "./deed"

export interface TitleAbstract {
    id: number
    orderNo: string
    searchDate: Date
    effectiveDate: Date
    propertyAddress: string
    currentVesting: string
    deeds: Deed[]
}