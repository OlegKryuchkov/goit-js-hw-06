const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesListRef = document.querySelector(".gallery");

// Мінімальне оформлення списку
imagesListRef.style.display = "flex";
imagesListRef.style.justifyContent = "center";

const makeImagesListItem = ({ url, alt }) => {
  const imageListItemRef = document.createElement("li");
  imageListItemRef.insertAdjacentHTML(
    "afterbegin",
    `<img src=${url} alt=${alt}>`
  );
  // Мінімальне оформлення елементів списку
  imageListItemRef.style.display = "flex";
  imageListItemRef.style.justifyContent = "center";
  imageListItemRef.style.width = "200px";
  imageListItemRef.style.height = "200px";
  imageListItemRef.style.margin = "5px";
  imageListItemRef.style.overflow = "hidden";
  // Повертаємо результат з потрібною розміткою на місце виклику
  return imageListItemRef;
};
// для всіх заданих об'єктів викличемо функцію
const markupImagesInsert = images.map(makeImagesListItem);
// Додаємо розмітку в список
imagesListRef.append(...markupImagesInsert);
