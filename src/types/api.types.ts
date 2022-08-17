import { IClothing } from "./common.types";

export interface ClothingDataItem extends IClothing {
    id: number
}

export type ClothingApiData = ClothingDataItem[]