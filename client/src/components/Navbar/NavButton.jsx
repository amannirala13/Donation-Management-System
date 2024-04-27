import {useNavigate} from "react-router-dom";
import {BiHome} from "react-icons/bi";
import {CgHome} from "react-icons/cg";
import {FaHome} from "react-icons/fa";
import {AiOutlineHome} from "react-icons/ai";

export default ({className, onClose, text, route, children})=>{
    const nav = useNavigate();
    return(
        <div className={`${className} w-full h-16 hover:bg-black/10 content-center grid px-4 py-10 rounded-xl hover:cursor-pointer`}
             onClick={()=>{
                 nav(route);
                 if(onClose)
                     onClose();
             }}>
            <div className={"w-max flex gap-2 h-full text-left items-center"}>
                {children}
            </div>
        </div>
    )
}