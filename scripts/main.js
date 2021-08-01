let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/snowface.jpeg') {
      myImage.setAttribute('src','images/prettyface.jpeg');
    } else {
      myImage.setAttribute('src','images/snowface.jpeg');
    }
}
