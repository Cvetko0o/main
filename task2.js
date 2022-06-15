function dna(element) {
    var letters = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
    var arr = [];
    for (var i=0; i < element.length; i++) {
        arr[i] = letters[element[i]];
    }
    return arr.join('');
}

console.log(dna("GTAT"));