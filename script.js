window.onscroll = () => {
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
    backToTheTopBtn.style.display = "block";
  } else {
    backToTheTopBtn.style.display = "none";
  }
}

const init = () => {
  const backToTheTop = () => {
    document.getElementById("backToTheTopBtn").addEventListener("click", () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  };

  backToTheTop();
}

window.onload = init;


