import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the creator</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <div className={"Card-details"}>
                        <h3>Dawid Chmielewski</h3>
                        <p>Student of ZST Chełm</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Hi, I'm David, a 15-year-old student currently attending a technical school with a focus on programming.</p>
                    <p>I have a keen interest in programming and cryptography.</p>
                    <p>I enjoy exploring various programming languages and learning about encryption algorithms and data security. </p>
                    <p>With a passion for technology and problem-solving, I'm always excited to dive into new coding challenges.</p>
                    <p>I'm motivated to expand my programming skills and explore the fascinating world of cryptography.</p>
                    <p>I'm enthusiastic about the possibilities that programming and cryptography offer and look forward to the exciting journey ahead!</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/dawid.chmielewski"} title={"dawid.chmielewski"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/Dawid_Chmielewski"}  title={"Dawid_Chmielewski"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/dawidchmielewski-/"}  title={"dawidchmielewski-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/dawidchmielewski08/"}  title={"dawidchmielewski08"}>
                            <Instagram/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;