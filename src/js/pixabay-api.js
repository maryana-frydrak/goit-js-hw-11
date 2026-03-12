export function getImagesByQuery(query) {
  const API_KEY = '54988394-76eeb0dc25d7c96559704c852';
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: photo,
    orientation: horizontal,
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
