const Validation = {
  date(inputString) {
    const inputNumber = Number(inputString);

    if (
      inputNumber < 1 ||
      inputNumber > 31 ||
      inputString.includes('.') ||
      Number.isNaN(inputNumber)
    )
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  },
};

export default Validation;
