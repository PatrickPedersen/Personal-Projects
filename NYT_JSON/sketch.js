let search, sort, startDate, endDate;

function setup() {

    search = createInput('', 'text');
    sort = createSelect();
    sort.option('Newest', 'newest');
    sort.option('Oldest', 'oldest');
    startDate = createInput('', 'date');
    endDate = createInput('', 'date');
    let button = createButton('submit');
    button.mousePressed(submit);


}

function submit() {
    //Først en variabel til din api-key
    var apiKey = ""; //API Nøgle
    //Og til den url du vil søge på - se flere her:
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
    //Dernæst bygger du den query du vil udføre
    var query = "?q='" + search.value() + "'";
    query += "&sort=" + sort.value();
    query += "&begin_date=" + startDate.value();
    query += "&end_date=" + endDate.value();
    //Se flere parametre her; https://developer.nytimes.com/article_search_v2.json#/Documentation/GET/articlesearch.json

    console.log(sort.value());
    console.log(startDate.value());
    console.log(endDate.value());
    search.value('');

    //LoadJSON tager en URL + den funktion der skal kaldes, når den får noget tilbage
    loadJSON(url + query + "&api-key=" + apiKey, gotData);

    function gotData(data) {
        // Grabbing a single headline from the results.
        console.log(data);
        for (var i = 0; i < data.response.docs.length; i++) {
            var docs = data.response.docs[i];
            //Skriv hele JSON objektet ud i konsollen så du kan undersøge det
            createElement('h1',docs.headline.main);
            createP(docs.source);
            createP(docs.snippet);
            createA(docs.web_url, 'Læs artikel');
        }
    }
}

/*
Prøv at lave listen så den udskriver de første ti artikler i stedet for kun en
- done

Prøv at udskrive en liste med de første ti artikler om D. Trump fra sidste måned
- done

Prøv at find ud af hvad der stod i New York Times, 9/11
- done

Prøv at lave et søgefelt på siden (createInput, createButton - se p5 referencen) så du kan søge direkte i databasen på keyword


*/
