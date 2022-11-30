$(document).ready(function() {
  
  
  const $li = $('li')
  const $delete = $('.delete')
  
  $('body').click(function(e) {
    let target = e.target
    console.log(target)
  })

  /**
   * Toggles "done" class on <li> element
   */

  $(document).on('click', 'li', function() {
    $(this).toggleClass('done')
  })

  /**
   * Delete element when delete link clicked
   */

  $(document).on('click', '.delete', function() {
    $(this).parent().remove()
  })

  $('.add-item').click(function(event) {
    addListItem(event);
  })
  
})


/**
 * Adds new list item to <ul>
 */
const addListItem = function(event) {
  event.preventDefault();
  const text = $('input').val();
  if(text){
    let $newLi = $('<li>')
    let $newSpan = $('<span>')
    let $newAtt = $('<a>')
    $newAtt.addClass('delete')
    $newAtt.html('Delete')
    $newSpan.html(text)

    $newLi.append($newSpan)
    $newLi.append($newAtt)
    $('ul').append($newLi)
  }
  
  // rest here...
};

// add listener for add
