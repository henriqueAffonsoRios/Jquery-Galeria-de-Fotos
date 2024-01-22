$(document).ready(function() {
  $('header button').click(function(){
    $('form').slideDown();
  })

  $('#reset-btn').click(function(){
    $('form').slideUp();
  })

  $('form').on('submit', function(e){
    e.preventDefault();
    const urlNovaImg = $('#url-novaImg').val();
    const novoItem = $('<li style="display: none"></li>');

    $(`<img src="${urlNovaImg}" />`).appendTo(novoItem);
    $(`
      <div class="overlay-img-link">
        <a href="${urlNovaImg}" target="_blank" title="Ver imagem em tamanho real">
          Ver imagem em tamanho real
        </a>
      </div>
    `).appendTo(novoItem);

    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(500);
    $('#url-novaImg').val('');
  })
})
