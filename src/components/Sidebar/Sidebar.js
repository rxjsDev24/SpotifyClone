import React, { useEffect } from 'react';
import classes from './Sidebar.module.css';
import SidebarOptions from './SidebarOptions/SidebarOptions';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    const state = useSelector(state => state);
    const token = state.auth.token;
    const playlist = state.user.playlist;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getUserPlaylists(token))
    }, [])

    let playlists = null;
    if (playlist && playlist.items) {
        playlists = (playlist.items.map(playlist => {
            return <SidebarOptions key={playlist.id} title={playlist.name} />
        }))
    }
    return (
        <div className={classes.Sidebar}>
            <Link to='/' className={classes.Link}>
                <img
                    className={classes.Logo}
                    src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                    alt="Spotify-logo" />
            </Link>
            <Link to='/' className={classes.Link}><SidebarOptions Icon={HomeIcon} title="Home" /></Link>
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className={classes.Title}>PLAYLISTS</strong>
            <hr />
            <div className={classes.Playlist}>

                {playlists}
            </div>
        </div>
    )
}

export default Sidebar;