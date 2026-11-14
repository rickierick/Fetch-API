const getData = async () => {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  return data;
};

async function fetchData() {
  console.log("Start fetching data");

  let data = await getData();
  console.log(data);
  console.log("End fetching data");
}

fetchData();
