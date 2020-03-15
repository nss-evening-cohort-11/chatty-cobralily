import utils from '../../helpers/utils';


const settings = () => {
  let domString = '';
  domString += '<div class="btn-group bg-light float-right m-2">';
  domString += '<button type="button" class="btn btn-outline-success dropdown-toggle px-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</button>';
  domString += '<div class="dropdown-menu ml-3">';
  domString += '<a class="dropdown-item" id="largeText" href="#">Increase Text</a>';
  domString += '<a class="dropdown-item" id="standardText" href="#">Standard Text</a>';
  domString += '<a class="dropdown-item" href="#">Light Mode</a>';
  domString += '<a class="dropdown-item" href="#">Dark Mode</a>';
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

export default { settings };
