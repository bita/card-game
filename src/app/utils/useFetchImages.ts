import { createApi } from "unsplash-js";
import { ImageType } from "../types/imageCard.type";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import { getRandomInt } from "./math";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_API_ACCESS_KEY as string,
});

function fetchData(
  setData: any,
  count: number,
  theme: string,
  setIsLoadin: any,
  setError: any
) {
  setIsLoadin(true);
  unsplash.search
    .getPhotos({
      query: theme,
      page: getRandomInt(20, 1),
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
        setError(res.errors);
      }
      setIsLoadin(false);
    })
    .catch((e) => {
      setIsLoadin(false);
      setError(e);
      console.log("something went wrong!");
    });
}

export function useFetchImage() {
  const { dificultyValue, themeValue } = useAppSelector(
    (state) => state.settingReducer.value
  );
  const [data, setData] = useState([]);
  const [isLoading, setIsLoadin] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData(setData, dificultyValue, themeValue, setIsLoadin, setError);
  }, [dificultyValue, themeValue]);

  function fetchNewPhotos() {
    fetchData(setData, dificultyValue, themeValue, setIsLoadin, setError);
  }

  return {
    photos: data,
    fetchNewPhotos,
    isLoading,
    error,
  };
}
