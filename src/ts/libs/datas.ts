import restaurant1 from '../../assets/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import restaurant4 from '../../assets/images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg';
import restaurant3 from '../../assets/images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg';
import restaurant2 from '../../assets/images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg';
import { IRestaurantCard, IRestaurantMenu } from './types';

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

export const dummyRestaurantMenuData: IRestaurantMenu[] = [
  {
    restaurant: 'La Palette du gout',
    menu: {
      starters: [
        {
          name: "Fricassée d'escargot",
          desc: "Au piment d'Espelette",
          price: 25
        },
        {
          name: 'Foie gras de canard mi-cuit',
          desc: 'Et ses copeaux de truffe noire',
          price: 35
        },
        {
          name: 'Œuf au plat',
          desc: 'Assaisonné à la truffe sur lit de caviar',
          price: 20
        }
      ],
      mains: [
        {
          name: 'Filet de boeuf aux herbes',
          desc: 'Accompagné de sa ribambelle de légumes',
          price: 40
        },
        {
          name: 'Parmentier de queue de boeuf',
          desc: 'À la truffe noire sur sa purée de panais',
          price: 35
        },
        {
          name: 'Filet de turbot',
          desc: 'Aux agrumes',
          price: 44
        }
      ],
      desserts: [
        {
          name: 'Paris-Brest',
          desc: 'Revisité',
          price: 18
        },
        {
          name: "Macaron au chocolat d'exception",
          desc: 'Et glace à la vanille de Madagascar',
          price: 22
        },
        {
          name: 'Mousse au chocolat',
          desc: "Au piment d'Espelette et à la truffe noire",
          price: 23
        }
      ]
    }
  },
  {
    restaurant: 'La note enchantee',
    menu: {
      starters: [
        {
          name: "Fricassée d'escargot",
          desc: "Au piment d'Espelette",
          price: 25
        },
        {
          name: 'Foie gras de canard mi-cuit',
          desc: 'Et ses copeaux de truffe noire',
          price: 35
        },
        {
          name: 'Œuf au plat',
          desc: 'Assaisonné à la truffe sur lit de caviar',
          price: 20
        }
      ],
      mains: [
        {
          name: 'Filet de boeuf aux herbes',
          desc: 'Accompagné de sa ribambelle de légumes',
          price: 40
        },
        {
          name: 'Parmentier de queue de boeuf',
          desc: 'À la truffe noire sur sa purée de panais',
          price: 35
        },
        {
          name: 'Filet de turbot',
          desc: 'Aux agrumes',
          price: 44
        }
      ],
      desserts: [
        {
          name: 'Paris-Brest',
          desc: 'Revisité',
          price: 18
        },
        {
          name: "Macaron au chocolat d'exception",
          desc: 'Et glace à la vanille de Madagascar',
          price: 22
        },
        {
          name: 'Mousse au chocolat',
          desc: "Au piment d'Espelette et à la truffe noire",
          price: 23
        }
      ]
    }
  },
  {
    restaurant: 'A la francaise',
    menu: {
      starters: [
        {
          name: "Fricassée d'escargot",
          desc: "Au piment d'Espelette",
          price: 25
        },
        {
          name: 'Foie gras de canard mi-cuit',
          desc: 'Et ses copeaux de truffe noire',
          price: 35
        },
        {
          name: 'Œuf au plat',
          desc: 'Assaisonné à la truffe sur lit de caviar',
          price: 20
        }
      ],
      mains: [
        {
          name: 'Filet de boeuf aux herbes',
          desc: 'Accompagné de sa ribambelle de légumes',
          price: 40
        },
        {
          name: 'Parmentier de queue de boeuf',
          desc: 'À la truffe noire sur sa purée de panais',
          price: 35
        },
        {
          name: 'Filet de turbot',
          desc: 'Aux agrumes',
          price: 44
        }
      ],
      desserts: [
        {
          name: 'Paris-Brest',
          desc: 'Revisité',
          price: 18
        },
        {
          name: "Macaron au chocolat d'exception",
          desc: 'Et glace à la vanille de Madagascar',
          price: 22
        },
        {
          name: 'Mousse au chocolat',
          desc: "Au piment d'Espelette et à la truffe noire",
          price: 23
        }
      ]
    }
  },
  {
    restaurant: 'Les delices des sens',
    menu: {
      starters: [
        {
          name: "Fricassée d'escargot",
          desc: "Au piment d'Espelette",
          price: 25
        },
        {
          name: 'Foie gras de canard mi-cuit',
          desc: 'Et ses copeaux de truffe noire',
          price: 35
        },
        {
          name: 'Œuf au plat',
          desc: 'Assaisonné à la truffe sur lit de caviar',
          price: 20
        }
      ],
      mains: [
        {
          name: 'Filet de boeuf aux herbes',
          desc: 'Accompagné de sa ribambelle de légumes',
          price: 40
        },
        {
          name: 'Parmentier de queue de boeuf',
          desc: 'À la truffe noire sur sa purée de panais',
          price: 35
        },
        {
          name: 'Filet de turbot',
          desc: 'Aux agrumes',
          price: 44
        }
      ],
      desserts: [
        {
          name: 'Paris-Brest',
          desc: 'Revisité',
          price: 18
        },
        {
          name: "Macaron au chocolat d'exception",
          desc: 'Et glace à la vanille de Madagascar',
          price: 22
        },
        {
          name: 'Mousse au chocolat',
          desc: "Au piment d'Espelette et à la truffe noire",
          price: 23
        }
      ]
    }
  }
];
