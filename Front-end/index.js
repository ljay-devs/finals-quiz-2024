/* (async () => {
    try {
        const response = await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxg8FQ25B6bWR2lkk9vUWtMgydfjzPV7l2og&s') 
        console.log(response) 
        const blob = await response.blob() 
        console.log(blob)
        document.querySelector('#myImage').src = URL.createObjectURL(blob) 
    } catch (err) {
        console.log(err)
    }
})()



 */// id selector
 const content = document.querySelector("tbody") 
 const update = document.querySelector("#update")
 // Loading page
 window.addEventListener("load", () => {
     getUsers() 
 }) 
 
 async function getUsers() {
     let html = "" 
     try {
         const response = await fetch("http://localhost:6969/api/members", { mode: "cors" }) 
         console.log(response) 
         const data = await response.json();
         const tbody = document.getElementById('tbody');
         tbody.innerHTML = ''; // Clear existing data
 
         data.forEach(element => {
             const row = document.createElement('tr');
             row.innerHTML = `
                 <td>${element.id}</td>
                 <td>${element.first_name} ${element.last_name}</td>
                 <td>${element.email}</td>
                 <td style="display: flex;">
                     <button class="btn btn-success" style=" margin-right: 5px;" onclick="acceptAppointment()">edit</button>
                     <button class="btn btn-danger" onclick="deleteMember(${element.id})">delete</button>
                 </td>
             `;
            content.appendChild(row);

         });
     } catch (error) {
         console.log(error) 
     }
 }


 async function deleteMember(id) {

    let text = "Press a button!\nEither Delete or Cancel." 
    if (confirm(text) == true) {
        try {
            let fromData= {id}
            const response = await fetch(`http://localhost:6969/api/members/delete/${id}`, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(fromData)
            }) 
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`) 
            }
    
            const data = await response.json()
            console.log(data) 
        } catch (error) {
            console.error('Error:', error)
        }
    } else {
      alert("not deleted")
    }
    
}
/* async function editMember(id) {
    try {
        const response = await fetch(`http://localhost:6969/api/members/${id}`, {
            mode: "cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }) 

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`) 
        }

        const data = await response.json() 
        if (data && data.length > 0) {
            document.querySelector("#name").value = data[0].first_name 
            document.querySelector("#lname").value = data[0].last_name 
            document.querySelector("#email").value = data[0].email 
            document.querySelector("#gender").value = data[0].gender 
            document.getElementById("ID").value = data[0].id 
        } else {
            throw new Error('No data returned from the server') 
        }
    } catch (error) {
        console.error('Error:', error) 
    }
} */
/* 
document.querySelector("#update").addEventListener("click", async () => {
    const fname = document.querySelector("#name").value 
    const lname = document.querySelector("#lname").value 
    const email = document.querySelector("#email").value 
    const gender = document.querySelector("#gender").value 
    const id = document.querySelector("#ID").value 

    let formData = {
        fname,
        lname,
        email,
        gender,
        id
    } 

    try {
        const response = await fetch(`http://localhost:6969/api/members/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }) 

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`) 
        }

        const data = await response.json() 
        console.log(data) 
    } catch (error) {
        console.error('Error:', error) 
    }
}) 


 document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#submit").addEventListener("click", async () => {
        const fname = document.querySelector("#name").value 
        const lname = document.querySelector("#lname").value 
        const email = document.querySelector("#email").value 
        const gender = document.querySelector("#gender").value 

        try {
            const response = await fetch("http://localhost:6969/api/members/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                    gender
                })
            }) 

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`) 
            }

            const data = await response.json() 
            console.log(data) 
        } catch (error) {
            console.error('Error:', error) 
        }
    }) 
})  */


