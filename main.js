$(document).ready(function() {
    $('form').on("submit", function(e) { 
        e.preventDefault();
        const atividade = $('#text-box').val();
        const element_div = $('<div id="test"></div>');
        $(`<p>${atividade}</p>`).appendTo(element_div);
        $(element_div). appendTo('tbody');
        $('#text-box').val('')
    })

    $('tbody').on('click','p', function(){
        $( this ).toggleClass( "riscar" );
    })
})