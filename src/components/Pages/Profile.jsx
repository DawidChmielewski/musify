import React, {useEffect, useState} from 'react';
import './css/Profile.scss';
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import MusicCard from "../fragment/MusicCard";
import Container from "../fragment/Container";
import Grade from 'grade-js';
import SideBarOptions from "../fragment/SideBarOptions";
import {PlaylistPlay} from "@material-ui/icons";

function Profile() {

    const {playlists} = useSelector(state => state.musicReducer);
    const [mostPlayed, setMostPlayed] = useState([]);

    function sortByProperty(property) {
        return function (a, b) {
            if (a[property] > b[property])
                return 1;
            else if (a[property] < b[property])
                return -1;

            return 0;
        }
    }

    useEffect(() => {
        setMostPlayed(playlists.sort(sortByProperty("timesPlayed")));
    }, [playlists]);

    useEffect(() => {
        Grade(document.querySelectorAll('.gradient-wrap'))
    });

    return (
        <Container>
            <div className={"Profile"}>
                <div className="top-profile">
                    <Avatar variant={"rounded"} src={require("../assets/img/avatar2.jpg")}
                            style={{width: "150px", height: "150px"}}>
                        SS
                    </Avatar>
                    <div className="profile-detail">
                        <h3>Someone who everyone knows</h3>
                        <span className={"profile-playlist"}>

                        <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"}  title={"Electronic"}/>
                        <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/drill"}  title={"Drill"}/>
                        <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/pop"}  title={"Pop"}/>
                        <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/rock"}  title={"Rock"}/>
                        <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/dance-pop"}  title={"Dance-Pop"}/>
                        <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/rap"}  title={"Rap"}/>
                        </span>
                    </div>
                </div>
                <div className="bottom-profile">
                    <div>
                        <h3>Most popular</h3>
                        <div className="most-played">
                            {
                                mostPlayed.map((item, index) => (
                                    index <= 4 && <MusicCard key={item.id} music={item}/>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default Profile;
