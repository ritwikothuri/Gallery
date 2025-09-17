// gallery.js

function upDate(element) {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + element.src + "')";
    imageDiv.innerHTML = element.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Page loaded - adding tabindex attributes to images");
    var images = document.querySelectorAll('.preview');
    
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        images[i].addEventListener('focus', function() {
            upDate(this);
        });
        images[i].addEventListener('blur', function() {
            unDo();
        });
    }
}

window.addEventListener('load', addTabIndex);




