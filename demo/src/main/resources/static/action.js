const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8080/postmap");
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
const body = JSON.stringify({
  userId: 1,
  title: "Fix my bugs",
  completed: false
});
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send(body);