import {Aurelia, bindable , inject} from 'aurelia-framework'

//   import {ApiCall} from '../services/ApiCall';

import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class PAGE1 {
    
    public title: string
    @bindable public quotes: any
    public quotesImg: string
    public data:any
    public ApiCall: any
    public http: any
    public randomQuotes: any
    constructor(http) {
        this.http = http;
        
            this.title ="rick and morty quotes"
            this.randomQuotes = [];
            this.quotesImg = ''; 
       
    }

    
    
    // Using Aurelia's dependency injection, we inject HttpClient
    // with the @inject decorator to make HTTP requests
   
     attached() {
       this.getQoutes(); 
       this.randomRick();
       
    }
    getQoutes(){
        return this.http.get('http://loremricksum.com/api/?paragraphs=3&quotes=1')
        .then(response => {
            console.log(response)
            let cleanedupRes = JSON.parse(response.response)
            console.log(cleanedupRes)
          this.randomQuotes = cleanedupRes.data;
        }).catch(error => {
          console.log('Error getting quote');
        });
    }
    randomRick(){
            let imgArray = [
                "http://i.giphy.com/l41lI4bYmcsPJX9Go.gif",
                "http://i.giphy.com/2s0ouek7HJmWQ.gif",
                "http://i.giphy.com/x9DVHBmO750Ji.gif",
                "http://i.giphy.com/9s4TbZ3qNEiNa.gif",
                "http://i.imgur.com/QWkxfrJ.gif",
                "http://i.giphy.com/vV5g3lCOzqAhO.gif",
                "http://i.giphy.com/ayQ99hp01HFN6.gif"
            ]
            let ramdomImage = imgArray[Math.floor(Math.random()*imgArray.length)]
            this.quotesImg = ramdomImage;
    }
    
}