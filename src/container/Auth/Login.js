export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "0ee9407c3585477288fd451e5ba5049b";
const redirectUri = "http://localhost:3000/auth/";
const scopes = [
    "user-read-private",
    "user-read-email",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private"
];

// export const getTokenFromResponse = () => {
//     return window.location.hash
//         .substring(1)
//         .split("&")
//         .reduce((initial, item) => {
//             var parts = item.split("=");
//             initial[parts[0]] = decodeURIComponent(parts[1]);

//             return initial;
//         }, {});
// };

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;