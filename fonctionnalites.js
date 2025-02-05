  function copie_colle() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text : copyText.value
    alert("Email copié");
  }

  function caroussel_2() {
    let l = document.querySelector(".arrow.left")
    let r = document.querySelector(".arrow.right")
    let img = document.querySelector(".img_cont")
  
  /*-200 à 0 et inversement*/
    /*pour l'ecouteur droit j'avais mis ca de base pour mes 2 images*/
    /*img.style.left = ((position +100)% 200)*-1 + "%"*/
    
    r.addEventListener("click", (event) => {
        console.log(event)
        position = parseFloat(img.style.left)
        console.log(position)
        if (position < 0) {
            img.style.left = ((position -100)% 200)*-1 + "%"
        }
        else {
            img.style.left = ((position +100)% 200)*-1 + "%"
        }
    })
    l.addEventListener("click", (event) => {
        console.log(event)
        position = parseFloat(img.style.left)
        console.log(position)
        img.style.left = (position-100) % 200 + "%" /*img.style.left = (position-100) % 200 + "%"*/
        /*(position - 100)*/
        console.log(position)
    })
  }


  
  function caroussel_3() {
    let l = document.querySelector(".arrow.left")
    let r = document.querySelector(".arrow.right")
    let img = document.querySelector(".img_cont")
  
  /*-200 à 0 et inversement*/
    /*pour l'ecouteur droit j'avais mis ca de base pour mes 2 images*/
    /*img.style.left = ((position +100)% 200)*-1 + "%"*/
    
    r.addEventListener("click", (event) => {
        console.log(event)
        position = parseFloat(img.style.left)
        console.log(position)
        if (position < 0) {
            img.style.left = ((position -100)% 300)+ "%"
        }
        else {
            img.style.left = ((position +100)% 300)*-1 + "%"
        }
    })
    l.addEventListener("click", (event) => {
        console.log(event)
        position = parseFloat(img.style.left)
        console.log(position)
        img.style.left = (position-100) % 300 + "%" /*img.style.left = (position-100) % 200 + "%"*/
        /*(position - 100)*/
        console.log(position)
    })
  }