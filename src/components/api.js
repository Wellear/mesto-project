import { apiConfig, checkResponse } from "./consts";
const getProfileData = () => {
  return fetch(`${apiConfig.apiUrl}users/me`, {
    headers: apiConfig.headers,
  }).then(checkResponse);
};
const getCadrsData = () => {
  return fetch(`${apiConfig.apiUrl}cards`, {
    headers: apiConfig.headers,
  }).then(checkResponse);
};
const postNewCard = (card) => {
  return fetch(`${apiConfig.apiUrl}cards`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: card.name,
      link: card.link,
    }),
  }).then(checkResponse);
};
const deleteCard = (id) => {
  return fetch(`${apiConfig.apiUrl}cards/${id}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(checkResponse);
};
const addLike = (id) => {
  return fetch(`${apiConfig.apiUrl}cards/likes/${id}`, {
    method: "PUT",
    headers: apiConfig.headers,
  }).then(checkResponse);
};
const removeLike = (id) => {
  return fetch(`${apiConfig.apiUrl}cards/likes/${id}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(checkResponse);
};
const updateProfileData = (data) => {
  return fetch(`${apiConfig.apiUrl}users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  }).then(checkResponse);
};
export {
  getProfileData,
  getCadrsData,
  updateProfileData,
  postNewCard,
  deleteCard,
  addLike,
  removeLike,
};
