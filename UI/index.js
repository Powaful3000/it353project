// Get - shows all items in database
const getButton = document.getElementById('get-data-button');
getButton.addEventListener('click', () => {
  const result = fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  result
    .then((res) => {
      console.log('Request complete! response:', res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const infoUI = document.getElementById('get-content-area');
      infoUI.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        infoUI.innerHTML +=
          'Name of the dish: ' + data[i].name + '. \t The total price is: $' + data[i].price + '<br>';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

// Post - inputs new entries into the database
const postButton = document.getElementById('post-button');

postButton.addEventListener('click', () => {
  const postID = document.getElementById('post-id').value;
  const postName = document.getElementById('post-name').value;
  const postprice = document.getElementById('post-price').value;



  const postData = {
    id: postID,
    name: postName,
    price: postprice,
  };

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
    .then((res) => {
      console.log('Request complete! response:', res);
      const postResponse = document.getElementById('post-content-area');
      postResponse.innerHTML = res.status;
    })
    .catch((error) => {
      const postResponse = document.getElementById('post-content-area');
      postResponse.innerHTML = error;
    });
});

// PUT - updates the database
const putBotton = document.getElementById('put-button');

putBotton.addEventListener('click', () => {
  const putID = document.getElementById('put-id').value;
  const putName = document.getElementById('put-name').value;
  const putprice = document.getElementById('put-price').value;



  const data = {
    id: putID,
    name: putName,
    price: putprice,
  };
  console.log(data);

  fetch(`http://localhost:3000/users/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log('Request complete! response:', res);
      const putResponse = document.getElementById('put-content-area');
      putResponse.innerHTML = res.status;
    })
    .catch((error) => {
      const putResponse = document.getElementById('put-content-area');
      putResponse.innerHTML = error;
    });
});

// DELETE - deletes the the ID selection in database 
const deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', () => {
  const deleteID = document.getElementById('delete-id').value;
  console.log(deleteID);
  fetch(`http://localhost:3000/users/${deleteID}`, {
    method: 'DELETE',
  })
    .then((res) => {
      console.log('Request complete! response:', res);
      const deleteResponse = document.getElementById('delete-content-area');
      deleteResponse.innerHTML = res.status;
    })
    .catch((error) => {
      const deleteResponse = document.getElementById('delete-content-area');
      deleteResponse.innerHTML = error;
    });
});
