class Snake{
    constructor(){
       
        this.length = 5
        this.x = 500
        this.y = 500
        this.turns = [] 
        this.headDirection = "left"
        
        this.head = createSprite( this.x, this.y, 15, 15)
        this.head.shapeColor = "red"
        this.body = new Group()

        for (var i = 0; i < 5; i++ ){
            var bodypart = createSprite(this.x + 15 + i*10 , this.y, 10, 10)
            bodypart.shapeColor = "green"
            this.body.add(bodypart)
            
            
        }
        
    }

    moveLeft(){
        var turnposition = [this.head.position.x, this.head.position.y, "left"]
        
        if(this.headDirection != "left"){
            this.turns.push(turnposition)
            this.headDirection = "left"
            
        }
        
        this.head.position.x -= 3
        
        
        this.followHead("left")
        
        
    }

    moveRight(){
        var turnposition = [this.head.position.x, this.head.position.y, "right"]
        
        if(this.headDirection != "right"){
            this.turns.push(turnposition)
            this.headDirection = "right"
        }
        
        this.head.position.x += 3
        
        
        this.followHead("right")
                                
        
    }
    
    moveUp(){
        var turnposition = [this.head.position.x, this.head.position.y, "up"]
        
        if(this.headDirection != "up"){
            this.turns.push(turnposition)
            this.headDirection = "up"
            
        }
        
        this.head.position.y -= 3
       
        
        
        this.followHead("up")
        
    }
    
    moveDown(){
        var turnposition = [this.head.position.x, this.head.position.y, "down"]
        
        if(this.headDirection != "down"){
            this.turns.push(turnposition)
            this.headDirection = "down"

        }
        
        this.head.position.y += 3
        

        this.followHead("down")
        
    }

    followHead(bodyDirection){
        
        for(var i = 0; i < this.body.length; i++){
           
            //console.log(this.turns)
            if(bodyDirection === "left"){
                

                this.body[i].position.x -= 3
                console.log("reduced x position by 3")
            }        
                
                                                                     
            if(bodyDirection === "right"){
                
                this.body[i].position.x += 3
            }

            if(bodyDirection === "up"){
                
                this.body[i].position.y -=3
            }

            if(bodyDirection === "down"){
               
                this.body[i].position.y +=3
            }
            for(var j = 0; j < this.turns.length; j++){

                if(this.body[i].position.x === this.turns[j][0] && this.body[i].position.y === this.turns[j][1]){
                    bodyDirection = this.turns[j][2]
                    if(bodyDirection === "up"){
                        this.body[i].position.x = this.turns[j][0]

                    }

                    if(bodyDirection === "down"){
                        this.body[i].position.x = this.turns[j][0]
                        
                    }

                    if(bodyDirection === "left"){
                        this.body[i].position.y = this.turns[j][1]
                        
                    }

                    if(bodyDirection === "right"){
                        this.body[i].position.y = this.turns[j][1]
                        
                    }
                }
            }
           
                

            
            console.log(bodyDirection) 
        }




    }
} 