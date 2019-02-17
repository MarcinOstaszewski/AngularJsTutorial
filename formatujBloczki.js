var numbers1 = "223,226,228,229,230,231,235,236,423,426,427,428,429,430,496,497,498,499,600,601,602,603,604";
var numbers2 = "23,24,25,28,29,30,31,32,33,34,35,36,123,126,127,128,129,130,196,197,198,199,200,201,202";
var numbers3 = "23,24,25,28,29,30,31,32,33,34,35,36,123,126,127,128,129,130,196,197,198,199,200,201,202,203";
var numbers4 = "23,24,25,26,28,29,30,31,32,33,34,35,36,123,126,127,128,129,130,196,197,198,199,200,201,202,208";

function formatujBloczki(bloxArr) {
    if (typeof bloxArr === "string") {
        bloxArr = bloxArr.split(",");
        if (bloxArr.length > 2) {
            for (let i = 0; i < bloxArr.length; i++) {
                bloxArr[i] = Number( bloxArr[i] );
            }
            var newArr = [ bloxArr[0] ];
            var index = 1;

            while ( index < bloxArr.length ) {
                let e0 = bloxArr[index-1];
                let e1 = bloxArr[index];
                let e2 = bloxArr[index+1];
                let lastElem = newArr.slice(-1).toString();

                if ( e0 + 1 == e1)  { // jezeli poprzedni elem byl mniejszy o 1
                    if ( lastElem != "&ndash;" ) {

                        if ( e1 + 1 == e2 ) {
                            newArr.push( "&ndash;" );
                        } else {
                            newArr.push( e1 );
                        }
                    } else if (index == bloxArr.length - 1) {
                        newArr.push(e1);
                    }
                } else {
                    if (lastElem == "&ndash;") {
                        newArr.push( e0 )
                    } 
                    newArr.push( e1 );
                }
                index++;
            }
        } else {
            var newArr = bloxArr;
        }

        var html = "";

        newArr.forEach( function( nr ) {
            if ( nr != "&ndash;" ) {
                html += nr.toString().slice(0, -2) + '<span class="text-big">' + nr.toString().slice(-2) + ', </span>';
            } else {
                html = html.slice(0,-9) + "</span> &ndash; ";  // slice odcina koncowke z przecinkiem i dokleja bez przecinka
            }
        })
        return html.slice(0,-9) + "</span>"
    } else {
        return bloxArr
    }
}

document.getElementById("formatted").innerHTML = formatujBloczki(numbers2);