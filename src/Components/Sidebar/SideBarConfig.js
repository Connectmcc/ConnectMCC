import { GoHome,GoHomeFill } from "react-icons/go";
import { IoIosNotificationsOutline,IoMdNotifications } from "react-icons/io"
import {AiOutlinePlusCircle,AiFillPlusCircle } from "react-icons/ai"
import { PiNotebookLight,PiNotebookFill } from "react-icons/pi"
import { CgProfile } from "react-icons/cg";
import { FaRegEye,FaEye } from "react-icons/fa"

export const menu=[
    {title:"Home",icon:<GoHome className="text-2xl mr-5 text-emerald-600"></GoHome>,activeIcon:<GoHomeFill className="text-2xl mr-5 text-emerald-600"></GoHomeFill>},
    {
        title:"Search",icon:<FaRegEye  className="text-2xl mr-5   text-emerald-600"></FaRegEye >,activeIcon:<FaEye  className="text-2xl mr-5  text-emerald-600"></FaEye >
    },
    {
        title:"Notifications",icon:<IoIosNotificationsOutline className="text-2xl mr-5  text-emerald-600"></IoIosNotificationsOutline>,activeIcon:<IoMdNotifications className="text-2xl mr-5  text-emerald-600"></IoMdNotifications>
    },
    {
        title:"Notes",icon:<PiNotebookLight className="text-2xl mr-5  text-emerald-600"></PiNotebookLight>,activeIcon:<PiNotebookFill className="text-2xl mr-5  text-emerald-600"></PiNotebookFill>
    },
    {
        title:"Create",icon:<AiOutlinePlusCircle className="text-2xl mr-5  text-emerald-600"></AiOutlinePlusCircle>,activeIcon:<AiFillPlusCircle className="text-2xl mr-5  text-emerald-600"></AiFillPlusCircle>
    },
    {
        title:"Profile", icon:<CgProfile className="text-2xl mr-5 text-emerald-600"></CgProfile>,activeIcon:<CgProfile className="text-2xl mr-5 text-emerald-600"></CgProfile>
    }
]
