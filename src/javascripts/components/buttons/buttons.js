import utils from '../../helpers/utils';


const settings = () => {
  let domString = '';
  domString += '<div class="btn-group bg-light float-right m-2">';
  domString += '<button type="button" class="btn btn-outline-success dropdown-toggle px-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</button>';
  domString += '<div class="dropdown-menu ml-3">';
  domString += '<a class="dropdown-item" id="largeText" href="#">Increase Text</a>';
  domString += '<a class="dropdown-item" id="standardText" href="#">Standard Text</a>';
  domString += '<a class="dropdown-item" id="light-mode" href="#">Light Mode</a>';
  domString += '<a class="dropdown-item" id="dark-mode" href="#">Dark Mode</a>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('settings', domString);
  const fontIncrease = () => {
    $('.fontIncrease').css({ 'font-size': '200%' });
  };
  const font = () => {
    $('.standard').css({ 'font-size': '' });
  };
  $('#largeText').click(fontIncrease);
  $('#standardText').click(font);
};
$(document).ready(() => {
  $('#dark-mode').click(() => {
    $('body').css('background-color', 'black');
    $('a').css('background-color', 'black');
    $('a').css('color', 'white');
    $('form').css('background-color', 'black');
    $('form').css('color', 'white');
    $('nav').css('background-color', 'black');
    $('nav').css('color', 'white');
    $('#settings').css('background-color', 'black');
    $('div').css('background-color', 'black');
    $('div').css('color', 'white');
    $('col').css('background-color', 'black');
    $('col').css('color', 'white');
    $('col').css('border-color', 'black');
    $('button').css('background-color', 'black');
    $('button').css('color', 'white');
    $('border').css('background-color', 'black');
    $('border').css('color', 'white');
  });
});
$(document).ready(() => {
  $('#light-mode').click(() => {
    $('body').css('background-color', '');
    $('a').css('background-color', '');
    $('a').css('color', '');
    $('form').css('background-color', '');
    $('form').css('color', '');
    $('#settings').css('background-color', '');
    $('div').css('background-color', '');
    $('div').css('color', '');
    $('col').css('background-color', '');
    $('col').css('color', '');
    $('col').css('border-color', '');
    $('button').css('background-color', '');
    $('button').css('color', '');
    $('border').css('background-color', '');
    $('border').css('color', '');
  });
});
export default { settings };
