let treeX = [];
for (let i = 0; i <= 900; i += 50)
{
  treeX.push(i);
}

let treeY = [];
for (let i = 0; i <= 700; i += 50)
{
  treeY.push(i);
}

let rockX = [];
for (let i = 0; i <= 900; i += 50)
{
  rockX.push(i);
}

let rockY = [];
for (let i = 0; i <= 700; i += 50)
{
  rockY.push(i);
}

let caveX = [];
for (let i = 0; i <= 900; i += 50)
{
  caveX.push(i);
}

let caveY = [];
for (let i = 0; i <= 700; i += 50)
{
  caveY.push(i);
}

let woodCount = [];
for (let i = 1; i <= 5; i++)
{
  woodCount.push(i);
}

let stoneCount = [];
for (let i = 1; i <= 5; i++)
{
  stoneCount.push(i);
}

let damageVals = [];
for (let i = 1; i < 8; i++)
{
  damageVals.push(i);
}

let meleeAbilities = ['Normal', 'Tank', 'Speed', 'Damage', 'Maniac'];

class Player
{
  constructor(hp)
  {
    this.hp = hp;
    this.x = 0;
    this.y = 0;
    this.width = 25;
    this.height = 25;
    this.speed = 0.5;
    this.swinging = false;
    this.meleeDmg = 0;
    this.treeDmg = 0;
    this.rockDmg = 0;
    this.dirY = 0;
    this.dirX = 0;
    this.range = 0;
  }
  drawSelf()
  {
    push();
    noStroke();
    fill(251, 231, 62);
    ellipse(this.x, this.y, this.width, this.height);
    pop();
  }
  setSpawn()
  {
    this.x = random(50, width-50);
    this.y = random(50, height-50);
  }
  moveUp()
  {
    this.y -= this.speed;
  }
  moveDown()
  {
    this.y += this.speed;
  }
  moveLeft()
  {
    this.x -= this.speed;
  }
  moveRight()
  {
    this.x += this.speed;
  }
  getMeleeDmg(weapon)
  {
    if (weapon == 'Hand')
    {
      this.meleeDmg = 2;
      this.treeDmg = 0.5;
      this.rockDmg = 0.25;
    }
    else if (weapon == 'Wooden Axe')
    {
      this.meleeDmg = 3;
      this.treeDmg = 1;
      this.rockDmg = 0.5;
    }
    else if (weapon == 'Wooden Sword')
    {
      this.meleeDmg = 5;
      this.treeDmg = 0.5;
      this.rockDmg = 0.25;
    }
    else if (weapon == 'Wooden Pickaxe')
    {
      this.meleeDmg = 3;
      this.treeDmg = 0.5;
      this.rockDmg = 1;
    }
    else if (weapon == 'Stone Axe')
    {
      this.meleeDmg = 4;
      this.treeDmg = 2;
      this.rockDmg = 1;
    }
    else if (weapon == 'Stone Sword')
    {
      this.meleeDmg = 6;
      this.treeDmg = 1;
      this.rockDmg = 0.5;
    }
    else if (weapon == 'Stone Pickaxe')
    {
      this.meleeDmg = 4;
      this.treeDmg = 1;
      this.rockDmg = 2;
    }
    else if (weapon == 'Silver Axe')
    {
      this.meleeDmg = 5;
      this.treeDmg = 3;
      this.rockDmg = 1.5;
    }
    else if (weapon == 'Silver Sword')
    {
      this.meleeDmg = 7;
      this.treeDmg = 1.5;
      this.rockDmg = 0.75;
    }
    else if (weapon == 'Silver Pickaxe')
    {
      this.meleeDmg = 5;
      this.treeDmg = 1.5;
      this.rockDmg = 3;
    }
    else if (weapon == 'Platinum Axe')
    {
      this.meleeDmg = 6;
      this.treeDmg = 4;
      this.rockDmg = 2;
    }
    else if (weapon == 'Platinum Sword')
    {
      this.meleeDmg = 8;
      this.treeDmg = 2;
      this.rockDmg = 1;
    }
    else if (weapon == 'Platinum Pickaxe')
    {
      this.meleeDmg = 6;
      this.treeDmg = 2;
      this.rockDmg = 4;
    }
    else if (weapon == 'Jadite Axe')
    {
      this.meleeDmg = 7;
      this.treeDmg = 5;
      this.rockDmg = 2.5;
    }
    else if (weapon == 'Jadite Sword')
    {
      this.meleeDmg = 9;
      this.treeDmg = 2.5;
      this.rockDmg = 1.25;
    }
    else if (weapon == 'Jadite Pickaxe')
    {
      this.meleeDmg = 7;
      this.treeDmg = 2.5;
      this.rockDmg = 5;
    }
    else if (weapon == 'Diamond Axe')
    {
      this.meleeDmg = 8;
      this.treeDmg = 6;
      this.rockDmg = 3;
    }
    else if (weapon == 'Diamond Sword')
    {
      this.meleeDmg = 10;
      this.treeDmg = 3;
      this.rockDmg = 1.5;
    }
    else if (weapon == 'Diamond Pickaxe')
    {
      this.meleeDmg = 8;
      this.treeDmg = 3;
      this.rockDmg = 6;
    }
    else if (weapon == 'Obsidian Axe')
    {
      this.meleeDmg = 9;
      this.treeDmg = 7;
      this.rockDmg = 3.5;
    }
    else if (weapon == 'Obsidian Sword')
    {
      this.meleeDmg = 11;
      this.treeDmg = 3.5;
      this.rockDmg = 1.75;
    }
    else if (weapon == 'Obsidian Pickaxe')
    {
      this.meleeDmg = 9;
      this.treeDmg = 3.5;
      this.rockDmg = 7;
    }
  }
  getRange(weapon)
  {
    if (weapon == 'Hand')
    {
      this.range = 15;
    }
    else if (weapon == 'Wooden Axe' || weapon == 'Stone Axe' || weapon == 'Silver Axe' || weapon == 'Platinum Axe' || weapon == 'Jadite Axe' || weapon == 'Diamond Axe' || weapon == 'Obsidian Axe')
    {
      this.range = 20;
    }
    else if (weapon == 'Wooden Sword' || weapon == 'Stone Sword' || weapon == 'Silver Sword' || weapon == 'Platinum Sword' || weapon == 'Jadite Sword' || weapon == 'Diamond Sword' || weapon == 'Obsidian Sword')
    {
      this.range = 25;
    }
    else if (weapon == 'Wooden Pickaxe' || weapon == 'Stone Pickaxe' || weapon == 'Silver Pickaxe' || weapon == 'Platinum Pickaxe' || weapon == 'Jadite Pickaxe' || weapon == 'Diamond Pickaxe' || weapon == 'Obsidian Pickaxe')
    {
      this.range = 20;
    }
  }
}

class PlayerFacingDirection
{
  constructor(playerX, playerY)
  {
    this.playerX = playerX;
    this.playerY = playerY;
    this.angle = Math.atan2(mouseY - playerY, mouseX - playerX);
    this.faceAngle = this.angle + radians(-90)
  }
  drawSelf()
  {
    push();
    translate(this.playerX, this.playerY);
    rotate(this.faceAngle);
    
    noStroke();
    fill(253, 75, 75);
    beginShape();
    vertex(-5, 15);
    vertex(0, 25);
    vertex(5, 15);
    endShape();
    pop();
  }
}

class MeleeEnemy
{
  constructor(type)
  {
    this.type = type;
    this.hp = 0;
    this.maxhp = 0;
    this.alive = true;
    this.x = random(0, 900);
    this.y = random(0, 700);
    this.width = 25;
    this.height = 25;
    this.speed = 0;
    this.visionRange = 150;
    this.dmg = random(damageVals);
    this.ability = random(meleeAbilities);
  }
  setSpawn()
  {
    if (this.type == 'zombie')
    {
      this.alive = true;
      if (this.ability == 'Normal')
      {
        this.maxhp = 40;
        this.hp = 40;
        this.speed = 0.3;
      }
      if (this.ability == 'Speed')
      {
        this.maxhp = 40;
        this.hp = 40;
        this.speed = 0.7;
      }
      if (this.ability == 'Damage')
      {
        this.maxhp = 50;
        this.hp = 50;
        this.dmg += 2;
        this.speed = 0.5;
      }
      if (this.ability == 'Tank')
      {
        this.maxhp = 400;
        this.hp = 400;
        this.speed = 0.4;
      }
      if (this.ability == 'Maniac')
      {
        this.speed = 0.5
        this.maxhp = 70;
        this.hp = 70;
      }
    }
    this.x = random(0, 900);
    this.y = random(0, 700);
  }
  drawSelf()
  {
    push();
    if (this.alive)
    {
      if (this.type == 'zombie')
      {
        noStroke();
        if (this.ability == 'Speed')
        {
          fill(137, 250, 199);
          ellipse(this.x + (this.width/2), this.y + (this.height/2), this.width + 5, this.height + 5);
        }
        if (this.ability == 'Damage')
        {
          fill(233, 86, 86);
          ellipse(this.x + (this.width/2), this.y + (this.height/2), this.width + 5, this.height + 5);
        }
        if (this.ability == 'Tank')
        {
          fill(26, 122, 18);
          ellipse(this.x + (this.width/2), this.y + (this.height/2), this.width + 5, this.height + 5);
        }
        if (this.ability == 'Maniac')
        {
          fill(233, 159, 250);
          ellipse(this.x + (this.width/2), this.y + (this.height/2), this.width + 5, this.height + 5);
        }
        if (this.ability == 'Normal')
        {
          fill(110, 207, 98);
        }
        fill(110, 207, 98);
        ellipse(this.x + (this.width/2), this.y + (this.height/2), this.width, this.height);
      }
    }
    pop();
  }
  showHP()
  {
    push();
    
    let mobHP = map(this.hp, 0, this.maxhp, 0, 100);
    
    noStroke();
    if (mobHP > 70)
    {
      fill(87, 250, 90);
    }
    else if (mobHP < 70 && mobHP > 30)
    {
      fill(255, 241, 69);
    }
    else
    {
      fill(255, 71, 71);
    }
    rect(this.x - 15, this.y - 7, mobHP/2, 5);
    pop();
  }
  findTarget()
  {
    if (this.x + cameraX + this.visionRange > survivor.x)
    {
      if (this.x + cameraX < survivor.x)
      {
        if (this.y + cameraY + this.visionRange > survivor.y)
        {
          if (this.y + cameraY < survivor.y)
          {
            this.x += this.speed;
            this.y += this.speed;
          }
        }
        
        if (this.y + cameraY - this.visionRange < survivor.y)
        {
          if (this.y + cameraY > survivor.y)
          {
            this.x += this.speed;
            this.y -= this.speed;
          }
        }
      }
    }
    
    if (this.x + cameraX - this.visionRange < survivor.x)
    {
      if (this.x + cameraX > survivor.x)
      {
        if (this.y + cameraY + this.visionRange > survivor.y)
        {
          if (this.y + cameraY < survivor.y)
          {
            this.x -= this.speed;
            this.y += this.speed;
          }
        }
        
        if (this.y + cameraY - this.visionRange < survivor.y)
        {
          if (this.y + cameraY > survivor.y)
          {
            this.x -= this.speed;
            this.y -= this.speed;
          }
        }
      }
    }
  }
  attackRight()
  {
    if (armorHP > 0)
    {
      armorHP -= this.dmg;
    }
    else
    {
      survivorHP -= this.dmg;
    }
    survivor.x -= 5;
  }
  attackLeft()
  {
    if (armorHP > 0)
    {
      armorHP -= this.dmg;
    }
    else
    {
      survivorHP -= this.dmg;
    }
    survivor.x += 5;
  }
  attackBottom()
  {
    survivor.y -= 5;
  }
  attackTop()
  {
    survivor.y += 5;
  }
}

class Tree
{
  constructor()
  {
    this.hp = 100;
    this.x = random(treeX);
    this.y = random(treeY);
    this.width = 20;
    this.height = 30;
    this.giveAmt = random(woodCount);
    this.alive = true;
    this.killedTime = 0;
    this.destroyed = false;
    this.trunkColor = '#B07736';
    this.leafColor = '#36B038';
  }
  drawSelf()
  {
    push();
    
    noStroke();
    fill(this.trunkColor);
    rect(this.x, this.y, this.width, this.height);
    
    fill(this.leafColor);
    ellipse(this.x + 10, this.y - 5, 40, 40);
    
    pop();
  }
  destroy()
  {
    this.x = -width;
    this.alive = false;   
  }
  showHP()
  {
    push();
    noStroke();
    if (this.hp > 70)
    {
      fill(87, 250, 90);
    }
    else if (this.hp < 70 && this.hp > 30)
    {
      fill(255, 241, 69);
    }
    else
    {
      fill(255, 71, 71);
    }
    rect(this.x - 15, this.y - 32, this.hp/2, 5);
    pop();
  }
  giveWood()
  {
    for (let i = 0; i < this.giveAmt; i++)
    {
      survivorInvWood += 1;
    }
  }
  respawn()
  {
    this.hp = 100;
    this.x = random(treeX);
    this.y = random(treeY);
  }
  nightColor()
  {
    this.trunkColor = '#6D4920';
    this.leafColor = '#227923';
  }
  dayColor()
  {
    this.trunkColor = '#B07736';
    this.leafColor = '#36B038';
  }
}

class Rock
{
  constructor()
  {
    this.hp = 100;
    this.x = random(rockX);
    this.y = random(rockY);
    this.width = 38;
    this.height = 30;
    this.giveAmt = random(stoneCount);
    this.alive = true;
    this.killedTime = 0;
    this.destroyed = false;
  }
  drawSelf()
  {
    push();
    noStroke();
    fill(150);
    beginShape();
	curveVertex(this.x, this.y);
	curveVertex(this.x + 36, this.y + 2);
	curveVertex(this.x + 34, this.y + 28);
	curveVertex(this.x, this.y + 28);
    curveVertex(this.x - 5, this.y + 5);
	endShape(CLOSE);
    pop();
  }
  destroy()
  {
    this.x = -width;
    this.alive = false;   
  }
  showHP()
  {
    push();
    noStroke();
    if (this.hp > 70)
    {
      fill(87, 250, 90);
    }
    else if (this.hp < 70 && this.hp > 30)
    {
      fill(255, 241, 69);
    }
    else
    {
      fill(255, 71, 71);
    }
    rect(this.x - 8, this.y - 15, this.hp/2, 5);
    pop();
  }
  giveStone()
  {
    for (let i = 0; i < this.giveAmt; i++)
    {
      survivorInvStone += 1;
    }
  }
  respawn()
  {
    this.hp = 100;
    this.x = random(rockX);
    this.y = random(rockY);
  }
}

class Cave
{
  constructor()
  {
    this.x = random(caveX);
    this.y = random(caveY);
    this.width = 30;
    this.height = 30;
    this.outerColor = '#7D7D7D';
    this.innerColor = '#4A4A49';
  }
  drawSelf()
  {
    push();
    noStroke();
    fill(125);
    rect(this.x, this.y, this.width, this.height);
    ellipse(this.x + 10, this.y, this.width, this.height);
    ellipse(this.x + 5, this.y + 5, this.width, this.height);
    ellipse(this.x, this.y + 10, this.width, this.height);
    ellipse(this.x - 3, this.y + 18, this.width, this.height);
    
    ellipse(this.x + 15, this.y, this.width, this.height);
    ellipse(this.x + 20, this.y + 5, this.width, this.height);
    ellipse(this.x + 25, this.y + 10, this.width, this.height);
    ellipse(this.x + 28, this.y + 18, this.width, this.height);
    
    rect(this.x - 3, this.y + 25, 35, 8);
    
    fill(74, 74, 73);
    rect(this.x + 1, this.y + 18, 28, 15);
    ellipse(this.x + (this.width/2), this.y + 2 + (this.height/2), this.width, this.height);
    pop();
  }
  drawExit()
  {
    push();
    noStroke();
    fill(139, 87, 56);
    rect(this.x, this.y, this.width, this.height);
    ellipse(this.x + 10, this.y, this.width, this.height);
    ellipse(this.x + 5, this.y + 5, this.width, this.height);
    ellipse(this.x, this.y + 10, this.width, this.height);
    ellipse(this.x - 3, this.y + 18, this.width, this.height);
    
    ellipse(this.x + 15, this.y, this.width, this.height);
    ellipse(this.x + 20, this.y + 5, this.width, this.height);
    ellipse(this.x + 25, this.y + 10, this.width, this.height);
    ellipse(this.x + 28, this.y + 18, this.width, this.height);
    
    rect(this.x - 3, this.y + 25, 35, 8);
    
    fill(128, 203, 227);
    rect(this.x + 1, this.y + 18, 28, 15);
    ellipse(this.x + (this.width/2), this.y + 2 + (this.height/2), this.width, this.height);
    pop();
  }
  nightColor()
  {
    this.outerColor = '#4D4D4D';
    this.innerColor = '#181818';
  }
  dayColor()
  {
    this.outerColor = '#7D7D7D';
    this.innerColor = '#4A4A49';
  }
}

class Exit
{
  constructor()
  {
    this.hp = 100;
    this.x = width/2;
    this.y = -150;
    this.width = 30;
    this.height = 30;
    this.opened = false;
  }
  drawSelf()
  {
    push();
    if (this.opened)
    {
      fill(255, 156, 45);
    }
    else
    {
      fill (25);
    }
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}

let gameOver;
let gameStart;
let controlScreenActive;
let showingMenu;
let level;

let time;
let isDayTime;
let timeOfDay;

let survivorInvWood;
let survivorInvStone;
let survivorInvRefWood;
let survivorInvRefStone;

let survivorInvRope;
let survivorInvHerbs;
let survivorInvCloth;
let survivorInvLongHandle;
let survivorInvShortHandle;

let survivorInvSilver;
let survivorInvPlatinum;
let survivorInvJadite;
let survivorInvDiamond;
let survivorInvObsidian;

let survivorInvBandage;

let tempSlot1;
let tempSlot2;

let tempSlot1X;
let tempSlot2X;

let tempOccupiedSlot1;
let tempOccupiedSlot2;

let tempProduct;
let tempProductX;

let tempTextSize = 14;

let templateBaseOwned;
let survivorInv;

let showingInv = false;
let showingCraft = false;
let craftPage;

let showingTemplateIcon;
let showingTempCraft;

let grass = '#7DA56D';
let caveGround = '#A66D4B';
let inCave = false;

let survivorHP;
let survivor;
let survivorFacing;
let survivorWeapon;

let armorHP;
let activeChestplate;

let zombies = [];
let numZombies = 4;
let zombiesKilled;

//tools owned
let woodAxeOwned = false;
let woodSwordOwned = false;
let woodPickaxeOwned = false;
let stoneAxeOwned = false;
let stoneSwordOwned = false;
let stonePickaxeOwned = false;
let silverAxeOwned = false;
let silverSwordOwned = false;
let silverPickaxeOwned = false;
let platinumAxeOwned = false;
let platinumSwordOwned = false;
let platinumPickaxeOwned = false;
let jaditeAxeOwned = false;
let jaditeSwordOwned = false;
let jaditePickaxeOwned = false;
let diamondAxeOwned = false;
let diamondSwordOwned = false;
let diamondPickaxeOwned = false;
let obsidianAxeOwned = false;
let obsidianSwordOwned = false;
let obsidianPickaxeOwned = false;

let woodAxeActive = false;
let woodSwordActive = false;
let woodPickaxeActive = false;
let stoneAxeActive = false;
let stoneSwordActive = false;
let stonePickaxeActive = false;
let silverAxeActive = false;
let silverSwordActive = false;
let silverPickaxeActive = false;
let platinumAxeActive = false;
let platinumSwordActive = false;
let platinumPickaxeActive = false;
let jaditeAxeActive = false;
let jaditeSwordActive = false;
let jaditePickaxeActive = false;
let diamondAxeActive = false;
let diamondSwordActive = false;
let diamondPickaxeActive = false;
let obsidianAxeActive = false;
let obsidianSwordActive = false;
let obsidianPickaxeActive = false;

let axeOwned = false;
let pickaxeOwned = false;
let swordOwned = false;

let nearTree = false;
let nearRock = false;

let freedom;

//trees
let trees = [];
let numTrees = 39;

//rocks
let rocks = [];
let numRocks = 21;

//caves
let caves = [];
let numCaves = 3;

//movement
let movingDown = false;
let movingUp = false;
let movingLeft = false;
let movingRight = false;

//direction facing
let facingDown = false;
let facingUp = false;
let facingLeft = false;
let facingRight = false;

//direction diagonal
let facingNE = false;
let facingNW = false;
let facingSE = false;
let facingSW = false;

let craftAvailable = false;

let craftX = 60;

let craft1Y = 70;
let craft2Y = 110;
let craft3Y = 150;

let craftNextX = 210;
let craftBackX = 170;
let craftButtonY = 190;

let craftWidth = 280;
let craftHeight = 30;

let directionValue;

//camera
let cameraX;
let cameraY;

function setup() 
{
  createCanvas(700, 500);
  frameRate(60);
  resetGame();
}

function resetGame()
{
  gameOver = false;
  gameStart = false;
  controlScreenActive = false;
  showingMenu = false;
  
  level = 1;
  craftPage = 1;
  
  showingTemplateIcon = false;
  
  bgY = height/2 + 20;
  titleY = height/2 + 50;
  
  time = 0;
  isDayTime = true;
  timeOfDay = 0;
  
  survivor = new Player(survivorHP);
  survivor.setSpawn();
  survivorHP = 100;
  survivorWeapon = 'Hand';
  
  armorHP = 0;
  activeChestplate = '';
  
  survivorInv = ['Wood: ' + survivorInvWood, 'Stone: ' + survivorInvStone, 'Refined Wood: ' + survivorInvRefWood, 'Refined Stone: ' + survivorInvRefStone];
  survivorInvWood = 0;
  survivorInvStone = 0;
  
  survivorInvRefWood = 0;
  survivorInvRefStone = 0;
  
  survivorInvRope = 0;
  survivorInvHerbs = 0;
  survivorInvCloth = 0;
  survivorInvLongHandle = 0;
  survivorInvShortHandle = 0;
  
  survivorInvSilver = 0;
  survivorInvPlatinum = 0;
  survivorInvJadite = 0;
  survivorInvDiamond = 0;
  survivorInvObsidian = 0;
  
  survivorInvBandage = 0;
  
  tempSlot1 = '';
  tempSlot2 = '';
  tempProduct = '';
  
  tempSlot1X = 0;
  tempSlot2X = 0;
  tempProductX = 0;
  
  templateBaseOwned = false;
  
  showingTempCraft = false;
  
  zombiesKilled = 0;
  
  freedom = new Exit();
  
  for (let i = 0; i < numZombies; i++)
  {
    zombies.push(new MeleeEnemy('zombie'));
  }
  
  for (let i = 0; i < numTrees; i++)
  {
    trees.push(new Tree());
  }
  
  for (let i = 0; i < numRocks; i++)
  {
    rocks.push(new Rock());
  }
  
  for (let i = 0; i < numCaves; i++)
  {
    caves.push(new Cave());
  }
}

function draw()
{ 
  if (!gameOver && gameStart && !showingMenu)
  {
    if (!inCave)
    {
      outdoorGame();
    }
    else if (inCave)
    {
      caveGame();
    }
  }
  else if (!gameOver && !gameStart)
  {
    startScreen();
  }
  else if (!gameOver && gameStart && showingMenu)
  {
    startScreen();
  }
  if (survivorHP <= 0)
  {
    gameOver = true;
    deadScreen();
  }
}

function startScreen()
{
  background(139, 255, 255);
  
  let buttonbgX = width/2 - 100;
  let buttonbgY1 = height/2 - 30;
  let buttonbgY2 = height/2 + 20;
  let buttonbgWidth = 200;
  let buttonbgHeight = 40;
  
  push();
  if (!gameStart)
  {
    textAlign(CENTER);
    textSize(30);
    textStyle(BOLD);
    noStroke();
    
    fill(255, 169, 77);
    rect(buttonbgX, buttonbgY1, buttonbgWidth, buttonbgHeight, 10);
    rect(buttonbgX, buttonbgY2, buttonbgWidth, buttonbgHeight, 10);

    fill(255, 194, 54);
    text('PLAY', width/2, height/2);
    text('CONTROLS', width/2, height/2 + 50);
  }
  else
  {
    textAlign(CENTER);
    textSize(30);
    textStyle(BOLD);
    noStroke();

    fill(255, 169, 77);
    rect(buttonbgX, buttonbgY1, buttonbgWidth, buttonbgHeight, 10);
    rect(buttonbgX, buttonbgY2, buttonbgWidth, buttonbgHeight, 10);
    
    fill(255, 194, 54);
    text('RESUME', width/2, height/2);
    text('CONTROLS', width/2, height/2 + 50);
  }
  pop();
  
  if (controlScreenActive)
  {
    showControls();
  }
  
  if (mouseIsPressed)
  {
    if (mouseX > buttonbgX && mouseX < buttonbgX + buttonbgWidth)
    {
      if (mouseY > buttonbgY1 && mouseY < buttonbgY1 + buttonbgHeight)
      {
        if (!gameStart)
        {
          gameStart = true;
        }
        else
        {
          showingMenu = false;
        }
      }
    }
    
    if (mouseX > buttonbgX && mouseX < buttonbgX + buttonbgWidth)
    {
      if (mouseY > buttonbgY2 && mouseY < buttonbgY2 + buttonbgHeight)
      {
        controlScreenActive = true;
        bgY = height/2 + 20;
        titleY = height/2 + 50;
      }
    }
  }
}

let titleY;
let bgY;

function showControls()
{
  background(139, 255, 255);
  
  push();
  textAlign(CENTER);
  textSize(30);
  textStyle(BOLD);
  noStroke();
  
  if (bgY != 50 && titleY != 80)
  {
    bgY -= 5;
    titleY -=5;
  }
  else
  {
    push();
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text('w', width/2 - 150, 160);
    text('a', width/2 - 150, 200);
    text('s', width/2 - 150, 240);
    text('d', width/2 - 150, 280);
    text('q', width/2 - 150, 320);
    text('e', width/2 - 150, 360);
    text('r', width/2 - 150, 400);
    
    text('UP', width/2, 160);
    text('LEFT', width/2, 200);
    text('DOWN', width/2, 240);
    text('RIGHT', width/2, 280);
    text('RESOURCES', width/2, 320);
    text('CRAFT MENU', width/2, 360);
    text('SWITCH WEAPON', width/2, 400);
    
    fill(255, 169, 77);
    rect(50, height-80, 100, 40, 10);
    
    textSize(25);
    textStyle(BOLD);
    fill(255, 194, 54);
    text('BACK', 100, height-50);
    pop();
  }
  
  if (mouseIsPressed)
  {
    if (mouseX > 50 && mouseX < 150)
    {
      if (mouseY > height-80 && mouseY < height-40)
      {
        controlScreenActive = false;
      }
    }
  }
  
  fill(255, 169, 77);
  rect(width/2 - 100, bgY, 200, 40, 10);
  
  fill(255, 194, 54);
  text('CONTROLS', width/2, titleY);
  pop();
}

function deadScreen()
{
  background(0);
  textAlign(CENTER);
  textSize(60);
  fill('red');
  text('YOU DIED', width/2, height/2 - 30);
  text('Wave ' + level, width/2, height/2 + 30);
}

function outdoorGame()
{
  background(grass);
  displayPlayer();
  survivor.getRange(survivorWeapon);
  
  //block players from going off screen
  if (survivor.x < 20)
  {
    survivor.x = 20;
  }
  if (survivor.x > width - 20)
  {
    survivor.x = width - 20;
  }
  if (survivor.y < 20)
  {
    survivor.y = 20;
  }
  if (survivor.y > height - 20)
  {
    survivor.y = height - 20;
  }
  
  //update player inventory
  survivorInv = ['Wood: ' + survivorInvWood, 'Stone: ' + survivorInvStone, 'Refined Wood: ' + survivorInvRefWood, 'Refined Stone: ' + survivorInvRefStone];
  
  if (woodAxeOwned || stoneAxeOwned || silverAxeOwned || platinumAxeOwned || jaditeAxeOwned || diamondAxeOwned || obsidianAxeOwned)
  {
    axeOwned = true;
  }
  if (woodPickaxeOwned || stonePickaxeOwned || silverPickaxeOwned || platinumPickaxeOwned || jaditePickaxeOwned || diamondPickaxeOwned || obsidianPickaxeOwned)
  {
    pickaxeOwned = true;
  }
  if (woodSwordOwned || stoneSwordOwned || silverSwordOwned || platinumSwordOwned || jaditeSwordOwned || diamondSwordOwned || obsidianSwordOwned)
  {
    swordOwned = true;
  }
  
  //move screen when player moves
  cameraX = -survivor.x + 200;
  cameraY = -survivor.y + 200;
  translate(cameraX, cameraY);
  
  //spawn zombies at night
  if (!isDayTime)
  {
    for (let i = 0; i < numZombies; i++)
    {
      let zombie = zombies[i];
      
      if (zombie.hp <= 0)
      {
        zombie.alive = false;
      }
      else if (zombie.hp < zombie.maxhp && zombie.alive)
      {
        zombie.drawSelf();
        zombie.findTarget();
        zombie.showHP();
      }
      else if (zombie.hp > 0 && zombie.alive)
      {
        zombie.drawSelf();
        zombie.findTarget();
      }
      
      //player attacks zombie
      if (survivor.x > zombie.x + cameraX - survivor.range && survivor.x < zombie.x + (zombie.width/2) + cameraX)
      {
        if (survivor.y > zombie.y + cameraY && survivor.y < zombie.y + zombie.height + cameraY + survivor.range)
        {
          if (survivor.swinging)
          {
            if (facingRight || facingSE || facingUp || facingDown)
            {
              survivor.getMeleeDmg(survivorWeapon);
              zombie.hp -= survivor.meleeDmg;
              if (zombie.ability == 'Maniac')
              {
                zombie.x -= survivor.range + 2;
              }
              else if (zombie.ability != 'Tank')
              {
                zombie.x += survivor.range + 10;
              }
              if (zombie.alive && zombie.hp - survivor.meleeDmg <= 0)
              {
                zombiesKilled += 0.5;
                console.log(zombiesKilled);
              }
            }
            else if (facingNE || facingRight || facingUp || facingDown)
            {
              survivor.getMeleeDmg(survivorWeapon);
              zombie.hp -= survivor.meleeDmg;
              if (zombie.ability == 'Maniac')
              {
                zombie.x -= survivor.range + 2;
              }
              else if (zombie.ability != 'Tank')
              {
                zombie.x += survivor.range + 10;
              }
              if (zombie.alive && zombie.hp - survivor.meleeDmg <= 0)
              {
                zombiesKilled += 0.5;
                console.log(zombiesKilled);
              }
            }
          }
        }
      }
      
      if (survivor.x > zombie.x + (zombie.width/2) + cameraX && survivor.x < zombie.x + zombie.width + cameraX + survivor.range)
    {
      if (survivor.y > zombie.y + cameraY && survivor.y < zombie.y + zombie.height + cameraY + survivor.range)
      {
        if (survivor.swinging)
        {
          if (facingLeft || facingSW || facingUp || facingDown)
          {
            survivor.getMeleeDmg(survivorWeapon);
            zombie.hp -= survivor.meleeDmg;
            if (zombie.ability == 'Maniac')
            {
              zombie.x += survivor.range + 2;
            }
            else if (zombie.ability != 'Tank')
            {
              zombie.x -= survivor.range + 10;
            }
            if (zombie.alive && zombie.hp - survivor.meleeDmg <= 0)
            {
              zombiesKilled += 0.5;
              console.log(zombiesKilled);
            }
          }
          else if (facingNW || facingLeft || facingUp || facingDown)
          {
            survivor.getMeleeDmg(survivorWeapon);
            zombie.hp -= survivor.meleeDmg;
            if (zombie.ability == 'Maniac')
            {
              zombie.x += survivor.range + 2;
            }
            if (zombie.ability != 'Tank')
            {
              zombie.x -= survivor.range + 10;
            }
            if (zombie.alive && zombie.hp - survivor.meleeDmg <= 0)
            {
              zombiesKilled += 0.5;
              console.log(zombiesKilled);
            }
          }
        }
      }
    }
      
      //zombie attacks player
      if (survivor.x + (survivor.width/2) > zombie.x + cameraX && survivor.x + (survivor.width/2) < zombie.x + cameraX + zombie.width)
      {
        if (survivor.y + (survivor.height/2) > zombie.y + cameraY && survivor.y + (survivor.height/2) < zombie.y + cameraY + zombie.width)
        {
          if (zombie.alive)
          {
            zombie.attackRight();
            zombie.attackBottom();
          }
        }
        if (survivor.y - (survivor.height/2) > zombie.y + cameraY && survivor.y - (survivor.height/2) < zombie.y + cameraY + zombie.width)
        {
          if (zombie.alive)
          {
            zombie.attackRight();
            zombie.attackTop();
          }
        }
      }
      if (survivor.x - (survivor.width/2) > zombie.x + cameraX && survivor.x - (survivor.width/2) < zombie.x + cameraX + zombie.width)
      {
        if (survivor.y + (survivor.height/2) > zombie.y + cameraY && survivor.y + (survivor.height/2) < zombie.y + cameraY + zombie.width)
        {
          if (zombie.alive)
          {
            zombie.attackLeft();
            zombie.attackBottom();
          }
        }
        if (survivor.y - (survivor.height/2) > zombie.y + cameraY && survivor.y - (survivor.height/2) < zombie.y + cameraY + zombie.width)
        {
          if (zombie.alive)
          {
            zombie.attackLeft();
            zombie.attackTop();
          }
        }
      }
    }
  }
  
  //spawn trees
  for (let i = 0; i < numTrees; i++)
  {
    let tree = trees[i];
    
    if (!isDayTime)
    {
      tree.nightColor();
    }
    else
    {
      tree.dayColor();
    }
    
    if (tree.hp <= 0 && tree.alive)
    {
      tree.destroy();
      tree.destroyed = true;
      tree.giveWood();
      tree.killedTime = time;
    }
    else if (tree.hp < 100)
    {
      tree.drawSelf();
      tree.showHP();
    }
    else if (tree.hp > 0)
    {
      tree.drawSelf();
    }
    
    if (tree.destroyed == true && tree.killedTime + 600 == time)
    {
      tree.respawn();
      tree.destroyed = false;
      tree.alive = true;
    }
    
    for (let i = 0; i < numCaves; i++)
    {
      let cave = caves[i];
      
      if (cave.x == tree.x && cave.y == tree.y)
      {
        tree.respawn();
      }
    }
    
    if (survivor.x > tree.x + cameraX - survivor.range && survivor.x < tree.x + (tree.width/2) + cameraX)
    {
      if (survivor.y > tree.y + cameraY && survivor.y < tree.y + tree.height + cameraY + survivor.range)
      {
        nearTree = true;
        if (survivor.swinging)
        {
          if (facingNE || facingRight || facingSE || facingUp)
          {
            if (nearTree)
            {
              survivor.getMeleeDmg(survivorWeapon);
              tree.hp -= survivor.treeDmg;
            }
          }
        }
      }
    }
    
    if (survivor.x > tree.x + (tree.width/2) + cameraX && survivor.x < tree.x + tree.width + cameraX + survivor.range)
    {
      if (survivor.y > tree.y + cameraY && survivor.y < tree.y + tree.height + cameraY + survivor.range)
      {
        nearTree = true;
        if (survivor.swinging)
        {
          if (facingNW || facingLeft || facingSW || facingUp)
          {
            if (nearTree)
            {
              survivor.getMeleeDmg(survivorWeapon);
              tree.hp -= survivor.treeDmg;
            }
          }
        }
      }
    }
  }
  
  //spawn caves
  for (let i = 0; i < numCaves; i++)
  {
    let cave = caves[i];
    
    if (!isDayTime)
    {
      cave.nightColor();
    }
    else
    {
      cave.dayColor();
    }
    
    cave.drawSelf();
    
    if (survivor.x > cave.x + cameraX && survivor.x < cave.x + cave.width + cameraX)
    {
      if (survivor.y > cave.y + cameraY && survivor.y < cave.y + cave.height + cameraY)
      {
        inCave = true;
        survivor.y += 10;
      }
    }
  }
  
  //show crafting menu
  if (showingCraft)
  {
    showCraftMenu();
    
    if (craftAvailable)
    {
      if (craftPage == 1)
      {
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft1Y && mouseY < craft1Y + craftHeight)
          {
            if (survivorInvWood >= 20)
            {
              if (!stoneAxeOwned && !woodAxeOwned)
              {
                survivorInvWood -= 20;
                survivorWeapon = 'Wooden Axe';
                woodAxeOwned = true;
                woodAxeActive = true;
                woodSwordActive = false;
                stoneAxeActive = false;
                stoneSwordActive = false;
                stonePickaxeActive = false;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvWood < 20)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft1Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft2Y && mouseY < craft2Y + craftHeight)
          {
            if (survivorInvWood >= 35)
            {
              if (!stoneSwordOwned && !woodSwordOwned)
              {
                survivorInvWood -= 35;
                survivorWeapon = 'Wooden Sword'
                woodSwordOwned = true;
                woodAxeActive = false;
                woodSwordActive = true;
                stoneAxeActive = false;
                stoneSwordActive = false;
                stonePickaxeActive = false;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvWood < 35)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft2Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft3Y && mouseY < craft3Y + craftHeight)
          {
            if (survivorInvWood >= 25)
            {
              if (!stonePickaxeOwned && !woodPickaxeOwned)
              {
                survivorInvWood -= 25;
                survivorWeapon = 'Wooden Pickaxe'
                woodPickaxeOwned = true;
                woodAxeActive = false;
                woodSwordActive = false;
                stoneAxeActive = false;
                stoneSwordActive = false;
                stonePickaxeActive = false;
                woodPickaxeActive = true;
              }
            }
            else if (survivorInvWood < 25)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft3Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
      }
      
      if (craftPage == 2)
      {
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft1Y && mouseY < craft1Y + craftHeight)
          {
            if (survivorInvStone >= 25 && survivorInvWood >= 20)
            {
              if (!stoneAxeOwned)
              {
                survivorInvStone -= 25;
                survivorInvWood -= 20;
                survivorWeapon = 'Stone Axe'
                stoneAxeOwned = true;
                woodAxeOwned = false;
                woodAxeActive = false;
                woodSwordActive = false;
                stoneAxeActive = true;
                stoneSwordActive = false;
                stonePickaxeActive = false;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvStone < 25 || survivorInvWood < 20)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft1Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft2Y && mouseY < craft2Y + craftHeight)
          {
            if (survivorInvStone >= 40 && survivorInvWood >= 10)
            {
              if (!stoneSwordOwned)
              {
                survivorInvStone -= 40;
                survivorInvWood -= 10;
                survivorWeapon = 'Stone Sword'
                stoneSwordOwned = true;
                woodSwordOwned = false;
                woodAxeActive = false;
                woodSwordActive = false;
                stoneAxeActive = false;
                stoneSwordActive = true;
                stonePickaxeActive = false;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvStone < 40 || survivorInvWood < 10)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft2Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft3Y && mouseY < craft3Y + craftHeight)
          {
            if (survivorInvStone >= 30 && survivorInvWood >= 20)
            {
              if (!stonePickaxeOwned)
              {
                survivorInvStone -= 30;
                survivorInvWood -= 20;
                survivorWeapon = 'Stone Pickaxe'
                stonePickaxeOwned = true;
                woodPickaxeOwned = false;
                woodAxeActive = false;
                woodSwordActive = false;
                stoneAxeActive = false;
                stoneSwordActive = false;
                stonePickaxeActive = true;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvStone < 30 || survivorInvWood < 20)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft3Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
      }
      
      if (craftPage == 3)
      {
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft3Y && mouseY < craft3Y + craftHeight)
          {
            if (survivorInvRefWood >= 10 && survivorInvRefStone >= 5)
            {
              if (!templateBaseOwned)
              {
                templateBaseOwned = true;
                survivorInvRefWood -= 10;
                survivorInvRefStone -= 5;
              }
            }
            else if (survivorInvRefWood < 10 || survivorInvRefStone < 5 || templateBaseOwned)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft3Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
      }
    }
  }
  
  push();
  translate(-cameraX, -cameraY);
  
  if (showingInv)
  {
    showResources();
  }
  
  if (isDayTime)
  {
    timeOfDay += 0.05;
    grass = '#7DA56D';
    fill(48, 48, 48, timeOfDay);
    rect(0, 0, width, height);
  }
  else
  {
    timeOfDay = 180;
    grass = '#3C593A';
    fill(48, 48, 48, timeOfDay);
    rect(0, 0, width, height);
  }
  
  if (timeOfDay >= 180 && isDayTime)
  {
    switchTimeOfDay();
    for (let i = 0; i <= level; i++)
    {
      zombies.push(new MeleeEnemy('zombie'));
    }
    for (let i = 0; i < level; i++)
    {
      numZombies += 1;
    }
    for (let i = 0; i < numZombies; i++)
    {
      zombie = zombies[i];
      zombie.setSpawn();
    }
    console.log(level, zombiesKilled, numZombies);
  }
  else if (zombiesKilled == numZombies && !isDayTime)
  {
    switchTimeOfDay();
    console.log(zombiesKilled, numZombies);
    zombiesKilled = 0;
    level += 1;
    timeOfDay = 0;
    
    if (level == 3)
    {
      survivorInvSilver += 4;
    }
    else if (level == 6)
    {
      survivorInvPlatinum += 4;
    }
    else if (level == 9)
    {
      survivorInvJadite += 4;
    }
    else if (level == 12)
    {
      survivorInvDiamond += 4;
    }
    else if (level == 15)
    {
      survivorInvObsidian += 4;
    }
    else if (level > 15)
    {
      survivorInvSilver += 1;
      survivorInvPlatinum += 1;
      survivorInvJadite += 1;
      survivorInvDiamond += 1;
      survivorInvObsidian += 1;
    }
  }
  
  //template crafting
  if (templateBaseOwned)
  {
    showingTemplateIcon = true;
  }
  
  if (showingTemplateIcon)
  {
    push();
    fill(255);
    rect(width-60, height-50, 40, 40, 10);
    pop();
  }
  
  if (showingTempCraft)
  {
    push();
    rectMode(CENTER);
    fill(225, 225, 225, 80);
    rect(width/2, height/2, 600, 350);
    
    rectMode(CORNER);
    
    fill(255);
    rect(90, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Refined Wood', 95, 115);
    
    textSize(20);
    text(survivorInvRefWood, 135, 145);
    
    fill(255);
    rect(195, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Refined Stone', 200, 115);
    
    textSize(20);
    text(survivorInvRefStone, 240, 145);
    
    fill(255);
    rect(300, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Rope', 330, 115);
    
    textSize(20);
    text(survivorInvRope, 345, 145);
    
    fill(255);
    rect(405, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Herbs', 435, 115);
    
    textSize(20);
    text(survivorInvHerbs, 450, 145);
    
    fill(255);
    rect(510, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Cloth', 540, 115);
    
    textSize(20);
    text(survivorInvCloth, 555, 145);
    
    fill(255);
    rect(90, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Axe', 127, 175);
    
    fill(255);
    rect(195, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Pickaxe', 220, 175);
    
    fill(255);
    rect(300, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Sword', 330, 175);
    
    fill(255);
    rect(405, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Long Handle', 415, 175);
    
    textSize(20);
    text(survivorInvLongHandle, 450, 205);
    
    fill(255);
    rect(510, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Short Handle', 520, 175);
    
    textSize(20);
    text(survivorInvShortHandle, 555, 205);
    
    fill(255);
    rect(90, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Silver', 121, 235);
    
    textSize(20);
    text(survivorInvSilver, 135, 265);
    
    fill(255);
    rect(195, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Platinum', 217, 235);
    
    textSize(20);
    text(survivorInvPlatinum, 240, 265);
    
    fill(255);
    rect(300, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Jadite', 330, 235);
    
    textSize(20);
    text(survivorInvJadite, 345, 265);
    
    fill(255);
    rect(405, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Diamond', 427, 235);
    
    textSize(20);
    text(survivorInvDiamond, 450, 265);
    
    fill(255);
    rect(510, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Obsidian', 530, 235);
    
    textSize(20);
    text(survivorInvObsidian, 555, 265);
    
    fill(255);
    rect(100, 325, 100, 30);
    rect(270, 325, 100, 30);
    rect(480, 325, 120, 30);
    fill(0);
    text('+', 230, 347);
    text('=', 420, 347);
    
    textSize(14);
    text(tempSlot1, tempSlot1X, 345);
    text(tempSlot2, tempSlot2X, 345);
    
    textSize(tempTextSize);
    text(tempProduct, tempProductX, 345)
    
    if (tempOccupiedSlot1 && tempOccupiedSlot2)
    {
      //short handle
      if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
      {
        if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
        {
          tempProduct = 'Short Handle';
          tempProductX = 498;
          tempTextSize = 14;
        }
      }
      
      //long handle
      if (tempSlot1 == 'Refined Stone' || tempSlot2 == 'Refined Stone')
      {
        if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
        {
          tempProduct = 'Long Handle';
          tempProductX = 500;
          tempTextSize = 14;
        }
      }
      
      //rope
      if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
      {
        if (tempSlot1 == 'Sword' || tempSlot2 == 'Sword')
        {
          tempProduct = 'Rope';
          tempProductX = 523;
          tempTextSize = 14;
        }
      }
      
      //cloth
      if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Cloth';
          tempProductX = 523;
          tempTextSize = 14;
        }
      }
      
      //herbs
      if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
      {
        if (tempSlot1 == 'Axe' || tempSlot2 == 'Axe')
        {
          tempProduct = 'Herbs';
          tempProductX = 523;
          tempTextSize = 14;
        }
      }
      
      //bandage
      if (tempSlot1 == 'Cloth' || tempSlot2 == 'Cloth')
      {
        if (tempSlot1 == 'Herbs' || tempSlot2 == 'Herbs')
        {
          tempProduct = 'Bandage';
          tempProductX = 512;
          tempTextSize = 14;
        }
      }
      
      //silver axe
      if (tempSlot1 == 'Silver' || tempSlot2 == 'Silver')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Silver Axe';
          tempProductX = 510;
          tempTextSize = 14;
        }
      }
      
      //silver sword
      if (tempSlot1 == 'Silver' || tempSlot2 == 'Silver')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Silver Sword';
          tempProductX = 502;
          tempTextSize = 14;
        }
      }
      
      //silver pickaxe
      if (tempSlot1 == 'Silver' || tempSlot2 == 'Silver')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Silver Pickaxe';
          tempProductX = 497;
          tempTextSize = 14;
        }
      }
      
      //platinum axe
      if (tempSlot1 == 'Platinum' || tempSlot2 == 'Platinum')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Platinum Axe';
          tempProductX = 498;
          tempTextSize = 14;
        }
      }
      
      //platinum sword
      if (tempSlot1 == 'Platinum' || tempSlot2 == 'Platinum')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Platinum Sword';
          tempProductX = 492;
          tempTextSize = 14;
        }
      }
      
      //platinum pickaxe
      if (tempSlot1 == 'Platinum' || tempSlot2 == 'Platinum')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Platinum Pickaxe';
          tempProductX = 487;
          tempTextSize = 14;
        }
      }
      
      //jadite axe
      if (tempSlot1 == 'Jadite' || tempSlot2 == 'Jadite')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Jadite Axe';
          tempProductX = 507;
          tempTextSize = 14;
        }
      }
      
      //jadite sword
      if (tempSlot1 == 'Jadite' || tempSlot2 == 'Jadite')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Jadite Sword';
          tempProductX = 500;
          tempTextSize = 14;
        }
      }
      
      //jadite pickaxe
      if (tempSlot1 == 'Jadite' || tempSlot2 == 'Jadite')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Jadite Pickaxe';
          tempProductX = 495;
          tempTextSize = 14;
        }
      }
      
      //diamond axe
      if (tempSlot1 == 'Diamond' || tempSlot2 == 'Diamond')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Diamond Axe';
          tempProductX = 497;
          tempTextSize = 14;
        }
      }
      
      //diamond sword
      if (tempSlot1 == 'Diamond' || tempSlot2 == 'Diamond')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Diamond Sword';
          tempProductX = 490;
          tempTextSize = 14;
        }
      }
      
      //diamond pickaxe
      if (tempSlot1 == 'Diamond' || tempSlot2 == 'Diamond')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Diamond Pickaxe';
          tempProductX = 485;
          tempTextSize = 14;
        }
      }
      
      //obsidian axe
      if (tempSlot1 == 'Obsidian' || tempSlot2 == 'Obsidian')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Obsidian Axe';
          tempProductX = 499;
          tempTextSize = 14;
        }
      }
      
      //obsidian sword
      if (tempSlot1 == 'Obsidian' || tempSlot2 == 'Obsidian')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Obsidian Sword';
          tempProductX = 490;
          tempTextSize = 14;
        }
      }
      
      //obsidian pickaxe
      if (tempSlot1 == 'Obsidian' || tempSlot2 == 'Obsidian')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Obsidian Pickaxe';
          tempProductX = 485;
          tempTextSize = 14;
        }
      }
      
      //armor
      if (tempSlot1 == 'Silver' || tempSlot2 == 'Silver')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Silver Chestplate';
          tempProductX = 487;
          tempTextSize = 14;
        }
      }
      if (tempSlot1 == 'Platinum' || tempSlot2 == 'Platinum')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Platinum Chestplate';
          tempProductX = 481;
          tempTextSize = 13;
        }
      }
      if (tempSlot1 == 'Jadite' || tempSlot2 == 'Jadite')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Jadite Chestplate';
          tempProductX = 485;
          tempTextSize = 14;
        }
      }
      if (tempSlot1 == 'Diamond' || tempSlot2 == 'Diamond')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Diamond Chestplate';
          tempProductX = 481;
          tempTextSize = 13;
        }
      }
      if (tempSlot1 == 'Obsidian' || tempSlot2 == 'Obsidian')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Obsidian Chestplate';
          tempProductX = 481;
          tempTextSize = 13;
        }
      }
    }
    else
    {
      tempProduct = '';
    }
    pop();
  }
  
  noStroke();
  
  fill(255, 255, 255, 150);
  rect(40, height-30, 170, 15);
  fill(0);
  text('Weapon: ' + survivorWeapon, 50, height-18);
  
  noStroke();
  
  if (armorHP > 0)
  {
    fill(86, 145, 255);
    rect(30, height-65, armorHP*2, 10);
  }
  
  if (survivorHP > 50)
  {
    fill(87, 250, 90);
  }
  else if (survivorHP < 50 && survivorHP > 20)
  {
    fill(255, 241, 69);
  }
  else
  {
    fill(255, 71, 71);
  }
  rect(30, height-50, survivorHP*2, 20);
  
  stroke(0);
  noFill();
  rect(30, height-50, 200, 20);
  
  fill(255);
  rect(250, height-50, 35, 35, 10); //hitbox
  fill(235, 219, 196);
  noStroke();
  rect(255, height-45, 25, 25, 5);
  fill(147, 255, 100);
  rect(266, height-40, 5, 15);
  rect(261, height-35, 15, 5);
  
  fill(255);
  rect(276, height-28, 15, 15, 5);
  
  fill(0);
  textStyle(BOLD);
  textSize(15);
  text(survivorInvBandage, 280, height-15);
  pop();
  
  if (craftPage < 1)
  {
    craftPage = 1;
  }
  if (craftPage > 3)
  {
    craftPage = 3;
  }
  if (craftPage > level)
  {
    craftPage = level;
  }
  
  time += 1;
}

function caveGame()
{
  background(caveGround);
  displayPlayer();
  survivor.getRange(survivorWeapon);
  
  if (showingInv)
  {
    showResources();
  }
  
  //block players from going off screen
  if (survivor.x < 20)
  {
    survivor.x = 20;
  }
  if (survivor.x > width - 20)
  {
    survivor.x = width - 20;
  }
  if (survivor.y < 20)
  {
    survivor.y = 20;
  }
  if (survivor.y > height - 20)
  {
    survivor.y = height - 20;
  }
  
  //update player inventory
  survivorInv = ['Wood: ' + survivorInvWood, 'Stone: ' + survivorInvStone, 'Refined Wood: ' + survivorInvRefWood, 'Refined Stone: ' + survivorInvRefStone];
  
  //move screen when player moves
  cameraX = -survivor.x + 200;
  cameraY = -survivor.y + 200;
  translate(cameraX, cameraY);
  
  //spawn rocks
  for (let i = 0; i < numRocks; i++)
  {
    let rock = rocks[i];
    if (rock.hp <= 0 && rock.alive)
    {
      rock.destroy();
      rock.destroyed = true;
      rock.killedTime = time;
      if (survivorWeapon == 'Wooden Pickaxe' || survivorWeapon == 'Stone Pickaxe' || survivorWeapon == 'Silver Pickaxe' || survivorWeapon == 'Platinum Pickaxe' || survivorWeapon == 'JaditePickaxe' || survivorWeapon == 'Diamond Pickaxe' || survivorWeapon == 'Obsidian Pickaxe')
      {
        rock.giveStone();
      }
    }
    else if (rock.hp < 100)
    {
      rock.drawSelf();
      rock.showHP();
    }
    else if (rock.hp > 0)
    {
      rock.drawSelf();
    }
    
    if (rock.destroyed == true && rock.killedTime + 600 == time)
    {
      rock.respawn();
      rock.destroyed = false;
      rock.alive = true;
    }
    
    for (let i = 0; i < numCaves; i++)
    {
      let cave = caves[i];
      
      if (cave.x == rock.x && cave.y == rock.y)
      {
        rock.respawn();
      }
    }
    
    if (survivor.x > rock.x + cameraX - survivor.range && survivor.x < rock.x + (rock.width/2) + cameraX)
    {
      if (survivor.y > rock.y + cameraY && survivor.y < rock.y + rock.height + cameraY + survivor.range)
      {
        nearRock = true;
        if (survivor.swinging)
        {
          if (facingNE || facingRight || facingSE || facingUp)
          {
            if (nearRock)
            {
              survivor.getMeleeDmg(survivorWeapon);
              rock.hp -= survivor.rockDmg;
            }
          }
        }
      }
    }
    
    if (survivor.x > rock.x + (rock.width/2) + cameraX && survivor.x < rock.x + rock.width + cameraX + survivor.range)
    {
      if (survivor.y > rock.y + cameraY && survivor.y < rock.y + rock.height + cameraY + survivor.range)
      {
        nearRock = true;
        if (survivor.swinging)
        {
          if (facingNW || facingLeft || facingSW || facingUp)
          {
            if (nearRock)
            {
              survivor.getMeleeDmg(survivorWeapon);
              rock.hp -= survivor.rockDmg;
            }
          }
        }
      }
    }
  }
  
  //spawn caves
  for (let i = 0; i < numCaves; i++)
  {
    let cave = caves[i];
    cave.drawExit();
    
    if (survivor.x > cave.x + cameraX && survivor.x < cave.x + cave.width + cameraX)
    {
      if (survivor.y > cave.y + cameraY && survivor.y < cave.y + cave.height + cameraY)
      {
        inCave = false;
        survivor.y += 10;
      }
    }
  }
  
  //spawn exit
  freedom.drawSelf();
  
  //show crafting menu
  if (showingCraft)
  {
    showCraftMenu();
    
    if (craftAvailable)
    {
      if (craftPage == 1)
      {
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft1Y && mouseY < craft1Y + craftHeight)
          {
            if (survivorInvWood >= 20)
            {
              if (!stoneAxeOwned && !woodAxeOwned)
              {
                survivorInvWood -= 20;
                survivorWeapon = 'Wooden Axe';
                woodAxeOwned = true;
                woodAxeActive = true;
                woodSwordActive = false;
                stoneAxeActive = false;
                stoneSwordActive = false;
                stonePickaxeActive = false;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvWood < 20)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft1Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft2Y && mouseY < craft2Y + craftHeight)
          {
            if (survivorInvWood >= 35)
            {
              if (!stoneSwordOwned && !woodSwordOwned)
              {
                survivorInvWood -= 35;
                survivorWeapon = 'Wooden Sword'
                woodSwordOwned = true;
                woodAxeActive = false;
                woodSwordActive = true;
                stoneAxeActive = false;
                stoneSwordActive = false;
                stonePickaxeActive = false;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvWood < 35)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft2Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft3Y && mouseY < craft3Y + craftHeight)
          {
            if (survivorInvWood >= 25)
            {
              if (!stonePickaxeOwned && !woodPickaxeOwned)
              {
                survivorInvWood -= 25;
                survivorWeapon = 'Wooden Pickaxe'
                woodPickaxeOwned = true;
                woodAxeActive = false;
                woodSwordActive = false;
                stoneAxeActive = false;
                stoneSwordActive = false;
                stonePickaxeActive = false;
                woodPickaxeActive = true;
              }
            }
            else if (survivorInvWood < 25)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft3Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
      }
      
      if (craftPage == 2)
      {
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft1Y && mouseY < craft1Y + craftHeight)
          {
            if (survivorInvStone >= 25 && survivorInvWood >= 20)
            {
              if (!stoneAxeOwned)
              {
                survivorInvStone -= 25;
                survivorInvWood -= 20;
                survivorWeapon = 'Stone Axe'
                stoneAxeOwned = true;
                woodAxeOwned = false;
                woodAxeActive = false;
                woodSwordActive = false;
                stoneAxeActive = true;
                stoneSwordActive = false;
                stonePickaxeActive = false;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvStone < 25 || survivorInvWood < 20)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft1Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft2Y && mouseY < craft2Y + craftHeight)
          {
            if (survivorInvStone >= 40 && survivorInvWood >= 10)
            {
              if (!stoneSwordOwned)
              {
                survivorInvStone -= 40;
                survivorInvWood -= 10;
                survivorWeapon = 'Stone Sword'
                stoneSwordOwned = true;
                woodSwordOwned = false;
                woodAxeActive = false;
                woodSwordActive = false;
                stoneAxeActive = false;
                stoneSwordActive = true;
                stonePickaxeActive = false;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvStone < 40 || survivorInvWood < 10)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft2Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft3Y && mouseY < craft3Y + craftHeight)
          {
            if (survivorInvStone >= 30 && survivorInvWood >= 20)
            {
              if (!stonePickaxeOwned)
              {
                survivorInvStone -= 30;
                survivorInvWood -= 20;
                survivorWeapon = 'Stone Pickaxe'
                stonePickaxeOwned = true;
                woodPickaxeOwned = false;
                woodAxeActive = false;
                woodSwordActive = false;
                stoneAxeActive = false;
                stoneSwordActive = false;
                stonePickaxeActive = true;
                woodPickaxeActive = false;
              }
            }
            else if (survivorInvStone < 30 || survivorInvWood < 20)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft3Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
      }
      
      if (craftPage == 3)
      {
        if (mouseX > craftX && mouseX < craftX + craftWidth)
        {
          if (mouseY > craft3Y && mouseY < craft3Y + craftHeight)
          {
            if (survivorInvRefWood >= 10 && survivorInvRefStone >= 5)
            {
              if (!templateBaseOwned)
              {
                templateBaseOwned = true;
                survivorInvRefWood -= 10;
                survivorInvRefStone -= 5;
              }
            }
            else if (survivorInvRefWood < 10 || survivorInvRefStone < 5 || templateBaseOwned)
            {
              push();
              translate(-cameraX, -cameraY);
              fill(140, 140, 140, 70);
              noStroke();
              rect(craftX, craft3Y, craftWidth, craftHeight);
              pop();
            }
          }
        }
      }
    }
  }
  
  push();
  translate(-cameraX, -cameraY);
  
  if (showingInv)
  {
    showResources();
  }
  
  //template crafting
  if (templateBaseOwned)
  {
    showingTemplateIcon = true;
  }
  
  if (showingTemplateIcon)
  {
    push();
    fill(255);
    rect(width-60, height-50, 40, 40, 10);
    pop();
  }
  
  if (showingTempCraft)
  {
    push();
    rectMode(CENTER);
    fill(225, 225, 225, 80);
    rect(width/2, height/2, 600, 350);
    
    rectMode(CORNER);
    
    fill(255);
    rect(90, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Refined Wood', 95, 115);
    
    textSize(20);
    text(survivorInvRefWood, 135, 145);
    
    fill(255);
    rect(195, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Refined Stone', 200, 115);
    
    textSize(20);
    text(survivorInvRefStone, 240, 145);
    
    fill(255);
    rect(300, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Rope', 330, 115);
    
    textSize(20);
    text(survivorInvRope, 345, 145);
    
    fill(255);
    rect(405, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Herbs', 435, 115);
    
    textSize(20);
    text(survivorInvHerbs, 450, 145);
    
    fill(255);
    rect(510, 100, 100, 20);
    fill(0);
    textSize(14);
    text('Cloth', 540, 115);
    
    textSize(20);
    text(survivorInvCloth, 555, 145);
    
    fill(255);
    rect(90, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Axe', 127, 175);
    
    fill(255);
    rect(195, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Pickaxe', 220, 175);
    
    fill(255);
    rect(300, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Sword', 330, 175);
    
    fill(255);
    rect(405, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Long Handle', 415, 175);
    
    textSize(20);
    text(survivorInvLongHandle, 450, 205);
    
    fill(255);
    rect(510, 160, 100, 20);
    fill(0);
    textSize(14);
    text('Short Handle', 520, 175);
    
    textSize(20);
    text(survivorInvShortHandle, 555, 205);
    
    fill(255);
    rect(90, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Silver', 121, 235);
    
    textSize(20);
    text(survivorInvSilver, 135, 265);
    
    fill(255);
    rect(195, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Platinum', 217, 235);
    
    textSize(20);
    text(survivorInvPlatinum, 240, 265);
    
    fill(255);
    rect(300, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Jadite', 330, 235);
    
    textSize(20);
    text(survivorInvJadite, 345, 265);
    
    fill(255);
    rect(405, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Diamond', 427, 235);
    
    textSize(20);
    text(survivorInvDiamond, 450, 265);
    
    fill(255);
    rect(510, 220, 100, 20);
    fill(0);
    textSize(14);
    text('Obsidian', 530, 235);
    
    textSize(20);
    text(survivorInvObsidian, 555, 265);
    
    fill(255);
    rect(100, 325, 100, 30);
    rect(270, 325, 100, 30);
    rect(480, 325, 120, 30);
    fill(0);
    text('+', 230, 347);
    text('=', 420, 347);
    
    textSize(14);
    text(tempSlot1, tempSlot1X, 345);
    text(tempSlot2, tempSlot2X, 345);
    
    text(tempProduct, tempProductX, 345)
    
    if (tempOccupiedSlot1 && tempOccupiedSlot2)
    {
      //short handle
      if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
      {
        if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
        {
          tempProduct = 'Short Handle';
          tempProductX = 498;
        }
      }
      
      //long handle
      if (tempSlot1 == 'Refined Stone' || tempSlot2 == 'Refined Stone')
      {
        if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
        {
          tempProduct = 'Long Handle';
          tempProductX = 500;
        }
      }
      
      //rope
      if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
      {
        if (tempSlot1 == 'Sword' || tempSlot2 == 'Sword')
        {
          tempProduct = 'Rope';
          tempProductX = 523;
        }
      }
      
      //cloth
      if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Cloth';
          tempProductX = 523;
        }
      }
      
      //herbs
      if (tempSlot1 == 'Refined Wood' || tempSlot2 == 'Refined Wood')
      {
        if (tempSlot1 == 'Axe' || tempSlot2 == 'Axe')
        {
          tempProduct = 'Herbs';
          tempProductX = 523;
        }
      }
      
      //bandage
      if (tempSlot1 == 'Cloth' || tempSlot2 == 'Cloth')
      {
        if (tempSlot1 == 'Herbs' || tempSlot2 == 'Herbs')
        {
          tempProduct = 'Bandage';
          tempProductX = 512;
        }
      }
      
      //silver axe
      if (tempSlot1 == 'Silver' || tempSlot2 == 'Silver')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Silver Axe';
          tempProductX = 510;
          tempTextSize = 14;
        }
      }
      
      //silver sword
      if (tempSlot1 == 'Silver' || tempSlot2 == 'Silver')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Silver Sword';
          tempProductX = 502;
          tempTextSize = 14;
        }
      }
      
      //silver pickaxe
      if (tempSlot1 == 'Silver' || tempSlot2 == 'Silver')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Silver Pickaxe';
          tempProductX = 497;
          tempTextSize = 14;
        }
      }
      
      //platinum axe
      if (tempSlot1 == 'Platinum' || tempSlot2 == 'Platinum')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Platinum Axe';
          tempProductX = 498;
          tempTextSize = 14;
        }
      }
      
      //platinum sword
      if (tempSlot1 == 'Platinum' || tempSlot2 == 'Platinum')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Platinum Sword';
          tempProductX = 492;
          tempTextSize = 14;
        }
      }
      
      //platinum pickaxe
      if (tempSlot1 == 'Platinum' || tempSlot2 == 'Platinum')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Platinum Pickaxe';
          tempProductX = 487;
          tempTextSize = 14;
        }
      }
      
      //jadite axe
      if (tempSlot1 == 'Jadite' || tempSlot2 == 'Jadite')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Jadite Axe';
          tempProductX = 507;
          tempTextSize = 14;
        }
      }
      
      //jadite sword
      if (tempSlot1 == 'Jadite' || tempSlot2 == 'Jadite')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Jadite Sword';
          tempProductX = 500;
          tempTextSize = 14;
        }
      }
      
      //jadite pickaxe
      if (tempSlot1 == 'Jadite' || tempSlot2 == 'Jadite')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Jadite Pickaxe';
          tempProductX = 495;
          tempTextSize = 14;
        }
      }
      
      //diamond axe
      if (tempSlot1 == 'Diamond' || tempSlot2 == 'Diamond')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Diamond Axe';
          tempProductX = 497;
          tempTextSize = 14;
        }
      }
      
      //diamond sword
      if (tempSlot1 == 'Diamond' || tempSlot2 == 'Diamond')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Diamond Sword';
          tempProductX = 490;
          tempTextSize = 14;
        }
      }
      
      //diamond pickaxe
      if (tempSlot1 == 'Diamond' || tempSlot2 == 'Diamond')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Diamond Pickaxe';
          tempProductX = 485;
          tempTextSize = 14;
        }
      }
      
      //obsidian axe
      if (tempSlot1 == 'Obsidian' || tempSlot2 == 'Obsidian')
      {
        if (tempSlot1 == 'Long Handle' || tempSlot2 == 'Long Handle')
        {
          tempProduct = 'Obsidian Axe';
          tempProductX = 499;
          tempTextSize = 14;
        }
      }
      
      //obsidian sword
      if (tempSlot1 == 'Obsidian' || tempSlot2 == 'Obsidian')
      {
        if (tempSlot1 == 'Short Handle' || tempSlot2 == 'Short Handle')
        {
          tempProduct = 'Obsidian Sword';
          tempProductX = 490;
          tempTextSize = 14;
        }
      }
      
      //obsidian pickaxe
      if (tempSlot1 == 'Obsidian' || tempSlot2 == 'Obsidian')
      {
        if (tempSlot1 == 'Pickaxe' || tempSlot2 == 'Pickaxe')
        {
          tempProduct = 'Obsidian Pickaxe';
          tempProductX = 485;
          tempTextSize = 14;
        }
      }
      
      //armor
      if (tempSlot1 == 'Silver' || tempSlot2 == 'Silver')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Silver Chestplate';
          tempProductX = 487;
          tempTextSize = 14;
        }
      }
      if (tempSlot1 == 'Platinum' || tempSlot2 == 'Platinum')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Platinum Chestplate';
          tempProductX = 481;
          tempTextSize = 13;
        }
      }
      if (tempSlot1 == 'Jadite' || tempSlot2 == 'Jadite')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Jadite Chestplate';
          tempProductX = 485;
          tempTextSize = 14;
        }
      }
      if (tempSlot1 == 'Diamond' || tempSlot2 == 'Diamond')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Diamond Chestplate';
          tempProductX = 481;
          tempTextSize = 13;
        }
      }
      if (tempSlot1 == 'Obsidian' || tempSlot2 == 'Obsidian')
      {
        if (tempSlot1 == 'Rope' || tempSlot2 == 'Rope')
        {
          tempProduct = 'Obsidian Chestplate';
          tempProductX = 481;
          tempTextSize = 13;
        }
      }
    }
    else
    {
      tempProduct = '';
    }
    pop();
  }
  
  noStroke();
  
  fill(255, 255, 255, 150);
  rect(40, height-30, 170, 15);
  fill(0);
  text('Weapon: ' + survivorWeapon, 50, height-18);
  
  noStroke();
  
  if (armorHP > 0)
  {
    fill(86, 145, 255);
    rect(30, height-65, armorHP*2, 10);
  }
  
  if (survivorHP > 50)
  {
    fill(87, 250, 90);
  }
  else if (survivorHP < 50 && survivorHP > 20)
  {
    fill(255, 241, 69);
  }
  else
  {
    fill(255, 71, 71);
  }
  rect(30, height-50, survivorHP*2, 20);
  
  stroke(0);
  noFill();
  rect(30, height-50, 200, 20);
  
  fill(255);
  rect(250, height-50, 35, 35, 10); //hitbox
  fill(235, 219, 196);
  noStroke();
  rect(255, height-45, 25, 25, 5);
  fill(147, 255, 100);
  rect(266, height-40, 5, 15);
  rect(261, height-35, 15, 5);
  
  fill(255);
  rect(276, height-28, 15, 15, 5);
  
  fill(0);
  textStyle(BOLD);
  textSize(15);
  text(survivorInvBandage, 280, height-15);
  pop();             
  
  if (craftPage < 1)
  {
    craftPage = 1;
  }
  if (craftPage > level)
  {
    craftPage = level;
  }
  
  time += 1;
}

function switchTimeOfDay()
{
  if (isDayTime)
  {
    isDayTime = false;
  }
  else
  {
    isDayTime = true;
  }
}

function showCraftMenu()
{
  push();
  translate(-cameraX, -cameraY);
  noStroke();
  fill(155, 155, 155, 80)
  rect(50, 50, 300, 170);
  
  stroke(0);
  fill(255);
  rect(craftX, craft1Y, craftWidth, craftHeight);
  rect(craftX, craft2Y, craftWidth, craftHeight);
  rect(craftX, craft3Y, craftWidth, craftHeight);
  
  if (craftPage == 1)
  {
    textAlign(CENTER);
    textSize(15);
    fill(0);
    text('Wooden Axe', 110, 90);
    text('Wooden Sword', 120, 130);
    text('Wooden Pickaxe', 125, 170);
    
    textStyle(ITALIC);
    textSize(13);
    fill(140);
    text('Requires: x20 Wood', 270, 90);
    text('Requires: x35 Wood', 270, 130);
    text('Requires: x25 Wood', 270, 170);
    
    fill(255);
    rect(craftNextX, craftButtonY, 30, 20, 5);
    rect(craftBackX, craftButtonY, 30, 20, 5);
    
    fill(0);
    text('>', craftNextX + 16, craftButtonY + 14);
    text('<', craftBackX + 14, craftButtonY + 14);
  }
  else if (craftPage == 2)
  {
    textAlign(CENTER);
    textSize(15);
    fill(0);
    text('Stone Axe', 103, 90);
    text('Stone Sword', 111, 130);
    text('Stone Pickaxe', 115, 170);
    
    textStyle(ITALIC);
    textSize(11);
    fill(140);
    text('Requires: x25 Stone x20 Wood', 253, 90);
    text('Requires: x40 Stone x10 Wood', 253, 130);
    text('Requires: x30 Stone x20 Wood', 253, 170);
    
    fill(255);
    rect(craftNextX, craftButtonY, 30, 20, 5);
    rect(craftBackX, craftButtonY, 30, 20, 5);
    
    fill(0);
    text('>', craftNextX + 16, craftButtonY + 14);
    text('<', craftBackX + 14, craftButtonY + 14);
  }
  else if (craftPage == 3)
  {
    textAlign(CENTER);
    textSize(15);
    fill(0);
    text('Refined Wood', 115, 90);
    text('Refined Stone', 115, 130);
    text('Template Base', 116, 170);
    
    textStyle(ITALIC);
    textSize(12);
    fill(140);
    text('Requires: Stone Axe x5 Wood', 253, 90);
    
    textSize(11);
    text('Requires: Stone Pickaxe x5 Stone', 253, 130);
    
    text('Requires: x10 Refined Wood', 253, 163);
    text('x5 Refined Stone', 250, 176);
    
    fill(255);
    rect(craftNextX, craftButtonY, 30, 20, 5);
    rect(craftBackX, craftButtonY, 30, 20, 5);
    
    fill(0);
    text('>', craftNextX + 16, craftButtonY + 14);
    text('<', craftBackX + 14, craftButtonY + 14);
  }
  pop();
}

function showResources()
{
  push();
  noStroke();
  fill(225, 225, 225, 80);
  rect(width-230, 30, 200, 300);
  
  textAlign(LEFT);
  textSize(20);
  fill(0);
  if (level >= 1)
  {
    text(survivorInv[0], width-220, 60);
    text(survivorInv[1], width-220, 80);
  }
  if (level >= 3)
  {
    text(survivorInv[2], width-220, 100);
    text(survivorInv[3], width-220, 120);
  }
  pop();
}

function displayPlayer() 
{
  survivorFacing = new PlayerFacingDirection(survivor.x, survivor.y);
  directionValue = Math.atan2(mouseY - survivor.y, mouseX - survivor.x);
  
  //show character
  survivor.drawSelf();
  survivorFacing.drawSelf();
  
  //update movement
  if (movingUp)
  {
    survivor.moveUp();
  }
  if (movingDown)
  {
    survivor.moveDown();
  }
  if (movingLeft)
  {
    survivor.moveLeft();
  }
  if (movingRight)
  {
    survivor.moveRight();
  }
  
  //update direction
  if (round(directionValue) >= -1 && round(directionValue) <= -1)
  {
    facingUp = true;
    facingDown = false;
    facingRight = false;
    facingLeft = false;
    facingSW = false;
    facingSE = false;
    facingNW = false;
    facingNE = false;
  }
  if (directionValue > -1 && directionValue < 0)
  {
    facingNE = true;
    facingUp = false;
    facingRight = false;
    facingSW = false;
    facingSE = false;
    facingNW = false;
  }
  if (round(directionValue) == 0)
  {
    facingRight = true;
    facingLeft = false;
    facingSE = false;
    facingSW = false;
    facingNW = false;
    facingNE = false
  }
  if (directionValue > -1 && directionValue < -3)
  {
    facingNW = true;
    facingUp = false;
    facingLeft = false;
    facingSE = false;
    facingSW = false;
    facingNW = false;
  }
  if (round(directionValue) == -3)
  {
    facingLeft = true;
    facingRight = false;
    facingSE = false;
    facingSW = false;
    facingNW = false;
    facingNE = false
  }
  if (directionValue < 1 && directionValue > 3)
  {
    facingSW = true;
    facingDown = false;
    facingLeft = false;
    facingNE = false;
    facingNW = false;
    facingSE = false;
  }
  if (directionValue > 0 && directionValue < 1)
  {
    facingSE = true;
    facingDown = false;
    facingRight = false;
    facingNW = false;
    facingNE = false;
    facingSW = false;
  }
  if (round(directionValue) >= 1 && round(directionValue) <= 1)
  {
    facingDown = true;
    facingUp = false;
    facingRight = false;
    facingLeft = false;
    facingSW = false;
    facingSE = false;
    facingNW = false;
    facingNE = false;
  }
}

function mouseClicked()
{
  if (survivorInvBandage > 0)
  {
    if (mouseX > 250 && mouseX < 285)
    {
      if (mouseY > 450 && mouseY < 485)
      {
        if (survivorHP < 100 && survivorHP + 10 > 100)
        {
          survivorInvBandage -= 1;
          survivorHP = 100;
        }
        else if (survivorHP < 100)
        {
          survivorInvBandage -= 1;
          survivorHP += 10;
        }
      }
    }
  }
  if (showingTempCraft)
  {
    if (tempOccupiedSlot1 && tempOccupiedSlot2)
    {
      if (mouseX > 480 && mouseX < 600)
      {
        if (mouseY > 325 && mouseY < 355)
        {
          if (tempProduct == 'Silver Chestplate')
          {
            if (activeChestplate != 'Platinum Chestplate' || activeChestplate != 'Jadite Chestplate' || activeChestplate != 'Diamond Chestplate' || activeChestplate != 'Obsidian Chestplate')
            {
              activeChestplate = 'Silver Chestplate';
              armorHP = 20;
              tempSlot1 = '';
              tempSlot2 = '';
              tempProduct = '';
              tempOccupiedSlot1 = false;
              tempOccupiedSlot2 = false;
            }
          }
          if (tempProduct == 'Platinum Chestplate')
          {
            if (activeChestplate != 'Jadite Chestplate' || activeChestplate != 'Diamond Chestplate' || activeChestplate != 'Obsidian Chestplate')
            {
              activeChestplate = 'Platinum Chestplate';
              armorHP = 40;
              tempSlot1 = '';
              tempSlot2 = '';
              tempProduct = '';
              tempOccupiedSlot1 = false;
              tempOccupiedSlot2 = false;
            }
          }
          if (tempProduct == 'Jadite Chestplate')
          {
            if (activeChestplate != 'Diamond Chestplate' || activeChestplate != 'Obsidian Chestplate')
            {
              activeChestplate = 'Jadite Chestplate';
              armorHP = 60;
              tempSlot1 = '';
              tempSlot2 = '';
              tempProduct = '';
              tempOccupiedSlot1 = false;
              tempOccupiedSlot2 = false;
            }
          }
          if (tempProduct == 'Diamond Chestplate')
          {
            if (activeChestplate != 'Obsidian Chestplate')
            {
              activeChestplate = 'Diamond Chestplate';
              armorHP = 80;
              tempSlot1 = '';
              tempSlot2 = '';
              tempProduct = '';
              tempOccupiedSlot1 = false;
              tempOccupiedSlot2 = false;
            }
          }
          if (tempProduct == 'Obsidian Chestplate')
          {
            activeChestplate = 'Obsidian Chestplate';
            armorHP = 100;
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Short Handle')
          {
            survivorInvShortHandle += 1;
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Long Handle')
          {
            survivorInvLongHandle += 1;
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Rope')
          {
            survivorInvRope += 1;
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Cloth')
          {
            survivorInvCloth += 1;
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Herbs')
          {
            survivorInvHerbs += 1;
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Bandage')
          {
            survivorInvBandage += 1;
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Silver Axe')
          {
            if (!silverAxeOwned && (!platinumAxeOwned || !jaditeAxeOwned || !diamondAxeOwned || !obsidianAxeOwned))
            {
              survivorWeapon = 'Silver Axe';
              silverAxeOwned = true;
              silverAxeActive = true;
              stoneAxeOwned = false;
              stoneAxeActive = false;
              stoneSwordActive = false;
              stonePickaxeActive = false;
              silverSwordActive = false;
              silverPickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Silver Sword')
          {
            if (!silverSwordOwned && (!platinumSwordOwned || !jaditeSwordOwned || !diamondSwordOwned || !obsidianSwordOwned))
            {
              survivorWeapon = 'Silver Sword';
              silverSwordOwned = true;
              silverSwordActive = true;
              stoneSwordOwned = false;
              stoneAxeActive = false;
              stoneSwordActive = false;
              stonePickaxeActive = false;
              silverAxeActive = false;
              silverPickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Silver Pickaxe')
          {
            if (!silverPickaxeOwned && (!platinumPickaxeOwned || !jaditePickaxeOwned || !diamondPickaxeOwned || !obsidianPickaxeOwned))
            {
              survivorWeapon = 'Silver Pickaxe';
              silverPickaxeOwned = true;
              silverPickaxeActive = true;
              stonePickaxeOwned = false;
              stoneAxeActive = false;
              stoneSwordActive = false;
              stonePickaxeActive = false;
              silverAxeActive = false;
              silverSwordActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Platinum Axe')
          {
            if (!platinumAxeOwned && (!jaditeAxeOwned || !diamondAxeOwned || !obsidianAxeOwned))
            {
              survivorWeapon = 'Platinum Axe';
              platinumAxeOwned = true;
              platinumAxeActive = true;
              silverAxeOwned = false;
              silverAxeActive = false;
              silverSwordActive = false;
              silverPickaxeActive = false;
              platinumSwordActive = false;
              platinumPickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Platinum Sword')
          {
            if (!platinumSwordOwned && (!jaditeSwordOwned || !diamondSwordOwned || !obsidianSwordOwned))
            {
              survivorWeapon = 'Platinum Sword';
              platinumSwordOwned = true;
              platinumSwordActive = true;
              silverSwordOwned = false;
              silverAxeActive = false;
              silverSwordActive = false;
              silverPickaxeActive = false;
              platinumAxeActive = false;
              platinumPickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Platinum Pickaxe')
          {
            if (!platinumPickaxeOwned && (!jaditePickaxeOwned || !diamondPickaxeOwned || !obsidianPickaxeOwned))
            {
              survivorWeapon = 'Platinum Pickaxe';
              platinumPickaxeOwned = true;
              platinumPickaxeActive = true;
              silverPickaxeOwned = false;
              silverAxeActive = false;
              silverSwordActive = false;
              silverPickaxeActive = false;
              platinumAxeActive = false;
              platinumSwordActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Jadite Axe')
          {
            if (!jaditeAxeOwned && (!diamondAxeOwned || !obsidianAxeOwned))
            {
              survivorWeapon = 'Jadite Axe';
              jaditeAxeOwned = true;
              jaditeAxeActive = true;
              platinumAxeOwned = false;
              platinumAxeActive = false;
              platinumSwordActive = false;
              platinumPickaxeActive = false;
              jaditeSwordActive = false;
              jaditePickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Jadite Sword')
          {
            if (!jaditeSwordOwned && (!diamondSwordOwned || !obsidianSwordOwned))
            {
              survivorWeapon = 'Jadite Sword';
              jaditeSwordOwned = true;
              jaditeSwordActive = true;
              platinumSwordOwned = false;
              platinumAxeActive = false;
              platinumSwordActive = false;
              platinumPickaxeActive = false;
              jaditeAxeActive = false;
              jaditePickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Jadite Pickaxe')
          {
            if (!jaditePickaxeOwned && (!diamondPickaxeOwned || !obsidianPickaxeOwned))
            {
              survivorWeapon = 'Jadite Pickaxe';
              jaditePickaxeOwned = true;
              jaditePickaxeActive = true;
              platinumPickaxeOwned = false;
              platinumAxeActive = false;
              platinumSwordActive = false;
              platinumPickaxeActive = false;
              jaditeAxeActive = false;
              jaditeSwordActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Diamond Axe')
          {
            if (!diamondAxeOwned && !obsidianAxeOwned)
            {
              survivorWeapon = 'Diamond Axe';
              diamondAxeOwned = true;
              diamondAxeActive = true;
              jaditeAxeOwned = false;
              jaditeAxeActive = false;
              jaditeSwordActive = false;
              jaditePickaxeActive = false;
              diamondSwordActive = false;
              diamondPickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Diamond Sword')
          {
            if (!diamondSwordOwned && !obsidianSwordOwned)
            {
              survivorWeapon = 'Diamond Sword';
              diamondSwordOwned = true;
              diamondSwordActive = true;
              jaditeSwordOwned = false;
              jaditeAxeActive = false;
              jaditeSwordActive = false;
              jaditePickaxeActive = false;
              diamondAxeActive = false;
              diamondPickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Diamond Pickaxe')
          {
            if (!diamondPickaxeOwned && !obsidianPickaxeOwned)
            {
              survivorWeapon = 'Diamond Pickaxe';
              diamondPickaxeOwned = true;
              diamondPickaxeActive = true;
              jaditePickaxeOwned = false;
              jaditeAxeActive = false;
              jaditeSwordActive = false;
              jaditePickaxeActive = false;
              diamondAxeActive = false;
              diamondSwordActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Obsidian Axe')
          {
            if (!obsidianAxeOwned)
            {
              survivorWeapon = 'Obsidian Axe';
              obsidianAxeOwned = true;
              obsidianAxeActive = true;
              diamondAxeOwned = false;
              diamondAxeActive = false;
              diamondSwordActive = false;
              diamondvPickaxeActive = false;
              obsidianSwordActive = false;
              obsidianPickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Obsidian Sword')
          {
            if (!obsidianSwordOwned)
            {
              survivorWeapon = 'Obsidian Sword';
              obsidianSwordOwned = true;
              obsidianSwordActive = true;
              diamondSwordOwned = false;
              diamondAxeActive = false;
              diamondSwordActive = false;
              diamondPickaxeActive = false;
              obsidianAxeActive = false;
              obsidianPickaxeActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
          if (tempProduct == 'Obsidian Pickaxe')
          {
            if (!obsidianPickaxeOwned)
            {
              survivorWeapon = 'Obsidian Pickaxe';
              obsidianPickaxeOwned = true;
              obsidianPickaxeActive = true;
              diamondPickaxeOwned = false;
              diamondAxeActive = false;
              diamondSwordActive = false;
              diamondPickaxeActive = false;
              obsidianAxeActive = false;
              obsidianSwordActive = false;
            }
            tempSlot1 = '';
            tempSlot2 = '';
            tempProduct = '';
            tempOccupiedSlot1 = false;
            tempOccupiedSlot2 = false;
          }
        }
      }
    }
  }
  if (showingTempCraft)
  {
    if (!tempOccupiedSlot1)
    {
      //row 1
      if (mouseX > 90 && mouseX < 190)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvRefWood > 0)
          {
            tempSlot1 = 'Refined Wood';
            tempSlot1X = 105;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvRefWood -= 1;
          }
        }
      }
      if (mouseX > 195 && mouseX < 295)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvRefStone > 0)
          {
            tempSlot1 = 'Refined Stone';
            tempSlot1X = 105;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvRefStone -= 1;
          }
        }
      }
      if (mouseX > 300 && mouseX < 400)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvRope > 0)
          {
            tempSlot1 = 'Rope';
            tempSlot1X = 130;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvRope -= 1;
          }
        }
      }
      if (mouseX > 405 && mouseX < 505)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvHerbs > 0)
          {
            tempSlot1 = 'Herbs';
            tempSlot1X = 130;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvHerbs -= 1;
          }
        }
      }
      if (mouseX > 510 && mouseX < 610)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvCloth > 0)
          {
            tempSlot1 = 'Cloth';
            tempSlot1X = 133;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvCloth -= 1;
          }
        }
      }
      
      //row 2
      if (mouseX > 90 && mouseX < 190)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (axeOwned)
          {
            tempSlot1 = 'Axe';
            tempSlot1X = 135;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
          }
        }
      }
      if (mouseX > 195 && mouseX < 295)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (pickaxeOwned)
          {
            tempSlot1 = 'Pickaxe';
            tempSlot1X = 125;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
          }
        }
      }
      if (mouseX > 300 && mouseX < 400)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (swordOwned)
          {
            tempSlot1 = 'Sword';
            tempSlot1X = 130;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
          }
        }
      }
      if (mouseX > 405 && mouseX < 505)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (survivorInvLongHandle > 0)
          {
            tempSlot1 = 'Long Handle';
            tempSlot1X = 110;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvLongHandle -= 1;
          }
        }
      }
      if (mouseX > 510 && mouseX < 610)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (survivorInvShortHandle > 0)
          {
            tempSlot1 = 'Short Handle';
            tempSlot1X = 108;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvShortHandle -= 1;
          }
        }
      }
      
      //row 3
      if (mouseX > 90 && mouseX < 190)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvSilver > 0)
          {
            tempSlot1 = 'Silver';
            tempSlot1X = 130;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvSilver -= 1;
          }
        }
      }
      if (mouseX > 195 && mouseX < 295)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvPlatinum > 0)
          {
            tempSlot1 = 'Platinum';
            tempSlot1X = 123;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvPlatinum -= 1;
          }
        }
      }
      if (mouseX > 300 && mouseX < 400)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvJadite > 0)
          {
            tempSlot1 = 'Jadite';
            tempSlot1X = 130;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvJadite -= 1;
          }
        }
      }
      if (mouseX > 405 && mouseX < 505)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvDiamond > 0)
          {
            tempSlot1 = 'Diamond';
            tempSlot1X = 122;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvDiamond -= 1;
          }
        }
      }
      if (mouseX > 510 && mouseX < 610)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvObsidian > 0)
          {
            tempSlot1 = 'Obsidian';
            tempSlot1X = 122;
            tempSlot1Y = 345;
            tempOccupiedSlot1 = true;
            survivorInvObsidian -= 1;
          }
        }
      }
    }
    else if (!tempOccupiedSlot2)
    {
      //row 1
      if (mouseX > 90 && mouseX < 190)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvRefWood > 0)
          {
            tempSlot2 = 'Refined Wood';
            tempSlot2X = 275;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvRefWood -= 1;
          }
        }
      }
      if (mouseX > 195 && mouseX < 295)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvRefStone > 0)
          {
            tempSlot2 = 'Refined Stone';
            tempSlot2X = 275;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvRefStone -= 1;
          }
        }
      }
      if (mouseX > 300 && mouseX < 400)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvRope > 0)
          {
            tempSlot2 = 'Rope';
            tempSlot2X = 300;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvRope -= 1;
          }
        }
      }
      if (mouseX > 405 && mouseX < 505)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvHerbs > 0)
          {
            tempSlot2 = 'Herbs';
            tempSlot2X = 300;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvHerbs -= 1;
          }
        }
      }
      if (mouseX > 510 && mouseX < 610)
      {
        if (mouseY > 100 && mouseY < 120)
        {
          if (survivorInvCloth > 0)
          {
            tempSlot2 = 'Cloth';
            tempSlot2X = 303;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvCloth -= 1;
          }
        }
      }
      
      //row 2
      if (mouseX > 90 && mouseX < 190)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (axeOwned)
          {
            tempSlot2 = 'Axe';
            tempSlot2X = 308;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
          }
        }
      }
      if (mouseX > 195 && mouseX < 295)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (pickaxeOwned)
          {
            tempSlot2 = 'Pickaxe';
            tempSlot2X = 295;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
          }
        }
      }
      if (mouseX > 300 && mouseX < 400)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (swordOwned)
          {
            tempSlot2 = 'Sword';
            tempSlot2X = 300;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
          }
        }
      }
      if (mouseX > 405 && mouseX < 505)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (survivorInvLongHandle > 0)
          {
            tempSlot2 = 'Long Handle';
            tempSlot2X = 280;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvLongHandle -= 1;
          }
        }
      }
      if (mouseX > 510 && mouseX < 610)
      {
        if (mouseY > 160 && mouseY < 180)
        {
          if (survivorInvShortHandle > 0)
          {
            tempSlot2 = 'Short Handle';
            tempSlot2X = 278;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvShortHandle -= 1;
          }
        }
      }
      
      //row 3
      if (mouseX > 90 && mouseX < 190)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvSilver > 0)
          {
            tempSlot2 = 'Silver';
            tempSlot2X = 302;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvSilver -= 1;
          }
        }
      }
      if (mouseX > 195 && mouseX < 295)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvPlatinum > 0)
          {
            tempSlot2 = 'Platinum';
            tempSlot2X = 292;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvPlatinum -= 1;
          }
        }
      }
      if (mouseX > 300 && mouseX < 400)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvJadite > 0)
          {
            tempSlot2 = 'Jadite';
            tempSlot2X = 300;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvJadite -= 1;
          }
        }
      }
      if (mouseX > 405 && mouseX < 505)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvDiamond > 0)
          {
            tempSlot2 = 'Diamond';
            tempSlot2X = 290;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvDiamond -= 1;
          }
        }
      }
      if (mouseX > 510 && mouseX < 610)
      {
        if (mouseY > 220 && mouseY < 240)
        {
          if (survivorInvObsidian > 0)
          {
            tempSlot2 = 'Obsidian';
            tempSlot2X = 290;
            tempSlot2Y = 345;
            tempOccupiedSlot2 = true;
            survivorInvObsidian -= 1;
          }
        }
      }
    }
    
    if (tempOccupiedSlot1)
    {
      if (mouseX > 100 && mouseX < 200)
      {
        if (mouseY > 325 && mouseY < 355)
        {
          if (tempSlot1 == 'Refined Wood')
          {
            survivorInvRefWood += 1;
          }
          if (tempSlot1 == 'Refined Stone')
          {
            survivorInvRefStone += 1;
          }
          if (tempSlot1 == 'Rope')
          {
            survivorInvRefRope += 1;
          }
          if (tempSlot1 == 'Herbs')
          {
            survivorInvHerbs += 1;
          }
          if (tempSlot1 == 'Cloth')
          {
            survivorInvCloth += 1;
          }
          if (tempSlot1 == 'Long Handle')
          {
            survivorInvLongHandle += 1;
          }
          if (tempSlot1 == 'Short Handle')
          {
            survivorInvShortHandle += 1;
          }
          if (tempSlot1 == 'Silver')
          {
            survivorInvSilver += 1;
          }
          if (tempSlot1 == 'Platinum')
          {
            survivorInvPlatinum += 1;
          }
          if (tempSlot1 == 'Jadite')
          {
            survivorInvJadite += 1;
          }
          if (tempSlot1 == 'Diamond')
          {
            survivorInvDiamond += 1;
          }
          if (tempSlot1 == 'Obsidian')
          {
            survivorInvObsidian += 1;
          }
          tempSlot1 = '';
          tempOccupiedSlot1 = false;
        }
      }
    }
    if (tempOccupiedSlot2)
    {
      if (mouseX > 270 && mouseX < 370)
      {
        if (mouseY > 325 && mouseY < 355)
        {
          if (tempSlot2 == 'Refined Wood')
          {
            survivorInvRefWood += 1;
          }
          if (tempSlot2 == 'Refined Stone')
          {
            survivorInvRefStone += 1;
          }
          if (tempSlot2 == 'Rope')
          {
            survivorInvRefRope += 1;
          }
          if (tempSlot2 == 'Herbs')
          {
            survivorInvHerbs += 1;
          }
          if (tempSlot2 == 'Cloth')
          {
            survivorInvCloth += 1;
          }
          if (tempSlot2 == 'Long Handle')
          {
            survivorInvLongHandle += 1;
          }
          if (tempSlot2 == 'Short Handle')
          {
            survivorInvShortHandle += 1;
          }
          if (tempSlot2 == 'Silver')
          {
            survivorInvSilver += 1;
          }
          if (tempSlot2 == 'Platinum')
          {
            survivorInvPlatinum += 1;
          }
          if (tempSlot2 == 'Jadite')
          {
            survivorInvJadite += 1;
          }
          if (tempSlot2 == 'Diamond')
          {
            survivorInvDiamond += 1;
          }
          if (tempSlot2 == 'Obsidian')
          {
            survivorInvObsidian += 1;
          }
          tempSlot2 = '';
          tempOccupiedSlot2 = false;
        }
      }
    }
  }
  
  if (!showingTempCraft && showingTemplateIcon)
  {
    if (mouseX > width-60 && mouseX < width-20)
    {
      if (mouseY > height-50 && mouseY < height-10)
      {
        showingTempCraft = true;
      }
    }
  }
  else if (showingTempCraft && showingTemplateIcon)
  {
    if (mouseX > width-60 && mouseX < width-20)
    {
      if (mouseY > height-50 && mouseY < height-10)
      {
        showingTempCraft = false;
      }
    }
  }
  if (showingCraft)
  {
    if (mouseX > craftNextX && mouseX < craftNextX + 30)
    {
      if (mouseY > craftButtonY && mouseY < craftButtonY + 20)
      {
        craftPage += 1;
      }
    }
    if (mouseX > craftBackX && mouseX < craftBackX + 30)
    {
      if (mouseY > craftButtonY && mouseY < craftButtonY + 20)
      {
        craftPage -= 1;
      }
    }
    if (craftPage == 3)
    {
      if (mouseX > craftX && mouseX < craftX + craftWidth)
      {
        if (mouseY > craft1Y && mouseY < craft1Y + craftHeight)
        {
          if (survivorInvWood >= 5)
          {
            if (axeOwned)
            {
              survivorInvRefWood += 1;
              survivorInvWood -= 5;
            }
          }
          else if (survivorInvWood < 5 || !stoneAxeOwned)
          {
            push();
            translate(-cameraX, -cameraY);
            fill(140, 140, 140, 70);
            noStroke();
            rect(craftX, craft1Y, craftWidth, craftHeight);
            pop();
          }
        }
      }
      if (mouseX > craftX && mouseX < craftX + craftWidth)
      {
        if (mouseY > craft2Y && mouseY < craft2Y + craftHeight)
        {
          if (survivorInvStone >= 5)
          {
            if (pickaxeOwned)
            {
              survivorInvRefStone += 1;
              survivorInvStone -= 5;
            }
          }
          else if (survivorInvStone < 5 || !stonePickaxeOwned)
          {
            push();
            translate(-cameraX, -cameraY);
            fill(140, 140, 140, 70);
            noStroke();
            rect(craftX, craft2Y, craftWidth, craftHeight);
            pop();
          }
        }
      }
    }
  }
}

function mousePressed()
{
  survivor.swinging = true;
  
  if (showingCraft)
  {
    craftAvailable = true;
  }
}

function mouseReleased()
{
  survivor.swinging = false;
  
  if (showingCraft)
  {
    craftAvailable = false;
  }
}

function keyPressed()
{
  if (keyCode == 27 && !showingMenu)
  {
    showingMenu = true;
  }
  if (key == 'w' && !showingCraft)
  {
    movingUp = true;
  }
  if (key == 's' && !showingCraft)
  {
    movingDown = true;
  }
  if (key == 'a' && !showingCraft)
  {
    movingLeft = true;
  }
  if (key == 'd' && !showingCraft)
  {
    movingRight = true;
  }
  
  if (key == 'r')
  {
    if (woodSwordActive || stoneSwordActive || silverSwordActive || platinumSwordActive || jaditeSwordActive || diamondSwordActive || obsidianSwordActive)
    {
      console.log('switching from sword');
      if (woodPickaxeOwned && !woodPickaxeActive)
      {
        survivorWeapon = 'Wooden Pickaxe';
        woodAxeActive = false;
        woodSwordActive = false;
        stoneAxeActive = false;
        stoneSwordActive = false;
        woodPickaxeActive = true;
        stonePickaxeActive = false;
      }
      else if (stonePickaxeOwned && !stonePickaxeActive)
      {
        survivorWeapon = 'Stone Pickaxe';
        woodAxeActive = false;
        woodSwordActive = false;
        stoneAxeActive = false;
        stoneSwordActive = false;
        woodPickaxeActive = false;
        stonePickaxeActive = true;
        silverSwordActive = false;
        silverAxeActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (silverPickaxeOwned && !silverPickaxeActive)
      {
        survivorWeapon = 'Silver Pickaxe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = true;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (platinumPickaxeOwned && !platinumPickaxeActive)
      {
        survivorWeapon = 'Platinum Pickaxe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = true;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (jaditePickaxeOwned && !jaditePickaxeActive)
      {
        survivorWeapon = 'Jadite Pickaxe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = true;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (diamondPickaxeOwned && !diamondPickaxeActive)
      {
        survivorWeapon = 'Diamond Pickaxe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = true;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (obsidianPickaxeOwned && !obsidianPickaxeActive)
      {
        survivorWeapon = 'Obsidian Pickaxe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = true;
      }
      else if ((!woodPickaxeOwned || !stonePickaxeOwned) && woodAxeOwned && !woodAxeActive)
      {
        survivorWeapon = 'Wooden Axe';
        woodAxeActive = true;
        woodSwordActive = false;
        stoneAxeActive = false;
        stoneSwordActive = false;
        woodPickaxeActive = false;
        stonePickaxeActive = false;
      }
      else if ((!woodPickaxeOwned || !stonePickaxeOwned) && stoneAxeOwned && !stoneAxeActive)
      {
        survivorWeapon = 'Stone Axe';
        woodAxeActive = false;
        woodSwordActive = false;
        stoneAxeActive = true;
        stoneSwordActive = false;
        woodPickaxeActive = false;
        stonePickaxeActive = false;
      }
      else if ((!stonePickaxeOwned || !silverPickaxeOwned) && silverAxeOwned && silverAxeActive)
      {
        survivorWeapon = 'Silver Axe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = true;
        silverSwordActive = false;
        silverPickaxeActive = false;
      }
    }
    else if (woodAxeActive || stoneAxeActive || silverAxeActive || platinumAxeActive || jaditeAxeActive || diamondAxeActive || obsidianAxeActive)
    {
      console.log('switching from axe');
      if (woodSwordOwned && !woodSwordActive)
      {
        survivorWeapon = 'Wooden Sword';
        woodAxeActive = false;
        woodSwordActive = true;
        stoneAxeActive = false;
        stoneSwordActive = false;
        woodPickaxeActive = false;
        stonePickaxeActive = false;
      }
      else if (stoneSwordOwned && !stoneSwordActive)
      {
        survivorWeapon = 'Stone Sword';
        woodAxeActive = false;
        woodSwordActive = false;
        stoneAxeActive = false;
        stoneSwordActive = true;
        woodPickaxeActive = false;
        stonePickaxeActive = false;
        silverSwordActive = false;
        silverAxeActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (silverSwordOwned && !silverSwordActive)
      {
        survivorWeapon = 'Silver Sword';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = true;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (platinumSwordOwned && !platinumSwordActive)
      {
        survivorWeapon = 'Platinum Sword';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = true;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (jaditeSwordOwned && !jaditeSwordActive)
      {
        survivorWeapon = 'Jadite Sword';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = true;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (diamondSwordOwned && !diamondSwordActive)
      {
        survivorWeapon = 'Diamond Sword';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = true;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (obsidianSwordOwned && !obsidianSwordActive)
      {
        survivorWeapon = 'Obsidian Sword';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = true;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if ((!woodSwordOwned || !stoneSwordOwned) && woodPickaxeOwned && !woodPickaxeActive)
      {
        survivorWeapon = 'Wooden Pickaxe';
        woodAxeActive = false;
        woodSwordActive = false;
        stoneAxeActive = false;
        stoneSwordActive = false;
        woodPickaxeActive = true;
        stonePickaxeActive = false;
      }
      else if ((!woodSwordOwned || !stoneSwordOwned) && stonePickaxeOwned && !stonePickaxeActive)
      {
        survivorWeapon = 'Stone Pickaxe';
        woodAxeActive = false;
        woodSwordActive = false;
        stoneAxeActive = false;
        stoneSwordActive = false;
        woodPickaxeActive = false;
        stonePickaxeActive = true;
      }
      else if ((!stoneSwordOwned || !silverSwordOwned) && silverPickaxeOwned && silverPickaxeActive)
      {
        survivorWeapon = 'Silver Pickaxe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = true;
      }
    }
    else if (woodPickaxeActive || stonePickaxeActive || silverPickaxeActive || platinumPickaxeActive || jaditePickaxeActive || diamondPickaxeActive || obsidianPickaxeActive)
    {
      console.log('switching from pickaxe');
      if (woodAxeOwned && !woodAxeActive)
      {
        survivorWeapon = 'Wooden Axe';
        woodAxeActive = true;
        woodSwordActive = false;
        stoneAxeActive = false;
        stoneSwordActive = false;
        woodPickaxeActive = false;
        stonePickaxeActive = false;
      }
      else if (stoneAxeOwned && !stoneAxeActive)
      {
        survivorWeapon = 'Stone Axe';
        woodAxeActive = false;
        woodSwordActive = false;
        stoneAxeActive = true;
        stoneSwordActive = false;
        woodPickaxeActive = false;
        stonePickaxeActive = false;
        silverSwordActive = false;
        silverAxeActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (silverAxeOwned && !silverAxeActive)
      {
        survivorWeapon = 'Silver Axe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = true;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (platinumAxeOwned && !platinumAxeActive)
      {
        survivorWeapon = 'Platinum Axe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = true;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (jaditeAxeOwned && !jaditeAxeActive)
      {
        survivorWeapon = 'Jadite Axe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = true;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (diamondAxeOwned && !diamondAxeActive)
      {
        survivorWeapon = 'Diamond Axe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = true;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = false;
        obsidianPickaxe = false;
      }
      else if (obsidianAxeOwned && !obsidianAxeActive)
      {
        survivorWeapon = 'Obsidian Axe';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = false;
        silverPickaxeActive = false;
        platinumSwordActive = false;
        platinumAxeActive = false;
        platinumPickaxeActive = false;
        jaditeSwordActive = false;
        jaditeAxeActive = false;
        jaditePickaxeActive = false;
        diamondSwordActive = false;
        diamondAxeActive = false;
        diamondPickaxeActive = false;
        obsidianSwordActive = false;
        obsidianAxeActive = true;
        obsidianPickaxe = false;
      }
      else if ((!woodAxeOwned && !stoneAxeOwned) && woodSwordOwned && !woodSwordActive)
      {
        survivorWeapon = 'Wooden Sword';
        woodAxeActive = false;
        woodSwordActive = true;
        stoneAxeActive = false;
        stoneSwordActive = false;
        woodPickaxeActive = false;
        stonePickaxeActive = false;
      }
      else if ((!woodAxeOwned && !stoneAxeOwned) && stoneSwordOwned && !stoneSwordActive)
      {
        survivorWeapon = 'Stone Sword';
        woodAxeActive = false;
        woodSwordActive = false;
        stoneAxeActive = false;
        stoneSwordActive = true;
        woodPickaxeActive = false;
        stonePickaxeActive = false;
      }
      else if ((!stoneAxeOwned || !silverAxeOwned) && silverSwordOwned && silverSwordActive)
      {
        survivorWeapon = 'Silver Sword';
        stoneAxeActive = false;
        stoneSwordActive = false;
        stonePickaxeActive = false;
        silverAxeActive = false;
        silverSwordActive = true;
        silverPickaxeActive = false;
      }
    }
  }
  
  if (key == 'q' && !showingInv && !showingCraft)
  {
    showingInv = true;
  }
  else if (key == 'q' && showingInv && !showingCraft)
  {
    showingInv = false;
  }
  
  if (key == 'e' && !showingCraft)
  {
    showingCraft = true;
  }
  else if (key == 'e' && showingCraft)
  {
    showingCraft = false;
  }
}

function keyReleased()
{
  if (key == 'w')
  {
    movingUp = false;
  }
  if (key == 's')
  {
    movingDown = false;
  }
  if (key == 'a')
  {
    movingLeft = false;
  }
  if (key == 'd')
  {
    movingRight = false;
  }
}