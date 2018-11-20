const playNote = () => {

  $('.instrument').on( 'click', 'button', function() {

    const note = $(this).html();
    document.getElementById(`${note}Audio`).play();
  });
}

$(document).ready( function() {
  playNote();
});
