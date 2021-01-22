"use strict"
const fetch = require("node-fetch")
const prompt = require("promise-prompt")
function scrivi(obj){
    console.log("-------------------------")
    console.log("TITLE: "+obj.title)
    console.log("User id: "+obj.userId)
    console.log("id: "+obj.id)
    console.log("Body: "+obj.body)
    console.log("-------------------------")

}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
      prompt("Inserisci quanti elementi vuoi visualizzare: ")
        .then( (n) => {
            prompt("inserisci da che id vuoi partire: ").then( (start) => {
                start = Number(start)
                console.log(typeof(start))
                console.log("######################")
                for (let i = 0; i<=n; i++){
                    scrivi(json[i+start])
                }
                console.log("######################")
            })
        })
    })