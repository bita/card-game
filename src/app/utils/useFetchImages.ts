import { createApi } from "unsplash-js";
import { ImageType } from "../types/imageCard.type";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import { getRandomInt } from "./math";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_API_ACCESS_KEY as string,
});

function fetchData(setData: any, count: number, theme: string) {
  unsplash.search
    .getPhotos({
      query: theme,
      page: getRandomInt(20 , 1),
      perPage: (count * count) / 2,
      orientation: "squarish",
    })
    .then((res) => {
      const photos: ImageType[] | undefined = res.response?.results.reduce(
        (result: ImageType[], image: any) => [
          ...result,
          {
            id: image.id,
            url: image.urls.small,
            width: image.width || 100,
            height: image.height || 100,
            alt: image.alt_description || image.description,
          },
        ],
        []
      );
      if (photos && photos.length > 0) {
        setData(photos);
      }
      if (res.errors) {
        console.log(res.errors);
      }
    })
    .catch(() => {
      console.log("something went wrong!");
    });
}

export function useFetchImage() {
  const { dificultyValue, themeValue } = useAppSelector(
    (state) => state.settingReducer.value
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, dificultyValue, themeValue);
  }, [dificultyValue, themeValue]);

  function fetchNewPhotos() {
    fetchData(setData, dificultyValue, themeValue);
  }

  return {
    photos: data,
    fetchNewPhotos
  };
}
