var storiyan = document.querySelector("#storiyan");

var arr = [
  {
    dp: "https://images.unsplash.com/photo-1617688893827-c388dc537eb8?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
    story:
      "https://images.unsplash.com/photo-1622782781022-1e8ac44cfa04?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1612907181708-6ab9d5fbd292?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRiaWtlfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1571587289339-cb7da03fb5a6?auto=format&fit=crop&q=80&w=1450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    dp: "https://i.pinimg.com/originals/a3/fb/5d/a3fb5def518705c9cc739299234c2779.jpg",
    story:
      "https://qph.cf2.quoracdn.net/main-qimg-433261c8357fe6692366a7b334449b66-lq",
  },
  {
    dp: "https://images.unsplash.com/photo-1579214808892-4498a0a869ab?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1586752488885-6ce47fdfd874?auto=format&fit=crop&q=80&w=1513&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += ` <div class="story">
  <img src="${elem.dp}" id="${idx}" alt="">       

  </div>`;
});
storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function (dets) {
  // arr[dets.target.id].story;
  document.querySelector(" #full-scrn").style.display = "block";
  document.querySelector(" #full-scrn").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;
  setTimeout(function () {
    document.querySelector(" #full-scrn").style.display = "none";
  }, 3000);
});
