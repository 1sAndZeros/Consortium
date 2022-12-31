// USED FOR IMPORTING LIBRARIES SUCH AS AXIOS ETC.
import axios from "axios";

APIurl = 'https://consortium-api.onrender.com/api/v1/';

export default function getCountries() {
  const countriesURL = `APIurl${countries}`;

  axios.get(countriesURL).then(function(response) {
      // handle success
      return (response.data.response);
      ;
      // dataArray.forEach(country => {
      // console.log(country.name);
      // });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}
