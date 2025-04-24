(function() {
    "use strict";
    const tokyo = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]
    let laltu = 0;

    document.getElementById('next').onclick = riley;

    function riley() {
        laltu++;
        if (laltu > 4) {
            laltu = 0;
        }
        document.getElementById('myimage').src = tokyo[laltu];
    }
    document.getElementById('previous').onclick = rile;

    function rile() {
        laltu--;
        if (laltu < 0) {
            laltu = tokyo.length - 1;
        }
        document.getElementById('myimage').src = tokyo[laltu];
    }
})();