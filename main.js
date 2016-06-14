function hideElement(selector) {
  forEach(selector, function(el) {
    el.style.display = 'none';
  });
}

function showElement(selector) {
  forEach(selector, function(el) {
    el.style.display = 'block';
  });
}

function eventListeners() {

  forEach('[data-toggle]', function(el) {
    el.onclick = function() {
      var target = document.querySelector('[data-toggle-target=' + el.getAttribute('data-toggle') + ']');
      if (el.checked)
        console.log('checked');
      else
        console.log('not');

      // if (el.value === toggleIf) {
      //   if (target.style.display === 'none')
      //     target.style.display = 'block';
      //   else
      //     target.style.display = 'none';
      // }
    }
  });

}

function forEach(selector, callback) {
  var elements = document.querySelectorAll(selector);
  [].forEach.call(elements, function(el, i, arr) {
    callback(el, i, arr);
  });
}

function onLoad() {
  hideElement('.hide-default');
  eventListeners();
}
window.onload = onLoad();