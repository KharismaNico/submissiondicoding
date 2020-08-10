import "../component/anime-list.js"
import "../component/search-bar.js"

const main = ()=>{
    const searchElement = document.querySelector("search-bar");
    const animeListElement = document.querySelector("anime-list");
    
    function getAnimes(keyword){
        // return jikanjs.search('anime', keyword)
        return fetch("https://api.jikan.moe/v3/search/anime?q=" + keyword)
            .then(response => response.json())
            .then(response => {
                console.log("sukses")
                console.log(response)
                console.log(response.results)
                return response.results})
        
        
    }
    const onButtonSearchClicked = async () => {
        try{
            const result = await getAnimes(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        animeListElement.animes = results;
    };

    const fallbackResult = message => {
        animeListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
}
export default main 