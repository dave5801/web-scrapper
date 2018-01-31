let searchInput = new AmazonAutocomplete('#search-input');

function get_search_results(searchInput){
    let search_results = searchInput._words;

    for(var i =0; i < search_results; i++){
        console.log(search_results[i])
    }

}

export {get_search_results};


console.log(searchInput._words);

let search_results = function(searchInput._words){};