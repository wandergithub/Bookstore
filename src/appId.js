import axios from 'axios';

const appId = async () => {
  if (localStorage.getItem('appId') === null) {
    const response = await axios({
      method: 'POST',
      url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
    });
    localStorage.setItem('appId', JSON.stringify(response.data));
  }
};
export default appId;
