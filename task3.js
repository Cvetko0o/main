function shortestWord(string){

    let splited = string.split(' ');
    let shortest = splited.sort((a, b) =>{
        return a.length - b.length;
    });
    
    console.log(shortest[0]);
}
shortestWord("bitcoin take over the world maybe who knows perhaps");