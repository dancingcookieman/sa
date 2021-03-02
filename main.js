var canvas = new fabric.Canvas("myCanvas")

var block_width = 10
var block_height = 10
var player_X = 10
var player_Y = 10
var block_image_object = ""
var player_image_object = ""
function player_render(){
    fabric.Image.fromURL("iconmonstr-cursor-32 (1).png",function(Img){ //this sets the image from the fabric.js
    player_image_object = Img //this sets the player_image object to the img we set from the fabric.jk
    player_image_object.scaleToWidth(150) //this sets the image's width to 150
    player_image_object.scaletoHeight(140) // this sets the image height to 140
    player_image_object.set({ //this will make the center of the entire image the top left
    top:player_Y,
    left:player_X
    })
    canvas.add(player_image_object); // this will place the image down
    })

}
function new_image(get_Img){
    fabric.image.fromURL(get_Img,function(Img){
    block_image_object = Img
    block_image_object.scaleToWidth(block_width)
    block_image_object.scaletoHeight(block_height)
    block_image_object.set({
        top:player_Y,
        left:player_X
    })
    canvas.add(block_image_object)
    })
}