import client from "../providers/client";

// export const listPets = () =>
//   client.get("pets/0rp4knn/a398510e-0800-47c2-94c1-29c990ac2bb7");

export const getPets = () => {
  const api_code = process.env.REACT_APP_API_CODE;
  const response = client.get(`/pets/${"0e7ndbh"}`);
  return response;
};

export const postPets = (data) => {
  const api_code = process.env.REACT_APP_API_CODE;
  const posted = client.post(`/pets/${"0e7ndbh"}`, data);
  return posted;
};
