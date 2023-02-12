/**
 * Standard information module with links and other metadata.
 * @author Lucas Bubner, 2023
 */
import { useRef } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { PopupActions } from "../node_modules/reactjs-popup/dist/types";
import "./Navbar.css";

function Navbar() {
    const tref = useRef<PopupActions>(null);
    const tclose = () => tref.current?.close();
    const location = useLocation();
    const goto = useNavigate();

    return (
        <motion.div
            initial={{ opacity: location.pathname === "/i" ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <div id="navbar">
                <div id="imagebuttons">
                    <img onClick={() => goto("/i")} className="navbar-img" src="/" alt="Home" />
                </div>
                <div id="mobileheader">
                    {/* Reused code from my Bunyips Chatapp. I couldn't be bothered implementing a new popup menu so this will do. */}
                    <Popup ref={tref} trigger={<img src="/bbq.svg" alt="Menu" />}>
                        <>
                            <div className="outer" onClick={tclose} />
                            <div className="inner">
                                <div className="buttonarea">
                                    <button
                                        onClick={() => {
                                            tclose();
                                            goto("/i");
                                        }}>
                                        Home
                                    </button>
                                </div>
                                <hr />
                            </div>
                        </>
                    </Popup>
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;
