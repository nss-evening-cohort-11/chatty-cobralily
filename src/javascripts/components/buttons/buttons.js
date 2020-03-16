import utils from '../../helpers/utils';


const settings = () => {
  let domString = '';
  domString += '<div id="settingsContainer" class="btn-group bg-dark float-right m-2">';
  domString += '<button type="button" id="themeSelectorBtns" class="btn btn-primary dropdown-toggle px-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</button>';
  domString += '<div class="dropdown-menu ml-3">';
  domString += '<a class="dropdown-item" id="largeText" href="#">Increase Text</a>';
  domString += '<a class="dropdown-item" id="standardText" href="#">Standard Text</a>';
  domString += '<a class="dropdown-item" id="light-mode" href="#">Light Mode</a>';
  domString += '<a class="dropdown-item" id="dark-mode" href="#">Dark Mode</a>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('settings', domString);
  const fontIncrease = () => {
    $('body').css({ 'font-size': '200%' });
    $('button').css({ 'font-size': '25px' });
  };
  const font = () => {
    $('body').css({ 'font-size': '' });
    $('button').css({ 'font-size': '' });
  };
  const darkTheme = () => {
    $('body').css('background-color', 'black');
    $('a').css('color', 'white');
    $('form').css('color', 'white');
    $('nav').removeClass('navbar-light');
    $('nav').removeClass('bg-light');
    $('nav').addClass('navbar-dark');
    $('nav').addClass('bg-dark');
    $('nav').css('color', 'white');
    $('#settings').removeClass('bg-light');
    $('#settings').addClass('bg-dark');
    $('#userRadioBtnContainer').addClass('bg-dark');
    $('label').css('color', 'white');
    $('.dropdown-menu').css('background-color', 'black');
    $('.dropdown-item').css('color', 'slategrey');
    $('col').css('background-color', 'black');
    $('col').css('color', 'white');
    $('col').css('border-color', 'black');
    $('#clear-all-button').removeClass('btn-primary');
    $('#clear-all-button').addClass('btn-danger');
    $('#themeSelectorBtns').removeClass('btn-primary');
    $('#themeSelectorBtns').addClass('btn-danger');
    $('#themeSelectorBtns').css('border', '0px');
    $('button').css('color', 'white');
    $('.message').removeClass('bg-white');
    $('.message').css('background-color', 'slategrey');
    $('.message').css('color', 'white');
  };
  const lightTheme = () => {
    $('body').css('background-color', '');
    $('a').css('background-color', '');
    $('a').css('color', '');
    $('form').css('background-color', '');
    $('form').css('color', '');
    $('nav').removeClass('navbar-dark');
    $('nav').removeClass('bg-dark');
    $('nav').addClass('navbar-light');
    $('nav').addClass('bg-light');
    $('nav').css('color', 'black');
    $('#settings').removeClass('bg-dark');
    $('#settings').addClass('bg-light');
    $('#userRadioBtnContainer').removeClass('bg-dark');
    $('#userRadioBtnContainer').addClass('bg-light');
    $('label').css('color', '');
    $('.dropdown-item').css('color', 'black');
    $('div').css('background-color', '');
    $('div').css('color', '');
    $('col').css('background-color', '');
    $('col').css('color', '');
    $('col').css('border-color', '');
    $('#clear-all-button').removeClass('btn-danger');
    $('#clear-all-button').addClass('btn-primary');
    $('#themeSelectorBtns').removeClass('btn-danger');
    $('#themeSelectorBtns').addClass('btn-primary');
    $('#themeSelectorBtns').css('border', '0px');
    $('button').css('color', '');
    $('.message').addClass('bg-white');
    $('.message').css('color', '');
  };

  $('#largeText').click(fontIncrease);
  $('#standardText').click(font);
  $('#dark-mode').click(darkTheme);
  $('#light-mode').click(lightTheme);
};

const getButtons = () => settings;

export default { settings, getButtons };
