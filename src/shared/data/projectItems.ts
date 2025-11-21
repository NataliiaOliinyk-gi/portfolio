import PetShop from "../../assets/images/pet_shop.png";
import PetShopFullScreen from "../../assets/images/pet-shop_.png";
import PetShopFullScreen2 from "../../assets/images/pet-shop_products.png";
import PetShopFullScreen3 from "../../assets/images/pet-shop_cart.png";
import Ichgram from "../../assets/images/ichgram.png";
import IchgramFullScreen from "../../assets/images/ichgram_me.png";
import IchgramFullScreen2 from "../../assets/images/ichgram_explore.png";
import IchgramFullScreen3 from "../../assets/images/ichgram_main.png";
import Meetap from "../../assets/images/meetup.png";
import MeetapFullScreen from "../../assets/images/meetup_index.png";
import MeetapFullScreen2 from "../../assets/images/meetup_index.png";
import MeetapFullScreen3 from "../../assets/images/meetup_search_events.png";

export type ProjectId = "pet-shop" | "ichgram" | "meetap";

export interface IProjectItem {
  id: ProjectId;
  link: string;
  gitHub: string;
  gitHub2?: string;
  image: string;
  imageFS: string;
  imageFS2: string;
  imageFS3: string;
  testData?: string;
}

const projectItems: IProjectItem[] = [
  {
    id: "pet-shop",
    link: "https://pet-shop-frontend-ruby.vercel.app/",
    gitHub: "https://github.com/NataliiaOliinyk-gi/pet-shop-frontend",
    image: PetShop,
    imageFS: PetShopFullScreen,
    imageFS2: PetShopFullScreen2,
    imageFS3: PetShopFullScreen3,
  },
  {
    id: "ichgram",
    link: "https://ichgram-frontend.vercel.app/",
    gitHub: "https://github.com/NataliiaOliinyk-gi/ichgram-frontend",
    gitHub2: "https://github.com/NataliiaOliinyk-gi/ichgram-backend",
    image: Ichgram,
    imageFS: IchgramFullScreen,
    imageFS2: IchgramFullScreen2,
    imageFS3: IchgramFullScreen3,
    testData: "Login: admin | Password: 123456@N",
  },
  {
    id: "meetap",
    link: "https://meetup-project-ten.vercel.app/index.html",
    gitHub: "https://github.com/NataliiaOliinyk-gi/meetup_project",
    image: Meetap,
    imageFS: MeetapFullScreen,
    imageFS2: MeetapFullScreen2,
    imageFS3: MeetapFullScreen3,
  },
];

export default projectItems;
