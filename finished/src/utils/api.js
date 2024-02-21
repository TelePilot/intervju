export const fetchUserData = async (id) => {
  try {
    //both the fetch (not common, network/cors errors) and json can error(Syntax) trycatch or promise chaining is needed.
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    // if you want to check that you got a 200 back you need to do an if (res.ok).
    const data = await res.json();
    return data;
  } catch (error) {
    //bonus points for error handling, can this function return anything to the UI?
    console.log(error);
  }
};
