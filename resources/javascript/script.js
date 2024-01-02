let project1 = document.getElementById('project-1');
let project2 = document.getElementById('project-2');
let numberGuesser = document.getElementById('numberguesser');
let messageGenerator = document.getElementById('mixed-message');

let toggleProject1 = () => {
   if(project1.style.display === 'none'){
      project1.style.display = 'block';
      numberGuesser.innerHTML = '- Number Guesser Game -'
   } else {
      project1.style.display = 'none'
      numberGuesser.innerHTML = '> Number Guesser Game <';
   }
   
}
let toggleProject2 = () => {
   if(project2.style.display === 'none'){
      project2.style.display = 'block';
      messageGenerator.innerHTML = '- Daily Motivational Message Generator -';
   }else {
      project2.style.display = 'none';
      messageGenerator.innerHTML = '> Daily Motivational Message Generator <';
   }
}
numberGuesser.onclick = toggleProject1;
messageGenerator.onclick = toggleProject2;