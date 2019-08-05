$(document).ready(function() {
  var tl = new TimelineMax({ repeat: -1 });
  var tlSizeUp = new TimelineMax();
  var tlSizeDown = new TimelineMax();

  var circle = $(".circle");
  var tweenRight = TweenMax.to(circle, 0.4, { x: 150, ease: Sine.easeInOut });
  var tweenLeft = TweenMax.to(circle, 0.4, { x: 0, ease: Sine.easeInOut });
  var sizeSmall = TweenMax.to(circle, 0.2, { scale: 1.4 });
  var sizeLarge = TweenMax.to(circle, 0.2, { scale: 0.7 });
  var sizeReset = TweenMax.to(circle, 0.2, { scale: 1 });

  tlSizeUp.add(sizeSmall).add(sizeReset);
  tlSizeDown.add(sizeLarge).add(sizeReset);

  tl
    .add([tweenRight, tlSizeUp])
    .set(circle, { css: { zIndex: -1 } })
    .add([tweenLeft, tlSizeDown])
    .set(circle, { css: { zIndex: 1 } });
});
