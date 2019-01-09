/**
* EasyHTTP Library
* Library for making HTTP requests
*
* @version 2.0.0
* @author Tania Aparicio
* @license MIT
*
**/

class EasyHTTP{

  //make an HTTP GET request
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(resp => resp.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  //Make HTTP POST request
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

  //Make HTTP POST request
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

  //Make HTTP PUT request
  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

  //Make HTTP DELETE request
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(() => resolve("Resource Deleted "))
      .catch(err => reject(err))
    })
  }

}
