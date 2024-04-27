import {Tilt} from "react-tilt";
import {TiltDefaults} from "../../const/TiltDefaults";
import art from "../../assets/art4.png"
import {TypeAnimation} from "react-type-animation";
import {Button} from "@chakra-ui/react";

export function LandingPage(){
    return(
        <>
            <div className={"w-full h-full p-15 grid place-content-center mt-36"}>
                <div className={"flex gap-4"}>
                    <div className={"w-1/2"}>
                        <Tilt options={TiltDefaults} style={{height: 400, width: 550}}>
                            <img alt={"art"} src={art} className={"w-full h-full"}/>
                        </Tilt>
                    </div>
                    <div>
                        <span className={"text-[4em] font-black leading-snug"}>Empower <span className={"text-orange-500 animate-pulse"}>Dreams</span>,</span><br/>
                        <span className={"text-[4em] font-black leading-snug"}>One donation at a time</span><br/><br/>
                        <span className={""}>"Your donation has the power to transform lives and communities.<br/>
                            Join us in creating a wave of positive change that ripples through society.<br/>
                            Every contribution, big or small, makes a profound difference.<br/>
                            <span className={"font-bold text-orange-500"}>Be the change—donate today!"</span></span><br/><br/>
                        <Button size={"lg"} colorScheme={"orange"} className={"hover:scale-110"}>Donate Now</Button>
                    </div>
                </div>
            </div>

            <div className={"w-full h-[320px] font-bold my-10 grid place-content-center py-12 mt-[360px]"}>
                <TypeAnimation
                    sequence={[
                        "Dreams thrive on your generosity.",
                        1000,
                        "Drive change with each dollar.",
                        1000,
                        "Donate today, transform tomorrow.",
                        1000,
                        "Dare to make a difference.",
                        1000,
                        "Doors open when we give together.",
                        1000,
                        "Offer hope, offer help.",
                        1000,
                        "Opportunities blossom through your support.",
                        1000,
                        "Open hearts ignite endless possibilities.",
                        1000,
                        "Oceans of change begin with a drop.",
                        1000,
                        "Outreach starts with your offering.",
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{fontSize: '4em', display: 'inline-block', color:"rgba(47,47,47,0.89)"}}
                    repeat={Infinity}
                />
            </div>
        </>
    )
}