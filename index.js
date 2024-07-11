function validate() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("Email").value;

  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regName = /\d+/;

  if (name.trim() === "" || regName.test(name)) {
    alert("All fields are essential, and name should not contain numbers.");
    return false;
  } else if (email.trim() === "" || !regEmail.test(email)) {
    alert("Please enter a valid e-mail address.");
    return false;
  }
  return true;
}

document.getElementById("img1").addEventListener("mouseover", () => {
  document.getElementById("img1").src = "images/mouseover.png";
});
document.getElementById("img1").addEventListener("mouseout", () => {
  document.getElementById("img1").src = "images/web1.jpg";
});

document.getElementById("img2").addEventListener("mouseover", () => {
  document.getElementById("img2").src = "images/mouseover.png";
});
document.getElementById("img2").addEventListener("mouseout", () => {
  document.getElementById("img2").src = "images/web3.jpg";
});

document.getElementById("img3").addEventListener("mouseover", () => {
  document.getElementById("img3").src = "images/mouseover.png";
});
document.getElementById("img3").addEventListener("mouseout", () => {
  document.getElementById("img3").src = "images/web.jpg";
});

document.getElementById("img4").addEventListener("mouseover", () => {
  document.getElementById("img4").src = "images/mouseover.png";
});
document.getElementById("img4").addEventListener("mouseout", () => {
  document.getElementById("img4").src = "images/web2.jpg";
});

document.getElementById("img5").addEventListener("mouseover", () => {
  document.getElementById("img5").src = "images/mouseover.png";
});
document.getElementById("img5").addEventListener("mouseout", () => {
  document.getElementById("img5").src = "images/web4.jpg";
});

document.getElementById("img6").addEventListener("mouseover", () => {
  document.getElementById("img6").src = "images/mouseover.png";
});
document.getElementById("img6").addEventListener("mouseout", () => {
  document.getElementById("img6").src = "images/web5.png";
});

//toggle(show more/less)
document.addEventListener("DOMContentLoaded", function () {
  let gallery = document.querySelector(".gallery");
  let images = gallery.querySelectorAll("img");

  function toggleImages() {
    for (let i = images.length - 3; i < images.length; i++) {
      images[i].classList.toggle("hidden");
    }
  }

  let toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Show less";

  toggleBtn.addEventListener("click", function () {
    toggleImages();

    toggleBtn.textContent =
      toggleBtn.textContent === "Show less" ? "Show more" : "Show less";
  });

  let portfolioSection = document.getElementById("Portfolio");
  portfolioSection.appendChild(toggleBtn);
});

// hightlight funx
document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("highlight");
      });

      link.classList.add("highlight");
    });
  });
});
//aboutsec mouseover & mouseout funx
document.addEventListener("DOMContentLoaded", function () {
  let picContainer = document.querySelector(".pic");
  let picImage = picContainer.querySelector("img");

  picImage.addEventListener("mouseover", function () {
    picContainer.style.backgroundColor = "blue";
    picImage.style.transform = "scale(1.05)";
    picImage.style.transition = "transform 0.3s ease-in-out";
  });

  picImage.addEventListener("mouseout", function () {
    picContainer.style.backgroundColor = "";
    picImage.style.transform = "scale(1)";
  });
});