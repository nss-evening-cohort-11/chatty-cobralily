import utils from '../../helpers/utils';


const settings = () => {
  let domString = '';
  domString += '<div class="navbar navbar-light bg-light">';
  domString += '<p>View Settings:</p>';
  domString += '<button id="largeText">Increase Text Size</button>';
  domString += '</h2>';
  domString += '<div>';
  utils.printToDom('settings', domString);
  const fontIncrease = () => {
    $('.fontIncrease').css({'font-size': '200%'});
  };

  $('#largeText').click(fontIncrease);
};

export default { settings };
