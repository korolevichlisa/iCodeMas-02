const selectItem = document.querySelectorAll(".item img");
selectItem.forEach((el) => {
  el.addEventListener("click", function () {
    if (document.querySelector(".choisen-item .imgA img")) {
      document.querySelector(".choisen-item .imgA img").remove();
    }if (document.querySelector(".choisen-item .total-info button")) {
      document.querySelector(".choisen-item .total-info button").remove();
    }
    let img = new Image();
    img.src = this.src;
    img.alt = this.alt;
    document.querySelector(".choisen-item .imgA").appendChild(img);
    if (img.alt === "christmas_tree") {
      document.querySelector(".choisen-item .total-info .title").innerHTML = "Christimas Tree Decoration";
      document.querySelector(".choisen-item .total-info .price").innerHTML = "23$";
      document.querySelector(".choisen-item .total-info .description").innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum quas, temporibus nobis pariatur";
      const para = document.createElement("button");
      para.classList.add('btnAdd')
para.innerText = "Add to card";
document.querySelector(".choisen-item .total-info").appendChild(para);

    } else if (img.alt === "christmas_ball") {
      document.querySelector(".choisen-item .total-info .title").innerHTML = "Christimas Ball Decoration";
      document.querySelector(".choisen-item .total-info .price").innerHTML ="2$";
      document.querySelector(".choisen-item .total-info .description").innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum quas, temporibus nobis pariatur";
      const para = document.createElement("button");
      para.classList.add('btnAdd')
para.innerText = "Add to card";
document.querySelector(".choisen-item .total-info").appendChild(para);
        
    } else if (img.alt === "lights") {
      document.querySelector(".choisen-item .total-info .title").innerHTML = "Christimas Lights Decoration";

      document.querySelector(".choisen-item .total-info .price").innerHTML ="6$";
      document.querySelector(".choisen-item .total-info .description").innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum quas, temporibus nobis pariatur";
      const para = document.createElement("button");
      para.classList.add('btnAdd')
para.innerText = "Add to card";
document.querySelector(".choisen-item .total-info").appendChild(para);


    }
  });
});
