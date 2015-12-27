/**
 * Created by schandramouli on 12/27/15.
 */

javascript:
var selector = '.item > .item-content.item-img:not(.hide)';
var images = document.querySelectorAll(selector);
for (var i = 0; i < images.length; i++) {
  var image = images[i];
  // retrieve the src, and do what you want to
  console.log(image.src);
  window.open(image.src);
}