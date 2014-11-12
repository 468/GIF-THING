$(document).ready(function(){
// test for gif file //
function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}
function isImage(filename) {
    var ext = getExtension(filename);
    if(ext.toLowerCase() == 'gif'){
        return true;
    }
    else{
      return false;
    }
}
// push passing gifs to the imageList//
$("#submit").click(function(){
    var imgA = $("input[name=link1]").val();
    var imgB = $("input[name=link2]").val();
    var imgC = $("input[name=link3]").val();
    var imgD = $("input[name=link4]").val();
    var imgE = $("input[name=link5]").val();
    if(isImage(imgA)){imageList.push(imgA)};
    if(isImage(imgB)){imageList.push(imgB)};
    if(isImage(imgC)){imageList.push(imgC)};
    if(isImage(imgD)){imageList.push(imgD)};
    if(isImage(imgE)){imageList.push(imgE)};
    if(imageList.length >= 1){
      run();
      return false;
    }else{
      return false;
    }
});
// setting Variables //
var imageList = [];
var size = ((Math.random()*800) + $(document).width()).toFixed();
var imageRand = function(){return(imageList[Math.floor(Math.random()*imageList.length)]);};
var posx = function(){return((Math.random() * ($(document).width() - size)).toFixed());};
var posy = function(){return((Math.random() * ($(document).height() - size)).toFixed());};
// div generation //
var newdiv = function(){ $('<div/>').css({
        'width':size +'px',
        'height':size +'px',
        'background-image': 'url(' + imageRand() + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100%',
        'position':'absolute',
        'left':posx()+'px',
        'top':posy()+'px',
        'display':'none',
        'opacity': '0.6'
    }).appendTo( 'body' ).fadeTo(2000,0.8).fadeOut(3000, function(){
       $(this).remove();
    }); 

};

//play function//
var run = function(){
  $("#main").hide();
  newdiv();
  window.setInterval(function(){
    newdiv()
  }, 1200);
  $("body").click(function(){
    if(!$("input").is(":focus")) {
      $("#main").toggle();
    };
  }); 
};

// load demo images if on demo page
if (window.location.href.indexOf("demo.html") > -1) {
  var imgA = "img/2.gif";
  var imgB = "img/3.gif";
  var imgC = "img/4.gif";
  var imgD = "img/5.gif";
  imageList.push(imgA);
  imageList.push(imgB);
  imageList.push(imgC);
  imageList.push(imgD);
  run();
}
});