
function toggleQuestions(){

  const caretArrows = document.querySelectorAll('.fa-caret-down');
  const qAnswer = document.querySelectorAll('.faq-answer');

  let openQuestion = -1;

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

          if(openQuestion !== -1 && openQuestion !== index){
            qAnswer[openQuestion].classList.add('d-none');
            caretArrows[openQuestion].classList.remove('fa-caret-up');
            caretArrows[openQuestion].classList.add('fa-caret-down');
          }

          openQuestion = index ;
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

  const questionCards = document.querySelectorAll('.question-card');

  categories.forEach((category) => {
    // console.log(category);
    category.addEventListener('click', event => {
      const categoryName = category.getAttribute('data-category');
      // console.log(categoryName);


      questionCards.forEach((card) => {

        const categoryCards = card.getAttribute('data-category');
        // console.log(categoryCards);

        if(categoryName === categoryCards){
          card.classList.remove('d-none');

        } else {
          card.classList.add('d-none');
        };

      });

      // Remove 'active-cat' class from all categories
      categories.forEach((cat) => {
        cat.classList.remove('active-cat');
      });

      // Add 'active-cat' class to the clicked category
      category.classList.add('active-cat');
    })
  })
}

toggleQuestions();
toggleCategories();
