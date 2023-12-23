let card= document.getElementById('Snake_card');
console.log(card);
 card.addEventListener('click', function() {
    window.location.href = '/snake';
 });
let card_b=document.getElementById("rock_card");
card_b.addEventListener('click', function() {
   window.location.href = '/rock';
});