import restaurant1 from '../../assets/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import restaurant4 from '../../assets/images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg';
import restaurant3 from '../../assets/images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg';
import restaurant2 from '../../assets/images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg';
import { IRestaurantCard } from './types';

export const dummyRestaurantData: IRestaurantCard[] = [
  {
    tagNew: true,
    img: restaurant1 as string,
    desc: {
      title: 'La Palette du gout',
      location: 'Menilmontant'
    }
  },
  {
    tagNew: true,
    img: restaurant2 as string,
    desc: {
      title: 'La note enchantee',
      location: 'Charonne'
    }
  },
  {
    tagNew: false,
    img: restaurant3 as string,
    desc: {
      title: 'A la francaise',
      location: 'Cite Rouge'
    }
  },
  {
    tagNew: false,
    img: restaurant4 as string,
    desc: {
      title: 'Les delices des sens',
      location: 'Folie-Mericourt'
    }
  }
];
