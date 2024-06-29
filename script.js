let slideIndex = 0;
showSlides(slideIndex);
autoSlide();

function plusSlides(n)
{
  showSlides((slideIndex += n));
}

function showSlides(n)
{
  const slides = document.getElementsByClassName("slide");

  if (n >= slides.length)
  {
    slideIndex = 0;
  }
  else if (n < 0)
  {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function validateForm()
{
  var name = document.getElementById('name').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var email = document.getElementById('email').value.trim();
  var email = document.getElementById('message').value.trim();
  
  if (name === '' || phone === '' || email === '' || message == '')
  {
    alert('Please fill in all fields');
    return false;
  }
  return true;
}