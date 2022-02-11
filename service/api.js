import axios from "axios";

const getTopSongs = () => axios.get('https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json')

export {
    getTopSongs
}