import { GoHome,GoHomeFill } from "react-icons/go";
import { IoIosNotificationsOutline,IoMdNotifications } from "react-icons/io"
import { AiOutlineSearch,AiOutlinePlusCircle,AiFillPlusCircle } from "react-icons/ai"
import { PiNotebookLight,PiNotebookFill } from "react-icons/pi"
import { CgProfile } from "react-icons/cg";

export const menu=[
    {title:"Home",icon:<GoHome className="text-2xl mr-5"></GoHome>,activeIcon:<GoHomeFill className="text-2xl mr-5"></GoHomeFill>},
    {
        title:"Search",icon:<AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,activeIcon:<AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>
    },
    {
        title:"Notifications",icon:<IoIosNotificationsOutline className="text-2xl mr-5"></IoIosNotificationsOutline>,activeIcon:<IoMdNotifications className="text-2xl mr-5"></IoMdNotifications>
    },
    {
        title:"Notes",icon:<PiNotebookLight className="text-2xl mr-5"></PiNotebookLight>,activeIcon:<PiNotebookFill className="text-2xl mr-5"></PiNotebookFill>
    },
    {
        title:"Create",icon:<AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>,activeIcon:<AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>
    },
    {
        title:"Profile", icon:<CgProfile className="text-2xl mr-5"></CgProfile>,activeIcon:<CgProfile className="text-2xl mr-5"></CgProfile>
    }
]
