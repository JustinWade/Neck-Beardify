var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Woman|Girl|Lady/gi, "M'Lady");
            
            var text2 = node.nodeValue;
            var replacedText2 = text2.replace(/Women/gi, "M'Ladies");
            
            var text3 = node.nodeValue;
            var replacedText3 = text3.replace(/Hat/gi, "Fedora");
            
            var text4 = node.nodeValue;
            var replacedText4 = text4.replace(/Person|Dude|Guy|Boy/gi, "Chad");
            
            var text5 = node.nodeValue;
            var replacedText5 = text5.replace(/Sword|Weapon|Gun|Blade/gi, "Katana");
            
            var text6 = node.nodeValue;
            var replacedText6 = text6.replace(/Wife/gi, "Waifu pillow");
            
            var text7 = node.nodeValue;
            var replacedText7 = text7.replace(/Food/gi, "Doritos");
            
            var text8 = node.nodeValue;
            var replacedText8 = text8.replace(/Water|Drink/gi, "Mountain Dew");
            
            var text9 = node.nodeValue;
            var replacedText9 = text9.replace(/chicken nuggets|chicken strips|chicken breasts|chicken fingers|chicken tenders/gi, "chicken tendies");
            
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

            if (replacedText2 !== text) {
                element.replaceChild(document.createTextNode(replacedText2), node);
            }
            
            if (replacedText3 !== text) {
                element.replaceChild(document.createTextNode(replacedText3), node);
            }
            
            if (replacedText4 !== text) {
                element.replaceChild(document.createTextNode(replacedText4), node);
            }
            
            if (replacedText5 !== text) {
                element.replaceChild(document.createTextNode(replacedText5), node);
            }
            
            if (replacedText6 !== text) {
                element.replaceChild(document.createTextNode(replacedText6), node);
            }
            
            if (replacedText7 !== text) {
                element.replaceChild(document.createTextNode(replacedText7), node);
            }
            
            if (replacedText8 !== text) {
                element.replaceChild(document.createTextNode(replacedText8), node);
            }
            
            if (replacedText9 !== text) {
                element.replaceChild(document.createTextNode(replacedText9), node);
            }
        }
    }
}