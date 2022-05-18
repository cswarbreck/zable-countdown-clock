document.addEventListener('DOMContentLoaded', () => {
    const countDownDate = new Date("May 18, 2022 16:00:00").getTime();
    // const countDownDate = new Date("April 28, 2022 12:00:00").getTime();

    const countdown = setInterval(() => {
    
      const now = new Date().getTime();
    
      const timeLeft = countDownDate - now;
    
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      const d = '<span class="countdown-d">d</span>';
      const h = '<span class="countdown-h">h</span>';
      const m = '<span class="countdown-m">m</span>';
      const s = '<span class="countdown-s">s</span>';

      document.getElementById("countdown").innerHTML = `${days} ${d} ${hours} ${h} ${minutes} ${m} ${seconds} ${s}`;
    
      if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "LAUNCH!!!";
        document.getElementById("pyro").style.display = "block";
      }

    }, 1000);
});
