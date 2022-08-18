export enum ClothingTypes {
    Shoes = 'shoes',
    Shirt = 'shirt',
    Pants = 'pants'
}

enum Colors {
    Black = 'black',
    Pink = 'pink',
    Green = 'green',
    White = 'white',
    Brown = 'brown',
    Cyan = 'cyan',
    Red = 'red',
    Orange = 'orange',
    Gray = 'gray'
};

type ShirtSizes = 'XXL' | 'XL' | 'L' | 'M' | 'S';
type PantsSizes = number;
type ShoeSizes = number;

export interface IClothing {
    type: ClothingTypes;
    color: Colors;
    size: ShirtSizes | PantsSizes | ShoeSizes;
    brand: string;
    imageUrl: string;
}