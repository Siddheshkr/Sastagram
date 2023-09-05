var arr = [
  {
    dp: "https://i.pinimg.com/564x/6b/d8/f0/6bd8f02f5a1ca34526f99f098b6a1526.jpg",
    story:
      "https://i.pinimg.com/564x/df/f3/a4/dff3a48600569016372941bedf48a718.jpg",
  },
  {
    dp: "https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1579200152039-7051de8a159c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1569240651738-2c9ec2f50f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1838&q=80",
  },
  {
    dp: "https://i.pinimg.com/564x/3d/e1/7e/3de17e16ac1b94a87e9b6ed0574bcef3.jpg",
    story:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1692641346524-154a0971ca2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://plus.unsplash.com/premium_photo-1692641346424-808844ecba0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
];
var stories = document.querySelector(".story-sec");
var preview = document.querySelector(".fullscrn");
var post = document.querySelector(".posts");
var love = document.querySelector("#imglove");
let lovebtn = document.querySelector("#lovebtn");

// story section-->>
var clutter = "";
arr.forEach(function (elem, indx) {
  clutter += `<div
          class="story"
        >
      <img id="${indx}" src="${elem.dp}" alt=""></div>`;
});
stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
  preview.style.display = "block";
  post.style.display = "none";
  preview.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(function () {
    preview.style.display = "none";
    post.style.display = "block";
  }, 2500);
  preview.addEventListener("dblclick", (e) => {
    preview.style.display = "none";
    post.style.display = "block";
  });
});

// post setion-->
post.addEventListener("dblclick", (e) => {
  love.style.transform = " translate(-50%, -50%) scale(2)";
  lovebtn.style.color = "#e20909";
  setTimeout((e) => {
    love.style.transform = " translate(-50%, -50%) scale(0)";
  }, 1000);
});

let check = 0;
lovebtn.addEventListener("click", (e) => {
  if (check == 0) {
    love.style.transform = " translate(-50%, -50%) scale(2)";
    lovebtn.style.color = "#e20909";
    setTimeout((e) => {
      love.style.transform = " translate(-50%, -50%) scale(0)";
    }, 1000);
    check = 1;
  } else {
    lovebtn.style.color = "#ffffff";

    check = 1;
  }
});
