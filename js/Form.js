class Form{
    constructor(){
        this.input = createInput("Enter your name here");
        this.button = createButton('Submit');
        this.title = createElement('h2');
        this.greeting = createElement('h1');
        this.reset = createButton('reset');  
    } 
    hide(){
    
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    
    }
    display(){
     background(MillitaryImg);

     this.title.html("Black Knights");
     this.title.position(600,100);

     this.input.position(600,300);
     this.button.position(710,330);
     this.reset.position(200,400);

     this.button.mousePressed(()=>{
       
     this.input.hide();
     this.button.hide();
     player.name = this.input.value();

     playerCount+=1;
     player.index = playerCount;
     player.update();

     player.updateCount(playerCount);
     
     this.greeting.html("Welcome to Millitary Operations , " + player.name);
     this.greeting.position(500,300);
     })
     this.reset.mousePressed(()=>{
         game.updateState(0);
         player.updateCount(0);
         database.ref('players').remove();
     })
    }
}