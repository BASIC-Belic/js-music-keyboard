const clickPlay = () => {
  $('.instrument').on( 'click', 'button', function() {

    const clickNote = $(this).html();
    // alert(`${clickNote}Audio`);

    const note = document.getElementById(`${clickNote}Audio`).play();
    note.load();
    note.play();

    // return `${clickNote}Audio` and call this in $(document).ready
  });
}

const typePlay = () => {

  const notes = ["c", "d", "e", "f", "g", "a", "b"];

  $('body').keydown(function(event) {
    const eventNote = event.key;

    if(!notes.includes(eventNote)) {
      alert(`This note: ${eventNote} is not valid.`)
    }

    const note = document.getElementById(`${eventNote}Audio`);
    note.load();
    note.play();
    // alert(`${eventNote}Audio`);
    // return `${eventNote}Audio` and call this in $(document).ready
  });
}

$(document).ready( function() {

  clickPlay();
  typePlay();
});
