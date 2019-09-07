window.onload = function() {
  setSiteSizes();

  window.addEventListener('resize', () => {
    setSiteSizes();  
  });
};

function setSiteSizes() {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;

  // start first screeen
  const firstHalfFirstScreen = document.querySelector('.firstHalfFirstScreen');
  const secondHalfFirstScreen = document.querySelector('.secondHalfFirstScreen');
  const height = +clientHeight;
  const firstScreenFirstHalfLineSize = 424 + (((height * 0.60) - (766 * 0.60)) * 0.755);
  const firstScreenSecondHalfLineSize = 655 + (((height * 0.40) - (766 * 0.40)) * 1.885);

  firstHalfFirstScreen.style = 
    `background: linear-gradient(41deg, #666600ce ${firstScreenFirstHalfLineSize}px, #ff000001
    ${firstScreenFirstHalfLineSize + 1}px, #ff000001 80%, #ff000001 80%)`
  ;
  
  secondHalfFirstScreen.style = 
    `background:  linear-gradient(41deg, #ffcc00b9 ${firstScreenSecondHalfLineSize}px, #333333a6
      ${firstScreenSecondHalfLineSize + 1}px, #333333a6 1%, #333333a6 1%)` // ffcc00d4
  ;

  
  firstHalfFirstScreen.style.minHeight = `${clientHeight*0.60}px`;
  secondHalfFirstScreen.style.minHeight = `${clientHeight*0.40}px`;
  // end first screeen

  
  // second screen
  const secondScreenFirstLineSize = 540 + ((height - 766) * 0.755);
  const secondScreenSecondLineSize = 1233 + ((height - 766) * 1.509);
  const secondScreen = document.querySelector('.secondScreen');
  secondScreen.style = 
    `background:  linear-gradient(41deg, #00000000 ${secondScreenFirstLineSize}px, #ffcc0099 ${secondScreenFirstLineSize + 1}px,
      #ffcc0099 ${secondScreenSecondLineSize}px, #00000000 ${secondScreenSecondLineSize + 1}px), #666600ce`
  ;

  // third screen
  const thirdScreenLineSize = 1118 + ((height - 766) * 1.509);
  const thirdScreen = document.querySelector('.thirdScreen');
  thirdScreen.style = 
    `background: linear-gradient(41deg, #3333334d 30%, #3333334d 30%, #3333334d ${thirdScreenLineSize}px,
    #ffcc0099 ${thirdScreenLineSize + 1}px), url(assets/images/service/secondScreen.jpg);
    background-size: cover;`;


  // fourth screen
  const fourthScreen = document.querySelector('.fourthScreen');
  const fourthScreenFirstLineSize = 540 + ((height - 766) * 0.755);
  const fourthScreenSecondLineSize = 1262 + ((height - 766) * 1.509);
  fourthScreen.style = 
    `background:  linear-gradient(41deg, #00000000 ${fourthScreenFirstLineSize}px, #ffcc0099 ${fourthScreenFirstLineSize + 1}px,
      #ffcc0099 ${fourthScreenSecondLineSize}px, #00000000 ${fourthScreenSecondLineSize + 1}px), #666600ce`
    // url(../assets/images/service/secondScreen.jpg); background-size: cover;`
  ;

  // fifth screen
  const fifthScreen = document.querySelector('.fifthScreen');
  const fifthScreenLineSize = 1118 + ((height - 766) * 1.509);
  fifthScreen.style = 
    `background: linear-gradient(41deg, #3333334d 30%, #3333334d 30%, #3333334d ${fifthScreenLineSize}px,
      #ffcc0099 ${fifthScreenLineSize + 1}px), url(assets/images/service/thirdScreen.jpg); background-size: cover;`
  ;


  // common sizes
  const classesForWidth = document.querySelectorAll('.header-container, .firstHalfFirstScreen, .secondHalfFirstScreen');

  classesForWidth.forEach((tag) => {
    tag.style.width = `${clientWidth}px`;
  })

  const classesForWidthAndHeight = document.querySelectorAll('.screenWidthHeight');

  classesForWidthAndHeight.forEach((tag) => {
    tag.style.width = `${clientWidth}px`;
    tag.style.minHeight = `${clientHeight}px`;
  });
}

function submitForm() {
  console.log('-');
}