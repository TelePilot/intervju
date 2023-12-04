export const fetchUserData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //potentiell bug?
  const data = await res.json();
  return data;
};
