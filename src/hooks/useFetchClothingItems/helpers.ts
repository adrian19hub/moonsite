import { ClothingDataItem } from "../../types/api.types"
import { ClothingTypes } from "../../types/common.types";
import { SetClothingListActionPayload } from "../../types/store/reducers.types"
import { ClothingId, IClothingDict } from "../../types/store/slice.types";


const createSetClothingListActionPayload = (rawData: ClothingDataItem[]): SetClothingListActionPayload => {
    const clothingListDict: IClothingDict = {};

    const shirts: ClothingId[] = []
    const pants: ClothingId[] = []
    const shoes: ClothingId[] = []


    rawData.forEach(rawDataItem => {
        const { id, ...values } = rawDataItem;
        // Creating outfits dictionary by item id
        clothingListDict[id] = { ...values }

        // adding clothing item id to proper array by type
        switch (rawDataItem.type) {
            case ClothingTypes.Shirt:
                shirts.push(String(id))
                return;

            case ClothingTypes.Pants:
                pants.push(String(id))
                return;

            case ClothingTypes.Shoes:
                shoes.push(String(id))
                return;

            default:
                break;
        }
    })

    return {
        clothingList: clothingListDict,
        clothingIdsByType: {
            shirts,
            pants,
            shoes
        }
    };
}

export const fetchClothingItemsHelpers = {
    createSetClothingListActionPayload
}