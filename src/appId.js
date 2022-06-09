import axios from 'axios';

const appId = async () => {
  if (localStorage.getItem('appId') === null) {
    await axios({
      method: 'POST',
      url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
    });
    localStorage.setItem('appId', JSON.stringify('m6fXzWxWXOmIbHtAiJlt'));
  }
};
export default appId;
