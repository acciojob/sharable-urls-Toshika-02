// your code here
function Submit() {
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;
            const url = `https://localhost:8080/?name=${name}&year=${year}`;
            document.getElementById("url").textContent = url;
