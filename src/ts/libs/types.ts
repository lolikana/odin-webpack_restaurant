export interface IHowtoListData {
  id: string;
  text: string;
}
export interface IRestaurantCard {
  tagNew: boolean;
  img: string;
  desc: {
    title: string;
    location: string;
  };
}

interface IMenu {
  name: string;
  desc: string;
  price: number;
}
export interface IRestaurantMenu {
  restaurant: string;
  menu: {
    starters: IMenu[];
    mains: IMenu[];
    desserts: IMenu[];
  };
}
