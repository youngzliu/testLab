function Card(x, y, top, bottom, right, left, treasure){
  this.myX = x,
  this.myY = y,
  this.myTopWall = top,
  this.myBottomWall = bottom,
  this.myRightWall = right,
  this.myLeftWall = left,
  this.myTreasure = treasure,
  this.myPlayer = null;
};

Card.prototype.rotate(direction){
  if (direction === "left"){
    var rightValue = this.myRightWall; //Store the valule of the right wall before shifting things
    this.myRightWall = this.myBottomWall;
    this.myBottomWall = this.myLeftWall;
    this.myLeftWall = this.myTopWall;
    this.myTopWall = rightValue;
  }
  else{ //Rotating to the right
    var rightValue = this.myRightWall;
    this.myRightWall = this.myTopWall;
    this.myTopWall = this.myLeftWall;
    this.myLeftWall = this.myBottomWall;
    this.myBottomWall = rightValue;  
  }
}

function Player(name){
  this.myName = name,
  this.myScore = 0
};

function Board(){
  this.myBoard = [[], [], [], [], []]
};

Board.prototype.pushCard(row, column, direction, gameCard){
  var spareCard; //The card that will get pushed out
  if(row){ //Inserting the card into a row
    if(direction === "ltr"){ //Direction is left to right
      spareCard = this.myBoard[4][row];
      spareCard.myX = -1; //Resetting cooirdinates of spare card
      spareCard.myY = -1;
      this.myBoard[4][row] = this.myBoard[3][row];
      this.myBoard[4][row].myX++;//Updating x cooirdinate of shifted element
      this.myBoard[3][row] = this.myBoard[2][row];
      this.myBoard[3][row].myX++;
      this.myBoard[2][row] = this.myBoard[1][row];
      this.myBoard[2][row].myX++;
      this.myBoard[1][row] = this.myBoard[0][row];
      this.myBoard[1][row].myX++;
      this.myBoard[0][row] = gameCard; //Card that is being pushed in
      this.myBoard[0][row].myX = 0;
      this.myBoard[0][row].myY = row;
      return spareCard;
    }
    else{ //Direction is right to left
      spareCard = this.myBoard[0][row];
      spareCard.myX = -1;
      spareCard.myY = -1;
      this.myBoard[0][row] = this.myBoard[1][row];
      this.myBoard[0][row].myX--;
      this.myBoard[1][row] = this.myBoard[2][row];
      this.myBoard[1][row].myX--;
      this.myBoard[2][row] = this.myBoard[3][row];
      this.myBoard[2][row].myX--;
      this.myBoard[3][row] = this.myBoard[4][row];
      this.myBoard[3][row].myX--;
      this.myBoard[4][row] = gameCard;
      this.myBoard[4][row].myX = 4;
      this.myBoard[4][row].myY = row;
      return spareCard;
    }
  }
  else{ //Inserting the card into a column
    if(direcion === "ttb"){ //Direction is top to bottom
      spareCard = this.myBoard[column][4];
      spareCard.myX = -1;
      spareCard.myY = -1;
      this.myBoard[column][4] = this.myBoard[column][3];
      this.myBoard[column][4].myY++;
      this.myBoard[column][3] = this.myBoard[column][2];
      this.myBoard[column][3].myY++;
      this.myBoard[column][2] = this.myBoard[column][1];
      this.myBoard[column][2].myY++;
      this.myBoard[column][1] = this.myBoard[column][0];
      this.myBoard[column][1].myY++;
      this.myBoard[column][0] = gameCard;
      this.myBoard[column][0].myX = column;
      this.myBoard[column][0].myY = 0;
      return spareCard;
    }
    else{ //Direction is bottom to top
      spareCard = this.myBoard[column][0];
      spareCard.myX = -1;
      spareCard.myY = -1;
      this.myBoard[column][0] = this.myBoard[column][1];
      this.myBoard[column][0].myY--;
      this.myBoard[column][1] = this.myBoard[column][2];
      this.myBoard[column][1].myY--;
      this.myBoard[column][2] = this.myBoard[column][3];
      this.myBoard[column][2].myY--;
      this.myBoard[column][3] = this.myBoard[column][4];
      this.myBoard[column][3].myY--;
      this.myBoard[column][4] = gameCard;
      this.myBoard[column][4].myX = column;
      this.myBoard[column][4].myY = 4;
      return spareCard;
    }
  }
};
