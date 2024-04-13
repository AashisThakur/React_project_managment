import { AppsOutline, GridOutline, HomeOutline, LogOutOutline, NewspaperOutline, NotificationsCircleOutline, PeopleCircleOutline, PieChartOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const Sidebar = () => {
     const navlinks = [
    { title: "Home", icon: <HomeOutline color="#555" width={"22px"} height={"22px"} />, path: "/", active: false },
    { title: "Boards", icon: <AppsOutline color="#555" width={"22px"} height={"22px"} />, path: "/boards", active: true },
    { title: "Projects", icon: <GridOutline color="#555" width={"22px"} height={"22px"} />, path: "/projects", active: false },
    { title: "Analytics", icon: <PieChartOutline color="#555" width={"22px"} height={"22px"} />, path: "/analytics", active: false },
    { title: "Workflows", icon: <PeopleCircleOutline color="#555" width={"22px"} height={"22px"} />, path: "/workflows", active: false },
    { title: "Notifications", icon: <NotificationsCircleOutline color="#555" width={"22px"} height={"22px"} />, path: "/notifications", active: false },
    { title: "NewsLetter", icon: <NewspaperOutline color="#555" width={"22px"} height={"22px"} />, path: "/newsletter", active: false },
  ];
    return (
        <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
            <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-white">
                <span className="text-orange-400 font-semibold text-2x1 md:block hidden">Logo</span>
                <span className="text-orange-400 font-semibold text-2x1 md:hidden block">L.</span>
            </div>
            <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-white py-5 px-3 relative">{
                navlinks.map((link) => {
                    return (
                        <Link key={link.title} to={link.path} className={`flex items-center gap-2 w-full rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer ${link.active ? "bg-orange-300" : 'bg-transparent'}`}>
                            {link.icon}
                            <span className="font-medium text-[15px] md:block hidden">{link.title}</span>
                        </Link>
                    )
                })}
                <div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer bg-gray-200">
                    <LogOutOutline />
                    <span className="font-medium text-[15px] md:block hidden ">Log Out</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;