/**
 * Accomplishments display page.
 * @author Lucas Bubner, 2023
 */
import { motion } from "framer-motion";
import { Goto } from "./AnimatedRoute";
import Navbar from "./Navbar";
import "./Boxes.css";

function Accom({ goto }: Goto) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Navbar goto={goto} />
            <div className="content-bg" />
            <div className="container">
                <div className="box">
                    <h1>My accomplishments</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>What I'm proud for</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>Murray Bridge Bunyips</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>Academics</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>Programming</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
                <div className="box">
                    <h1>Capabilities</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Accom;
