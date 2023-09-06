var arr = [
  {
    dp: "https://i.pinimg.com/564x/fa/34/ed/fa34ed655563a4559c37c49f8721289f.jpg",
    story:
      "https://i.pinimg.com/564x/bd/b8/6f/bdb86f6f99b595e64cf491b379298386.jpg",
  },
  {
    dp: "https://i.pinimg.com/564x/3d/2a/b1/3d2ab12d74d0309b9fb9f8172ad23275.jpg",
    story:
      "https://i.pinimg.com/564x/4d/13/ea/4d13eaaf587a09915f33ff50c614dcc2.jpg",
  },
  {
    dp: "https://images.unsplash.com/photo-1464343015641-615326ab2a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80",
    story:
      "https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
  },
  {
    dp: "https://i.pinimg.com/564x/b6/5b/e9/b65be9b94d9f8a219350c2fe04107353.jpg",
    story:
      "https://i.pinimg.com/564x/0f/9c/94/0f9c94ee9e77cb4e9d9e37bcc55ff105.jpg",
  },
  {
    dp: "https://images.unsplash.com/photo-1579200152039-7051de8a159c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1569240651738-2c9ec2f50f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1838&q=80",
  },
];
let stories = document.querySelector(".story-sec");
let preview = document.querySelector(".fullscrn");
let post = document.querySelector(".posts");
let love = document.querySelector("#imglove");
let lovebtn = document.querySelector("#lovebtn");
let title = document.querySelector(".title");
let cmnt = document.querySelector("#cmnt");

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
  title.style.display = "none";
  cmnt.style.display = "none";
  preview.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(function () {
    preview.style.display = "none";
    post.style.display = "block";
    title.style.display = "block";
    cmnt.style.display = "block";
  }, 2500);
  preview.addEventListener("dblclick", (e) => {
    preview.style.display = "none";
    post.style.display = "block";
    title.style.display = "block";
    cmnt.style.display = "block";
  });
});

// post setion-->
post.addEventListener("dblclick", (e) => {
  love.style.transform = " translate(-50%, -50%) scale(3)";
  lovebtn.style.color = "#e20909";
  lovebtn.style.transform = "scale(1.2)";

  setTimeout((e) => {
    love.style.transform = " translate(-50%, -50%) scale(0)";
    lovebtn.style.transform = "scale(1)";
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
