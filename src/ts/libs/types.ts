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

export interface IMenuDishes {
  name: string;
  desc: string;
  price: number;
}

export interface IMenu {
  course: 'starters' | 'mains' | 'desserts';
  dishes: IMenuDishes[];
}

export interface IRestaurantMenu {
  restaurant: string;
  menu: IMenu[];
}
