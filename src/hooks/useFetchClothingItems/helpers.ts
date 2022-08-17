import { ClothingDataItem } from "../../types/api.types"
import { ClothingTypes } from "../../types/common.types";
import { SetClothingListActionPayload } from "../../types/store/reducers.types"
import { ClothingId, IClothingDict } from "../../types/store/slice.types";


const createSetClothingListActionPayload = (rawData: ClothingDataItem[]): SetClothingListActionPayload => {
    const clothingListDict: IClothingDict = {};

    const shirts = new Set<ClothingId>([])
    const pants = new Set<ClothingId>([])
    const shoes = new Set<ClothingId>([])


    rawData.forEach(rawDataItem => {
        const { id, ...values } = rawDataItem;
        clothingListDict[id] = { ...values }

        // adding clothing item id to proper set by type
        switch (rawDataItem.type) {
            case ClothingTypes.Shirt:
                shirts.add(String(id))
                return;

            case ClothingTypes.Pants:
                pants.add(String(id))
                return;

            case ClothingTypes.Shoes:
                shoes.add(String(id))
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