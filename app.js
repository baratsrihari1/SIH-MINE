// Handle form submission
document.getElementById("queryForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("farmerName").value.trim();
  const crop = document.getElementById("cropType").value.trim();
  const query = document.getElementById("queryText").value.trim();
  const message = document.getElementById("formMessage");
  const adviceOutput = document.getElementById("adviceOutput");

  if (name === "" || crop === "" || query === "") {
    message.textContent = "⚠️ Please fill in all fields!";
    message.style.color = "red";
    return;
  }

  // Simulated advice based on crop type
  let advice = "";

  if (crop.toLowerCase() === "rice") {
    advice = "For rice crops, ensure proper water management and check for leaf blight regularly.";
  } else if (crop.toLowerCase() === "wheat") {
    advice = "For wheat, use certified seeds and watch for rust disease symptoms.";
  } else if (crop.toLowerCase() === "cotton") {
    advice = "For cotton, manage pests like bollworms and avoid waterlogging.";
  } else {
    advice = "General advice: Maintain soil health, use organic fertilizers, and consult local experts.";
  }

  adviceOutput.innerHTML = `
    <h3>Dear ${name},</h3>
    <p><strong>Crop:</strong> ${crop}</p>
    <p><strong>Your Query:</strong> ${query}</p>
    <p><strong>Our Advice:</strong> ${advice}</p>
  `;

  message.textContent = "✅ Query submitted successfully!";
  message.style.color = "green";

  // Reset form
  document.getElementById("queryForm").reset();
});
