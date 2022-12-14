import { useEffect } from "react";
import useFetch from "use-http";
import { useAppDispatch } from "../../store/hooks";
import { setClothingListAction } from "../../store/slices/clothingSlice";
import { ClothingDataItem } from "../../types/api.types";
import { fetchClothingItemsHelpers as helpers } from "./helpers";

const URL = "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94";

const useFetchClothingItems = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useFetch<ClothingDataItem[]>(URL, []);

  useEffect(() => {
    if (data && !loading) {
      dispatch(setClothingListAction(helpers.createSetClothingListActionPayload(data)))
      return;
    }
    console.log(loading)
  }, [data, dispatch, loading])

  return { loading }
};

export default useFetchClothingItems