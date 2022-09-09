// ----- VARIJABLE -----
const form = document.querySelector(".form");
const names = document.querySelector(".fullName");
const number = document.querySelector(".phoneNumber");
const address = document.querySelector(".residentalAddress");

const homeNumber = document.querySelector(".homeNumber");
const cityNumber = document.querySelector(".zipCity");
const city = document.querySelector(".city");
const email = document.querySelector(".email");
const mark = document.querySelector(".mark");
const feedback = document.querySelector(".feedback");
const button = document.querySelector(".button");

const modal = document.querySelector(".modal");
const buy = document.querySelector(".btn-buy");

const close = document.querySelector(".btn-close");
// ----- VARIJABLE -----

// ----- EVENTI -----
form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.remove("modal-open");
  modal.classList.add("modal-closed");


  const imeprezime = checkName(names);
  console.log(imeprezime);
  if (!imeprezime) {
    names.value = "";
  }

  const broj = checkTelNum(number.value);
  console.log(broj);
  if (!broj) {
    number.value = "";
  }

  const addresname = checkAddress(address);
  console.log(addresname);
  if (!addresname) {
    address.value = "";
  }

  const homeNum = checkHomeNum(homeNumber);
  console.log(homeNum);
  if (!homeNum) {
    homeNumber.value = "";
  }

  const postNum = checkZipNum(cityNumber);
  console.log(postNum);
  if (!postNum) {
    cityNumber.value = "";
  }

  const cityName = checkCity(city);
  console.log(cityName);
  if (!cityName) {
    city.value = "";
  }

  const emailinput = emailCheck(email);
  console.log(emailinput);
  if (!emailinput) {
    email.value = "";
  }
  const marktext = markCheck(mark);
  console.log(marktext);
  if (!marktext) {
    mark.value = "";
  }
});
// ----- FUNKCIJA -----

const checkName = (names) => {
  const provjera = names.value.length;
  if (provjera > 0) {
    return names.value;
  } else {
    return false;
  }
};

const checkTelNum = (number) => {
  const provjera = number.length;
  if ((provjera) => 9) {
    return number;
  } else {
    return false;
  }
};

const checkAddress = (address) => {
  const provjera = address.value.length;
  if (provjera > 0) {
    return address.value;
  } else {
    return false;
  }
};

const checkHomeNum = (homeNumber) => {
  const provjera = homeNumber.value.length;
  if (provjera > 0) {
    return homeNumber.value;
  } else {
    return false;
  }
};

const checkZipNum = (cityNumber) => {
  const provjera = cityNumber.value.length;
  if (provjera > 0) {
    return cityNumber.value;
  } else {
    return false;
  }
};
const checkCity = (city) => {
  const provjera = city.value.length;
  if (provjera > 0) {
    return city.value;
  } else {
    return false;
  }
};
const emailCheck = (email) => {
  const provjera = email.value.length;
  if (provjera > 0) {
    return email.value;
  } else {
    return false;
  }
};
const markCheck = (mark) => {
  const provjera = mark.value.length;
  if (provjera > 0) {
    return mark.value;
  } else {
    return "Bez napomene";
  }
};
// ----- FUNKCIJA -----



// modal
buy.addEventListener("click", () => {
  modal.classList.remove("modal-closed");
  modal.classList.add("modal-open");

});
close.removeEventListener("click",()=>{
  modal.classList.close("modal.open");
})
