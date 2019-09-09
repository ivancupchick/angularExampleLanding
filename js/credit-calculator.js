class Percentages {
  constructor(
    _0,
    _5,
    _10,
    _15,
    _20,
    _25,
    _30,
    _35,
    _40,
    _45,
    _50,
    _55,
    _60,
    _65,
    _70,
    _75,
    _80,
    _85,
    _90,
  ) {
    this[0] = _0;
    this[5] = _5;
    this[10] = _10;
    this[15] = _15;
    this[20] = _20;
    this[25] = _25;
    this[30] = _30;
    this[35] = _35;
    this[40] = _40;
    this[45] = _45;
    this[50] = _50;
    this[55] = _55;
    this[60] = _60;
    this[65] = _65;
    this[70] = _70;
    this[75] = _75;
    this[80] = _80;
    this[85] = _85;
    this[90] = _90;
  }
}

const percentagesForPFOldCredit = {
  6: new Percentages(15.55, 15.55, 13.70, 13.70, 13.50, 13.50, 13.30, 13.30, 12.99, 12.99, 12.7,
                      12.7, 11.99, 11.99, 11.00, 11.00, 11.00, 11.00, 11.00),

  12: new Percentages(15.55, 15.55, 13.70, 13.70, 13.50, 13.50, 13.30, 13.30, 12.99, 12.99, 12.7,
                      12.7, 11.99, 11.99, 11.00, 11.00, 11.00, 11.00, 11.00),

  18: new Percentages(15.55, 15.55, 15.55, 15.55, 14.50, 14.50, 14.30, 14.30, 13.99, 13.99, 13.7,
                      13.7, 13.15, 13.15, 12.20, 12.20, 12.20, 12.20, 12.20),

  24: new Percentages(15.55, 15.55, 15.55, 15.55, 14.50, 14.50, 14.30, 14.30, 13.99, 13.99, 13.7,
                      13.7, 13.15, 13.15, 12.20, 12.20, 12.20, 12.20, 12.20),

  30: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.70, 14.70, 14.50, 14.50, 14.1,
                      14.1, 13.60, 13.60, 12.70, 12.70, 12.70, 12.70, 12.70),

  36: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.70, 14.70, 14.50, 14.50, 14.1,
                      14.1, 13.60, 13.60, 12.70, 12.70, 12.70, 12.70, 12.70),

  42: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.90, 14.90, 14.5,
                      14.5, 13.99, 13.99, 13.13, 13.13, 13.13, 13.13, 13.13),

  48: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.90, 14.90, 14.5,
                      14.5, 13.99, 13.99, 13.13, 13.13, 13.13, 13.13, 13.13),

  54: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.90, 14.90, 14.5,
                      14.5, 13.99, 13.99, 13.13, 13.13, 13.13, 13.13, 13.13),

  60: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.90, 14.90, 14.5,
                      14.5, 13.99, 13.99, 13.13, 13.13, 13.13, 13.13, 13.13),

  66: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.7,
                      14.7, 14.14, 14.14, 13.50, 13.50, 13.50, 13.50, 13.50),

  72: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.7,
                      14.7, 14.14, 14.14, 13.50, 13.50, 13.50, 13.50, 13.50),

  78: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.7,
                      14.7, 14.14, 14.14, 13.50, 13.50, 13.50, 13.50, 13.50),

  84: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.7,
                      14.7, 14.14, 14.14, 13.50, 13.50, 13.50, 13.50, 13.50),
};

const percentagesForPFOldLising = {
  6: new Percentages(null, null, 12.7, 12.7, 12.5, 12.5, 12.3, 12.3, 11.99, 11.99,  11.7,  11.7, 10.99,
                      10.99, 10.00, 10.00, 10.00, 10.00, 10.00),
  12: new Percentages(null, null, 12.7, 12.7, 12.5, 12.5, 12.3, 12.3, 11.99, 11.99,  11.7,  11.7, 10.99,
                      10.99, 10.00, 10.00, 10.00, 10.00, 10.00),
  18: new Percentages(null, null, 14.5, 14.5, 13.5, 13.5, 13.3, 13.3, 12.99, 12.99,  12.7,  12.7, 12.15,
                      12.15, 11.20, 11.20, 11.20, 11.20, 11.20),
  24: new Percentages(null, null, 14.5, 14.5, 13.5, 13.5, 13.3, 13.3, 12.99, 12.99,  12.7,  12.7, 12.15,
                      12.15, 11.20, 11.20, 11.20, 11.20, 11.20),
  30: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 13.7, 13.7, 13.50, 13.50,  13.1,  13.1, 12.60,
                      12.60, 11.70, 11.70, 11.70, 11.70, 11.70),
  36: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 13.7, 13.7, 13.50, 13.50,  13.1,  13.1, 12.60,
                      12.60, 11.70, 11.70, 11.70, 11.70, 11.70),
  42: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 13.99, 13.99,  13.5,  13.5, 12.99,
                      12.99, 12.12, 12.12, 12.12, 12.12, 12.12),
  48: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 13.99, 13.99,  13.5,  13.5, 12.99,
                      12.99, 12.12, 12.12, 12.12, 12.12, 12.12),
  54: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 13.99, 13.99,  13.5,  13.5, 12.99,
                      12.99, 12.12, 12.12, 12.12, 12.12, 12.12),
  60: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 13.99, 13.99,  13.5,  13.5, 12.99,
                      12.99, 12.12, 12.12, 12.12, 12.12, 12.12),
};

window.onload = function() {
  setSiteSizes();

  window.addEventListener('resize', () => {
    setSiteSizes();
  });

  const creditLisingInput = document.querySelector('.credit-lising-input');

  creditLisingInput.addEventListener('input', (e) => {
    setFinType(creditLisingInput.value); // credit - 0; lising - 1
  });
};

function setFinType(value) { // credit - 0; lising - 1

}

function setSiteSizes() {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  const height = +clientHeight;

  const creditCalculator = document.querySelector('.creditCalculator');
  const firstLineSize = 540 + ((height - 766) * 0.755);
  const secondLineSize = 1262 + ((height - 766) * 1.509);
  creditCalculator.style =
    `background:  linear-gradient(41deg, #00000000 ${firstLineSize}px, #ffcc0099 ${firstLineSize + 1}px,
     #ffcc0099 ${secondLineSize}px, #00000000 ${secondLineSize + 1}px),
     url(assets/images/service/secondScreen.jpg); background-size: cover;`
  ;

  // common sizes
  // const classesForWidth = document.querySelectorAll('');

  // classesForWidth.forEach((tag) => {
  //   tag.style.width = `${clientWidth}px`;
  // })

  const classesForWidthAndHeight = document.querySelectorAll('.screenWidthHeight');

  classesForWidthAndHeight.forEach((tag) => {
    tag.style.width = `${clientWidth}px`;
    tag.style.minHeight = `${clientHeight}px`;
  });
}

function submitForm() {
  // const name = document.getElementById('request-name').value;
  // const phone = document.getElementById('request-phone').value;

  // const formData = localStorage.getItem('formData');

  // let price,
  //     percentage,
  //     period,
  //     percentageStavka,
  //     mountyPayment,
  //     lisingOrCredit;

  // if (formData) {
  //   const data = JSON.parse(formData);

  //   price = data.price;
  //   percentage = data.percentage;
  //   period = data.period;
  //   percentageStavka = data.percentageStavka;
  //   mountyPayment = data.mountyPayment;
  //   lisingOrCredit = data.lisingOrCredit;
  // }

  // fetch('mail.php', {
  //   method: "POST",
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     name: name,
  //     phone: phone,
  //     price,
  //     percentage,
  //     period,
  //     percentageStavka,
  //     mountyPayment,
  //     lisingOrCredit,
  //     from: 'Отправлено с нижней формы'
  //   })
  // }).then(function(response) {
  //   console.log(response);
  // });
}
