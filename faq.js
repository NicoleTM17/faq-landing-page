
function toggleQuestions(){

  const caretArrows = document.querySelectorAll('.fa-caret-down');
  const qAnswer = document.querySelectorAll('.faq-answer');


  caretArrows.forEach((arrow, index) => {

    arrow.addEventListener('click', event => {
      qAnswer.forEach((answer, aindex) => {
        if(index === aindex){
          answer.classList.toggle('d-none');
          if(arrow.classList.contains('fa-caret-down')){
            arrow.classList.remove('fa-caret-down');
            arrow.classList.add('fa-caret-up');
          } else if (arrow.classList.contains('fa-caret-up')){
            arrow.classList.remove('fa-caret-up');
            arrow.classList.add('fa-caret-down');
          }

        } else {
          answer.classList.add('d-none');
        }
      })
    })
  })


}

// Next I need to make each category clickable/toggleable so that when they are clicked
// you are taken to a new set of questions corresponding to the category
// So essentially, I need to edit the 'faq-question' and 'faq-answer' accordingly.

function toggleCategories(){

  const categories = document.querySelectorAll('.faq-category');
  // console.log(categories);

  const questions = document.querySelectorAll('.faq-question');
  // console.log(questions);

  const answers = document.querySelectorAll('.faq-answer');
  // console.log(answers);

  categories.forEach((category, index) => {
    // console.log(category);
    category.addEventListener('click', event => {
      console.log(event);
    })
  })


}





toggleQuestions();
toggleCategories();
