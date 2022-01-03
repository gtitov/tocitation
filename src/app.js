import { Cite, plugins } from '@citation-js/core'
import bibtex from '@citation-js/plugin-bibtex'
import ris from '@citation-js/plugin-ris'
import csl from '@citation-js/plugin-csl'
import { gost } from './custom-styles'
let config = plugins.config.get('@csl')
config.templates.add("gost", gost)

var cite = new Cite()


getCitation = function () {
    var citationFrom = document.getElementById("citation-from").value
    var citationStyle = document.getElementById("citation-style").value
    let citeObject = cite.set(citationFrom)
    console.log(citeObject.format("bibtex"))
    var citation = citationStyle == "bibtex" ? citeObject.format("bibtex") : citeObject.format("bibliography", {template: citationStyle})
    document.getElementById("citation-result").innerText = citation
}

var button = document.getElementById("citation-make")
button.addEventListener("click", getCitation)



