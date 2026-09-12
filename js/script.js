function changeImage(photoId) {

  const photo = document.getElementById(photoId);

  let number = Number(photo.dataset.number);


  /* =========================
     hyde
     h → h1 → h2 → h
  ========================= */

  if (photoId === "photo1") {

    number++;

    if (number > 2) {
      number = 0;
    }

    if (number === 0) {
      photo.src = "/images/h.png";
    }

    if (number === 1) {
      photo.src = "/images/h1.png";
    }

    if (number === 2) {
      photo.src = "/images/h2.png";
    }
  }


  /* =========================
     ken
     k → k1 → k2 → k
  ========================= */

  if (photoId === "photo2") {

    number++;

    if (number > 2) {
      number = 0;
    }

    if (number === 0) {
      photo.src = "/images/k.png";
    }

    if (number === 1) {
      photo.src = "/images/k1.png";
    }

    if (number === 2) {
      photo.src = "/images/k2.png";
    }
  }


  /* =========================
     tetsu
     t → t1 → t2 → t
  ========================= */

  if (photoId === "photo3") {

    number++;

    if (number > 2) {
      number = 0;
    }

    if (number === 0) {
      photo.src = "/images/t.png";
    }

    if (number === 1) {
      photo.src = "/images/t1.png";
    }

    if (number === 2) {
      photo.src = "/images/t2.png";
    }
  }


  /* =========================
     yukihiro
     y → y1 → y2 → y3 → y
  ========================= */

  if (photoId === "photo4") {

    number++;

    if (number > 3) {
      number = 0;
    }

    if (number === 0) {
      photo.src = "/images/y.png";
    }

    if (number === 1) {
      photo.src = "/images/y1.png";
    }

    if (number === 2) {
      photo.src = "/images/y2.png";
    }

    if (number === 3) {
      photo.src = "/images/y3.png";
    }
  }


  /* 現在の番号を保存 */

  photo.dataset.number = number;
}