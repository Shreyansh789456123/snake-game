var snake, snakeimg
var apple, appleimg






function preload() {

  snakeimg = loadImage("greenbox.png")
  appleimg = loadImage("apple.png")
  
  
}

function setup() {
  createCanvas(1200,1000)

  snake = new Snake()

}

function draw() {
  background(0);

  if(keyDown(LEFT_ARROW)){
    if(snake.headDirection != "right"){

      snake.moveLeft()

    }
  }

  if(keyDown(RIGHT_ARROW)){
    if(snake.headDirection != "left"){

      snake.moveRight()

    }
  }

  if(keyDown(UP_ARROW)){
    if(snake.headDirection != "down"){

      snake.moveUp()

    }
  }

  if(keyDown(DOWN_ARROW)){
    if(snake.headDirection != "up"){

      snake.moveDown()

    }
  }
  
  
                                         
  drawSprites()
}

