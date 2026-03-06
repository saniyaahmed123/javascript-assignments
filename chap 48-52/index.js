var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var cnic = document.getElementById('cnic');
var card = document.getElementById('card');

function createProfile() {
    if (
        fname.value === "" ||
        lname.value === "" ||
        email.value === "" ||
        cnic.value === "" ||
        phone.value === ""
    ) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "fill all required fields",
        });

        return;
    }

    var fullname = fname.value + " " + lname.value;

    card.innerHTML = `
  
        <h4 class= "name">  ${fullname}</h4>
        <hr>
        <div class='info'>
        <h4>✉️ :  ${email.value}</h4>
        <h4>📞 : ${phone.value}</h4>
        <h4># CNIC: ${cnic.value}</h4>
        </div>
    `;
    card.style.display = "block"
}
function submitForm() {
    if (
        fname.value === "" ||
        lname.value === "" ||
        email.value === "" ||
        cnic.value === "" ||
        phone.value === ""
    ) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "fill all required fields",
        });

        return;
    }

    Swal.fire({
        title: "success",
        text: "your form had been submitted",
        icon: "success"
    });
}
var div = document.getElementsByClassName('div')[0];
function changeText() {
    div.innerHTML = `Sunflowers are among the most recognizable and beloved plants in the world known for their towering height and vibrant yellow petals that mimic the appearance of the sun itself These plants belong to the genus Helianthus which comes from the Greek words for sun and flower While most people associate them with a bright summer day their biological and cultural history is deep and varied

One of the most fascinating traits of a young sunflower is heliotropism During the early stages of growth the flower head actually tracks the movement of the sun across the sky from east to west This natural mechanism helps the plant maximize light absorption for photosynthesis and keeps the flower warm which in turn attracts more pollinators like bees Once the plant reaches maturity and the stem becomes woody it typically stays facing east to greet the morning light

Beyond their beauty sunflowers are highly functional and have been cultivated for thousands of years They are native to the Americas where indigenous populations used them for food oil and dye Today they remain a major global crop because their seeds are packed with healthy fats and protein The oil extracted from these seeds is a staple in kitchens worldwide due to its light flavor and high smoke point`
}






var editRow = null;

function deleteStudent(e) {
    var row = e.parentNode.parentNode;
    row.innerHTML = "";
    row.style.display = "none";
}

function updateStudent(o) {
    editRow = o.parentNode.parentNode;

    var studentNameInput = document.getElementById('studentNameInput');
    var roleNumInput = document.getElementById('studentRollInput');

    var currentName = editRow.cells[1].innerHTML;
    var currentRoleNum = editRow.cells[2].innerHTML;

    studentNameInput.value = currentName;
    roleNumInput.value = currentRoleNum;
}

function addStudent() {
    var studentName = document.getElementById('studentNameInput');
    var roleNum = document.getElementById('studentRollInput');

    if (studentName.value === "" || roleNum.value === "") {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "fill all required fields",
        });
        return;
    }

    if (editRow !== null) {
        editRow.cells[1].innerHTML = studentName.value;
        editRow.cells[2].innerHTML = roleNum.value;
        editRow = null;
    } else {
        var serialNo = tableBody.rows.length + 1;
        tableBody.innerHTML += `<tr>
                                   <td>${serialNo}</td>
                                   <td>${studentName.value}</td>
                                   <td>${roleNum.value}</td>
                                   <td><button class="btn btn-danger" onclick="deleteStudent(this)">delete</button>
                                   <button class="btn btn-warning" onclick="updateStudent(this)">update</button></td>
                                </tr>`;
    }

    studentName.value = "";
    roleNum.value = "";
}