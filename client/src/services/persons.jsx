import axios from 'axios'

const apiUrl = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_LOCAL
  : import.meta.env.VITE_API_URL_PROD
console.log('api', apiUrl)
const baseUrl = `${apiUrl}/api/persons`
console.log('baseurl:', baseUrl)
// Retrieve all entries from the server
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((res) => res.data)
}

// Create an entry on the server
const create = (newEntry) => {
  const request = axios.post(baseUrl, newEntry)
  return request.then((res) => res.data)
}

// Update an entry on the server by replacement
const update = (id, newEntry) => {
  const request = axios.put(`${baseUrl}/${id}`, newEntry)
  return request.then((res) => res.data)
}

const deleteEntry = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
}

export default { getAll, create, update, deleteEntry }
