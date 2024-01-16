export const fetchUserData = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
