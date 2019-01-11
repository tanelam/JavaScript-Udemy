/**
* EasyHTTP Library
* Library for making HTTP requests
*
* @version 3 .0.0
* @author Tania Aparicio
* @license MIT
*
**/

class EasyHTTP{

  //make an HTTP GET request
  async get(url){

    const resp = await fetch(url);

    const resData = await resp.json();

    return resData;
  }


  //Make HTTP POST request
  async post(url, data){

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();

    return resData;
  }

  //Make HTTP PUT request
  async put(url, data){

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const resData = await response.json();

    return resData;
  }

  //Make HTTP DELETE request
  async delete(url){

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await "Resource Deleted";

    return resData;
  }

}
