// eslint-disable-next-line react/prop-types
import PropTypes from "prop-types";

export const Footer = ({className="", children})=>{

    Footer.propTypes = {
        className: PropTypes.string,
        children: PropTypes.node
    }

    return(
        <div className={`${className} h-[250px] w-screen p-4 pb-16`}>
            <div className={`grid grid-cols-1 gap-4 lg:grid-cols-3`}>
                <div className={'w-full h-fit mb-8 grid justify-center'}>
                    <span className={'text-3xl font-semibold'}>Capital Express</span>
                    <span className={'text-lg'}>Innovating investments and technology</span>
                </div>
                <div className={`mb-8`}>
                    <div className={"grid grid-cols-1 gap-4"}>
                        <a href={"/"}> Home </a>
                        <a href={"/"}> Register </a>
                        <a href={"/"}> Plans </a>
                        <a href={"/"}> Rewards </a>
                        <a href={"/"}> Terms and condition </a>
                    </div>
                </div>
                <div className={``}>
                    <div className={"grid grid-cols-1 gap-4"}>
                        <a href={"/"}> Home </a>
                        <a href={"/"}> Register </a>
                        <a href={"/"}> Plans </a>
                        <a href={"/"}> Rewards </a>
                        <a href={"/"}> Terms and condition </a>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}