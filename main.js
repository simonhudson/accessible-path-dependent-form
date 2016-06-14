function doToggle(selector) {
  console.log(selector);
  var elements = document.querySelectorAll(selector);
  console.log(elements.length);
  Array.prototype.forEach.call(elements, function(el) {
    if (el.style.display === 'block')
      el.style.display = 'none';
    else
      el.style.display = 'block';
  });
}

function toggleElement(selector) {
  doToggle(selector, true);
}

function eventListeners() {

  var toggle = document.querySelectorAll('[data-toggle]');
  Array.prototype.forEach.call(toggle, function(el) {
    var toggleTarget = el.getAttribute('data-toggle');
    el.onclick = function() {
      doToggle('.' + toggleTarget);
    };
  });

}

function onLoad() {
  doToggle('.hide-default');
  eventListeners();
}
window.onload = onLoad();