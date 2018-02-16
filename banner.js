window.addEventListener('load', function(){

let productsCont = document.querySelector(".productsCont");
let counter = 0;
let start = 2.3;
let end = 7;

let tl = new TimelineLite();


function bannerIntro()
{

  tl.to($(".actionCont"), 0.8, {bottom: 30, ease: Bounce.easeOut}, 0.3);
  tl.to($(".actionCont"), 0.8, {bottom: 220, ease: Cubic.easeInOut}, 2, "#endIntro");
  tl.to($(".dateCont"), 0.8, {bottom: 50, ease: Cubic.easeInOut}, 2.2, "#endIntro", "#products");

}
bannerIntro();



function bannerEnd(delay)
{

  tl.to($(".dateCont"), 0.8, {bottom: 0, ease: Expo.easeInOut}, delay, "#endIntro");
  tl.to($(".actionCont"), 0.8, {bottom: 30, ease: Bounce.easeOut}, "#endIntro += 0.1");
  tl.to($(".endButt"), 1, {opacity: 1, ease: Cubic.easeInOut}, "#endIntro += 0.5");

}



function repeatPriceScaling(elem, startName)
{

  tl.fromTo($(elem + " .pricesCont"), 0.9, {scale: 1, ease: Quad.easeOut}, {scale: 1.2, ease: Quad.easeOut}, "#"+startName+"+= 1")
  .to($(elem + " .pricesCont"), 0.9, {scale: 1, ease: Quad.easeOut}, "#"+startName+"+= 1.4")
  .fromTo($(elem + " .pricesCont"), 0.9, {scale: 1, ease: Quad.easeOut}, {scale: 1.2, ease: Quad.easeOut}, "#"+startName+"+= 2")
  .to($(elem + " .pricesCont"), 0.9, {scale: 1, ease: Quad.easeOut}, "#"+startName+"+= 2.6");

}


function nextProduct()
{

   counter++;
   let elem = "#product" + counter;


   if(counter == 2)
   {

      start = 7.6;
      end = 11;

      repeatPriceScaling(elem, start);

   }else if(counter == 3)
   {

     start = 11.7;
     end = 15;

     repeatPriceScaling(elem, start);
     bannerEnd(end+0.7);

   }else if(counter > 3)
   {

       tl.pause();

   }
   productAnimation(elem, start, 'productShowing', end, 'productHidding');
   console.log(elem);

}


function productAnimation(elem, start, startName, end, endName)
{

  tl.to($(elem), 1, {left: -500, scale: 1.4, ease: Cubic.easeInOut}, start, startName);
  $(elem + " .pricesCont").css('left','50px');
  $(elem + " .pricesCont").css('bottom','100px');

  tl.fromTo($(elem + " .pricesCont"), 0.9, {scale: 1, ease: Quad.easeOut}, {scale: 1.2, ease: Quad.easeOut}, "#"+startName+"+= 1")
  .to($(elem + " .pricesCont"), 0.9, {scale: 1, ease: Quad.easeOut}, "#"+startName+"+= 1.4")
  .fromTo($(elem + " .pricesCont"), 0.9, {scale: 1, ease: Quad.easeOut}, {scale: 1.2, ease: Quad.easeOut}, "#"+startName+"+= 2")
  .to($(elem + " .pricesCont"), 0.9, {scale: 1, ease: Quad.easeOut}, "#"+startName+"+= 2.6");

  tl.to($(elem), 1, {left: -1000, scale: 0.8, ease: Cubic.easeInOut}, end, "#"+endName).call(nextProduct);

}

nextProduct();


})
