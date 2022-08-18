import { IClothingDict, IClothingIdsByType } from "./slice.types"

export interface SetClothingListActionPayload {
    clothingList: IClothingDict
    clothingIdsByType: IClothingIdsByType
}