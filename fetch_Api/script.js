const url = "https://www.course-api.com/react-tours-project";

// fetch(url)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//
// .then method - fethcing an url
//
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });

//
//async await method - fetching an url
//
const getUrl = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUrl();

//
// Fetch Errors
//
const getErrors = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const msg = `There was an error "${res.status} ${res.statusText}"`;
      throw new Error(msg);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getErrors();
