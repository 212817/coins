import $api from '../../API/apiDB'

export const fetchUsers = () => {
  return $api.get('/users')
}
