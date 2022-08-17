import { IClothing } from "../common.types";

type ClothingId = string;

export interface IClothingDict {
    [key: ClothingId]: IClothing
}


export interface IOutfit {
    id: string;
    shirtId: ClothingId;
    pantsId: ClothingId;
    shoeId: ClothingId
    createdAt: Date;
    timeToCreateInMinutes: number
}

export interface IClothingIdsByType { shirts: Set<ClothingId>, pants: Set<ClothingId>, shoes: Set<ClothingId> }


export interface ClothingSliceState {
    ui: {
        data: {
            createdOutfits: IOutfit[]
            itemSuggestions: {
                clothingId: ClothingId;
                suggestionAccuracyRating: number
            }[]
        }

    },
    api: {
        requests: {
            clothingList: IClothingDict
            clothingIdsByType: IClothingIdsByType
        }
    }
    common: {}
}