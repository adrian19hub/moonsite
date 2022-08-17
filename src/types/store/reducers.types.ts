import { IClothingDict, IClothingIdsByType } from "./slice.types"

export interface SetClothingListActionPayloadP {
    clothingList: IClothingDict
    clothingIdsByType: IClothingIdsByType
}