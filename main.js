/*
 * This program tells a graphical story in 4 frames.
 */

/* 
 * Draws the first scene on the canvas and outputs the first
 * section of text for the story.
 */

// Global Variables
var jorrySpeechBubble = new Text("I am lonely :(");
var janeSpeechBubble = new Text("Here you go Jorry, a wig");

function drawScene1(){
    var sky = new Rectangle(1000, 1000);
    sky.setPosition(0, 0);
    sky.setColor(Color.cyan);
    add(sky);
    var sun = new Circle(100);
    sun.setPosition(0, 0);
    sun.setColor(Color.yellow);
    add(sun);
    var head = new Rectangle(40, 40);
	head.setPosition(100, 200);
	head.setColor(Color.red);
	add(head);
	var neck = new Line(120, 245, 120, 260);
	add(neck);
	var body = new Rectangle(40, 80);
	body.setPosition(100, 265);
	body.setColor(Color.red);
	add(body);
	var hand1 = new Line(100, 260, 50, 280);
	add(hand1);
	var hand2 = new Line(145, 260, 200, 300);
	add(hand2);
	var sumLeg = new Circle(20);
	sumLeg.setPosition(120, 350);
	sumLeg.setColor(Color.red);
	add(sumLeg);
    println("This is Jorry. He is a lonely person because he is bald");
    jorrySpeechBubble.setPosition(220, 250);
    add(jorrySpeechBubble);
}

/* 
 * Draws the second scene on the canvas and outputs the second
 * section of text for the story.
 */
function drawScene2(){
    remove(jorrySpeechBubble);
    var head = new Rectangle(40, 40);
	head.setPosition(220, 200);
	head.setColor(Color.blue);
	add(head);
	var neck = new Line(238, 245, 238, 260);
	add(neck);
	var body = new Rectangle(40, 80);
	body.setPosition(220, 265);
	body.setColor(Color.blue);
	add(body);
	var hand1 = new Line(220, 260, 200, 280);
	add(hand1);
	var hand2 = new Line(260, 265, 300, 300);
	add(hand2);
	var sumLeg = new Circle(20);
	sumLeg.setPosition(240, 345);
	sumLeg.setColor(Color.blue);
	add(sumLeg);
    println("Then another person called Jane offered Jorry a wig ");
}

/* 
 * Draws the third scene on the canvas and outputs the third
 * section of text for the story.
 */
function drawScene3(){
    var wig = new Rectangle(40, 20);
    wig.setPosition(170, 200);
    wig.setColor(Color.yellow);
    add(wig);
    janeSpeechBubble.setPosition(90, 150);
    add(janeSpeechBubble);
    println("Jane offers Jorry a wig");
}

/* 
 * Draws the fourth scene on the canvas and outputs the fourth
 * section of text for the story.
 */
function drawScene4(){
    var wig = new Rectangle(40, 20);
    wig.setPosition(100, 200);
    wig.setColor(Color.yellow);
    add(wig);
    janeSpeechBubble.setText("Thanks Jane. Youre now my best friend :)");
    janeSpeechBubble.setPosition(10, 150);
    println("Jorry and Jane become best friends for life. The End");
}

/**********************************************************
 * This is set up code that makes the story advance from
 * scene to scene. Feel free to check out this code and
 * learn how it works!
 * But be careful! If you modify this code the story might
 * not work anymore.
 **********************************************************/

var sceneCounter = 0;
function start() {
    
    var welcome = new Text("Click to Begin!");
    
    welcome.setPosition(
        getWidth() / 2 - welcome.getWidth() / 2,
        getHeight() / 2
    );
    
    add(welcome);
    
    // Call the drawNextScene function every time the mouse is clicked
    mouseClickMethod(drawNextScene);
}

/*
 * When this function is called the next scene is drawn.
 */
function drawNextScene(){
    sceneCounter++;
    
    if(sceneCounter == 1) {
        drawScene1();
    } else if (sceneCounter == 2) {
        drawScene2();
    } else if (sceneCounter == 3) {
        drawScene3();
    } else {
        drawScene4();
    }
}
