import PetShop from "../../assets/images/pet_shop.png";
import Ichgram from "../../assets/images/ichgram.png";
import Meetap from "../../assets/images/meetup.png";

export type ProjectId = "pet-shop" | "ichgram" | "meetap";

export interface IProjectItem {
  id: ProjectId;
  link: string;
  gitHub: string;
  gitHub2?: string;
  image: string;
  image2: string;
  testData?: string;
}

const projectItems: IProjectItem[] = [
  {
    id: "pet-shop",
    link: "https://pet-shop-frontend-ruby.vercel.app/",
    gitHub: "https://github.com/NataliiaOliinyk-gi/pet-shop-frontend",
    image: PetShop,
    image2: "",
  },
  {
    id: "ichgram",
    link: "https://ichgram-frontend.vercel.app/",
    gitHub: "https://github.com/NataliiaOliinyk-gi/ichgram-frontend",
    gitHub2: "https://github.com/NataliiaOliinyk-gi/ichgram-backend",
    image: Ichgram,
    image2: "",
    testData: "Login: admin | Password: 123456@N",
  },
  {
    id: "meetap",
    link: "https://meetup-project-ten.vercel.app/index.html",
    gitHub: "https://github.com/NataliiaOliinyk-gi/meetup_project",
    image: Meetap,
    image2: "",
  },
];

export default projectItems;
