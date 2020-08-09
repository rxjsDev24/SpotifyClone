import React, { useEffect } from 'react';
import classes from './Sidebar.module.css';
import SidebarOptions from './SidebarOptions/SidebarOptions';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index'
import { Link } from 'react-router-dom';

const Sidebar = React.memo((props) => {
    const state = useSelector(state => state);
    const token = state.auth.token;
    const dispatch = useDispatch();
    const playlists = state.user.playlist;

    useEffect(() => {
        dispatch(actions.getUserPlaylists(token))
    }, [])

    let data = null;
    if (playlists) {
        data = (playlists.map(playlist => {
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
                {data}
            </div>
        </div>
    )
})

export default Sidebar;