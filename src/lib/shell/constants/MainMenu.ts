import type { IMainMenu, IMenuItem } from "../shared/interface";
import { faAddressCard, faBlog, faBriefcase, faHouse } from "@fortawesome/free-solid-svg-icons";

const MainMenu: IMainMenu = {
   lead: [
      {
         anchor: '/',
         label: 'Home',
         icon: faHouse
      },
      {
         anchor: '/about',
         label: 'About',
         icon: faAddressCard
      },
      {
         anchor: '/experience',
         label: 'Experience',
         icon: faBriefcase
      },
   ],
   trail: [
      {
         anchor: '/blog',
         label: "Blog",
         icon: faBlog
      }
   ]
}

export default MainMenu;