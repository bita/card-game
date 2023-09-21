// export type ImageCardType = {
//     id: number;
//     matched: boolean;
//     flipped: boolean;
//     src: string;
// }
export type ImageCardType = {
    id: string
    cardId: number
    url: string
    width?: number
    height?: number
    alt?: string
    cardState: string
}

export type ImageType = {
    id: string
    url: string
    width?: number
    height?: number
    alt?: string
}