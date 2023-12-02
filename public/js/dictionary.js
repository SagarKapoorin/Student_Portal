const search = async() => {
    input = document.getElementById('search').value;
    // removing unwanted space
    input = input.trim()  
    if (input != '') {
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data[0]);
                // just putting a check that title exist
                if (!data.title) { 
                    document.getElementById('word').innerHTML = data[0].word;
                    document.getElementById('phonetics').innerHTML = data[0].phonetics[0].text;
                    definitions = document.getElementById('definition-container')
                    definitions.innerHTML = ""
                    // data[0].meanings[0].definitions[0].definition
                    //data[0].meanings[0].partOfSpeech
                    //with each defination there is part of speech related tot it
                    for (let i = 0; i < data[0].meanings.length; i++) {
                        definitions.innerHTML += `<div class = "meaning-container"></div>`
                        meanings = document.getElementsByClassName('meaning-container');
                        meanings[i].innerHTML += `<h4>${data[0].meanings[i].partOfSpeech}</h4>`
                        meanings[i].innerHTML += `<p>${data[0].meanings[i].definitions[0].definition}</p>`
                    }
                }
            })
        
    } else {
        //reseting if empty
        document.getElementById('word').innerHTML = "--"
        document.getElementById('phonetics').innerHTML = "--"
        definitions = document.getElementById('definition-container').innerHTML = ""
    }
}
