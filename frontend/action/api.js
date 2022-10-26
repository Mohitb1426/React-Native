const API_BASE_ADDRESS = 'https://jsonplaceholder.typicode.com';

export default class Api {
  static getUsers() {
    const uri = API_BASE_ADDRESS + '/posts';

    return fetch(uri, {
      method: 'GET',
    });
  }
}
