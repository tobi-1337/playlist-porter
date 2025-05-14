

const clientID = process.env.NEXT_PUBLIC_SPOTIFY_ID;
const redirectUri = 'https://localhost:3000/api/callback'
const scopes = [
'user-read-private',
'playlist-modify-public',
'playlist-modify-private',
];

export default function loginWithSpotify() {
    const authUrl = `https://accounts.spotify.com/authorize?` +
        new URLSearchParams({
        response_type: 'code',
        client_id: clientID,
        scope: scopes.join(' '),
        redirect_uri: redirectUri,
        });
    window.location.href = authUrl;
}