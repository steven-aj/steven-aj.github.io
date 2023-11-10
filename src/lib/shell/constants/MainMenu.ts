import "../shared/extensions/array.extension";
import type { IMainMenu } from "../shared/interfaces/app.interfaces";
import { faAddressCard, faBlog, faBriefcase, faFlask, faHouse } from "@fortawesome/free-solid-svg-icons";

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
      {
         anchor: '/labs',
         label: 'Labs',
         icon: faFlask
      },
   ].toMenuItems(),

   trail: [
      {
         anchor: '/blog',
         label: "Blog",
         icon: faBlog
      }
   ].toMenuItems()
}

export default MainMenu;