import React, {useState} from "react";
import {ArrowDown} from "@styled-icons/evaicons-solid"

export default function DesktopHeader() {
    const [about, setAbout] = useState(false)
    return (
        <div className="border-t bg-rd-navy-blue">
            <div className="bg-rd-light-blue mt-1.5 pt-4 pb-2">
                <div className="mx-48">
                    <div className="flex justify-between items-center">
                        <h2 className="float-left text-white text-3.5xl font-semibold">TELL US YOUR STORY</h2>
                        <div className="flex gap-2">
                            <img src="./images/Florida-Story-1.png" alt="Florida-Story-1" width={99} height={40}
                                 className="object-contain"/>
                            <a href="https://survey.qwary.com/form/S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIpJdILRklAhE="
                               style={{textDecoration: 'none', color: 'white'}}>
                                <div
                                    className="border-2 flex justify-center items-center px-13.5 py-4 text-white text-tiny font-bold hover:bg-sky-700 transform duration-300"
                                    style={{letterSpacing: "1.2px"}}>
                                    RECORD NOW
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mx-48 pt-4 pb-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-13.5">
                            <img src="./images/white-logo-01.png" alt="white-logo-01" width={190} height={68}
                                 className="object-contain"/>
                            <ul className="flex text-white gap-5 font-bold text-tiny tracking-widest">
                                <li className="hover:text-rd-red transform duration-300 hover:cursor-pointer"
                                    onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)}>
                                    ABOUT
                                    <ArrowDown size={18}/>
                                    {about &&
                                    <ul className="absolute top-12 bg-rd-red text-white overflow-visible"
                                        style={{zIndex: 3000, minWidth: '250px'}}>
                                        <li className="hover:bg-rd-navy-blue transform duration-300">
                                            <div className="border-b-2 border-white py-2">
                                                <a href="https://rondesantis.com/meet-ron/" className="ml-10"
                                                   style={{textDecoration: 'none', color: 'white'}}>MEET RON
                                                    DESANTIS</a>
                                            </div>
                                        </li>
                                        <li className="hover:bg-rd-navy-blue transform duration-300">
                                            <div className="border-b-2 border-white py-2">
                                                <a href="https://rondesantis.com/meet-casey/" className="ml-10"
                                                   style={{textDecoration: 'none', color: 'white'}}>MEET CASEY</a>
                                            </div>
                                        </li>
                                        <li className="hover:bg-rd-navy-blue transform duration-300">
                                            <div className="border-b-2 border-white py-2">
                                                <a href="https://rondesantis.com/meet-family/" className="ml-10"
                                                   style={{textDecoration: 'none', color: 'white'}}>MEET THE FAMILY</a>
                                            </div>
                                        </li>
                                        <li className="hover:bg-rd-navy-blue transform duration-300">
                                            <div className="border-b-2 border-white py-2">
                                                <a href="https://rondesantis.com/gallery/" className="ml-10"
                                                   style={{textDecoration: 'none', color: 'white'}}>GALLERY</a>
                                            </div>
                                        </li>
                                    </ul>
                                    }
                                </li>
                                <li className="hover:text-rd-red transform duration-300 hover:cursor-pointer">
                                    SHOP
                                </li>
                                <li className="hover:text-rd-red transform duration-300 hover:cursor-pointer">
                                    CONTACT
                                </li>
                                <li className="hover:text-rd-red transform duration-300 hover:cursor-pointer">
                                    VOLUNTEER
                                </li>
                                <li className="hover:text-rd-red transform duration-300 hover:cursor-pointer">
                                    ESPANOL
                                </li>
                            </ul>

                        </div>
                        <div className="flex gap-2">
                            <a href="https://survey.qwary.com/form/S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIpJdILRklAhE="
                               style={{textDecoration: 'none', color: 'white'}}>
                                <div
                                    className="bg-rd-red hover:bg-white hover:text-rd-red flex justify-center items-center px-7 py-4 text-white text-tiny font-bold uppercase transform duration-300"
                                    style={{letterSpacing: "1.2px"}}>
                                    Contribute
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
