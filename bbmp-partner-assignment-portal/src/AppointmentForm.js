// storeData.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function storeUserData(date, time, city, zip) {
  try {
    await addDoc(collection(db, "userSelections"), {
      date: date,
      time: time,
      city: city,
      zipCode: zip
    });
    alert("Data successfully stored!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Assuming you have an event listener on form submission
document.getElementById("userForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const city = document.getElementById("city").value;
  const zip = document.getElementById("zip").value;

  await storeUserData(date, time, city, zip);
});
