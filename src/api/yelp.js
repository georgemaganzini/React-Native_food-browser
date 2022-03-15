import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PcunPutrUPtQw6ujMs1fdsYPRpkybBoZz5E5n8WlKjcgA0BIzMYger7Svg2WdY6taSsVnlEAb184GV9t2zejDNUiZpgUqjbjERZxS2de-ntzKM_BAno4adpBkKMwYnYx'
    }
});

