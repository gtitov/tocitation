import Cite from 'citation-js'
import { gost } from './custom-styles'
let config = Cite.plugins.config.get('@csl')
config.templates.add("gost", gost)
var cite = new Cite()


ris2citation = function() {
    var ris = document.getElementById("ris").value
    var citationStyle = document.getElementById("citation-style").value
    let citeObject = cite.set(ris)
    var citation = citationStyle == "bibtex" ? citeObject.format("bibtex") : citeObject.format("bibliography", {template: citationStyle})
    document.getElementById("citation").innerText = citation
}

var button = document.getElementById("getcitation")
button.addEventListener("click", ris2citation)



  