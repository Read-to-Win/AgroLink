import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { MdCreateNewFolder } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";

const K = {
  NAVLINKS: [
    {
      icon: <FaHome />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <RiAdvertisementFill />,
      text: "Products",
      path: "/dashboard/all-adverts",
    },
    {
      icon: <MdCreateNewFolder />,
      text: "Create Advert",
      path: "/dashboard/post-adverts",
    },
    {
      icon: <IoIosNotifications />,
      text: "Notifications",
      path: "/dashboard/notifications",
    },
    {
      icon: <LuMessageSquareText/>,
      text: "My Messages",
      path: "/dashboard/messages",
    },
  ],
};
export default K;