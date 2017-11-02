

export class Wrapper {
    public AppTitle: string; 
    public imgSrc: string;
    
    
    // this is were the main routring is done 


    constructor (){
        this.AppTitle = ' this is the basic aurelia app with routing '
        this.imgSrc = 'http://i.giphy.com/l41lI4bYmcsPJX9Go.gif'
    }

   

    randomRick(){
        console.log('in the function ')
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
            this.imgSrc = ramdomImage;
    }
    

}