const createData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const array = Array(25).fill(1);
      resolve(array);
    }, 200);
  });
};

const getData = async () => {
  const data = await createData();
  appendData(data);
};

getData();

const appendData = (array) => {
  array.forEach(() => {
    const para = document.createElement("p");
    const text = document.createTextNode("Masai School");
    para.appendChild(text);
    document.getElementById("root").appendChild(para);
  });
};

window.addEventListener("scroll", () => {
  const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight) getData();
});
