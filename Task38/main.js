const question = document.querySelectorAll('.accordion-question');
question.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    document.querySelectorAll('.accordion-answer').forEach((a) => {
      if (a !== answer) {
        a.classList.remove('active');
      }
    });
    answer.classList.toggle('active');
  });
});
