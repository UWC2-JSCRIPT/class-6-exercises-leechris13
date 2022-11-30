$( document ).ready(function() {
    const $liItems = $('li');

    //$liItems[2].className = 'highlight'
    $('li:nth-of-type(3)').addClass("highlight")
    const $img = $('img')
    const imgColor = $img.data('color')
    console.log(imgColor)
    const $main = $('main')
    const $para = $('p')
    let $newAtt = $('<a>')
    $newAtt.text('Buy Now!')
    $newAtt.attr("id",'cta')

    $main.append($newAtt)

    $para.remove()

    $newAtt.click(function() {
        $newAtt.text('Added to cart')
    })
})
// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
