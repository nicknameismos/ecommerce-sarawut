export class ShopModel {
    _id: string;
    name: string;
    detail: string;
    email: string;
    image: string;
    tel: string;
    map: Map = new Map();
}
export class Map {
    lat: string;
    long: string;
}