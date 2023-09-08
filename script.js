let clickedCard = null;
let preventClick = false;
let combosFound = 0;

function onCardClicked(e) {
  const target = e.currentTarget;

  if (preventClick || target === clickedCard || target.className.includes('done')) {
    return;
  }

   target.className = target.className.replace ('card-hidden', '')
   .trim();
   target.className += ' done';

  if (!clickedCard) {
    clickedCard = target;
   } else if (clickedCard) {
    if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) {
      preventClick = true;
      setTimeout(() => {
        clickedCard.className = 
        clickedCard.className.replace('done', '').trim() + ' card-hidden';
        target.className = 
        target.className.replace('done', '').trim() + ' card-hidden';
        clickedCard = null;
        preventClick = false;
      }, 500);
    } else {
      combosFound++;
      clickedCard = null;
      if (combosFound === 8) {
        alert('YOU WIN!!');
      }
    }
   }

}

