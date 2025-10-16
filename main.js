const timeElement = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  timeElement.textContent = `Current Time: ${Date.now()}`;
}
updateTime();
setInterval(updateTime, 1000);

const avatarImage = document.getElementById("avatarImage");

const avatarUrl = "https://i.postimg.cc/cCwg0Zqw/joel.jpg";

avatarImage.src = avatarUrl;
