const submitBtn = document.getElementById('submit-btn');
const userDataDisplay = document.getElementById('data-display');

let usersData = [];

function displayData() {
    userDataDisplay.innerHTML = ''; 

    if (usersData.length === 0) {
        userDataDisplay.innerHTML = '<p>No data available.</p>';
        return;
    }

    
    usersData.forEach((user, index) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-data-entry');
        
        userDiv.innerHTML = `
            <p><strong>Name:</strong> ${user.firstname} ${user.middleini} ${user.lastname}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Biological Sex:</strong> ${user.gender}</p>
            <p><strong>Insurance ID Number:</strong> ${user.insidnum}</p>
            <p><strong>Insurance Plan:</strong> ${user.instype}</p>
            <p><strong>Insurance Payment:</strong> ₱${user.payment}</p>
            <button onclick="editUser(${index})">Edit</button>
            <button onclick="deleteUser(${index})">Delete</button>
            <hr>
        `;

        userDataDisplay.appendChild(userDiv);
    });
}


submitBtn.addEventListener('click', () => {
    const lastname = document.getElementById('lastname').value;
    const firstname = document.getElementById('firstname').value;
    const middleini = document.getElementById('middleini').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const insidnum = document.getElementById('insidnum').value;
    const instype = document.getElementById('instype').value;
    const payment = document.getElementById('payment').value;

    if (lastname && firstname && middleini && age && gender && insidnum && instype && payment) {
        
        usersData.push({
            lastname,
            firstname,
            middleini,
            age,
            gender,
            insidnum,
            instype,
            payment
        });

        
        document.getElementById('lastname').value = '';
        document.getElementById('firstname').value = '';
        document.getElementById('middleini').value = '';
        document.getElementById('age').value = '';
        document.getElementById('gender').value = 'Male' || 'Female';
        document.getElementById('insidnum').value = '';
        document.getElementById('instype').value = '';
        document.getElementById('payment').value = '';

        
        displayData();
        submitBtn.textContent = 'Submit';
    } else {
        alert('Please fill in all fields.');
        submitBtn.textContent = 'Submit';
    }
});


function editUser(index) {
    const user = usersData[index];

    
    document.getElementById('lastname').value = user.lastname;
    document.getElementById('firstname').value = user.firstname;
    document.getElementById('middleini').value = user.middleini;
    document.getElementById('age').value = user.age;
    document.getElementById('gender').value = user.gender;
    document.getElementById('insidnum').value = user.insidnum;
    document.getElementById('instype').value = user.instype;
    document.getElementById('payment').value = user.payment;

    
    usersData.splice(index, 1);

    
    submitBtn.textContent = 'Update';
    submitBtn.addEventListener = function() {
        
        user.lastname = document.getElementById('lastname').value;
        user.firstname = document.getElementById('firstname').value;
        user.middleini = document.getElementById('middleini').value;
        user.age = document.getElementById('age').value;
        user.gender = document.getElementById('gender').value;
        user.insidnum = document.getElementById('insidnum').value;
        user.instype = document.getElementById('instype').value;
        user.payment = document.getElementById('payment').value;

        
        document.getElementById('lastname').value = '';
        document.getElementById('firstname').value = '';
        document.getElementById('middleini').value = '';
        document.getElementById('age').value = '';
        document.getElementById('gender').value = 'Male' || 'Female';
        document.getElementById('insidnum').value = '';
        document.getElementById('instype').value = '';
        document.getElementById('payment').value = '';

        
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener = function () {
            
            usersData.push({
                lastname,
                firstname,
                middleini,
                age,
                gender,
                insidnum,
                instype,
                payment
            });
            displayData();
        };

        
        displayData();
    };
}


function deleteUser(index) {
    usersData.splice(index, 1); 
    displayData();  
}
