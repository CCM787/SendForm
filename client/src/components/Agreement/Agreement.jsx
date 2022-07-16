/* eslint-disable react/no-unescaped-entities */
function Agreement() {
  return (
    <div className="Agreement">
      <span className="Agreement-text">
        {" "}
        Нажимая кнопку "Начать работу", я даю согласие на обработку персональных
        данных.{" "}
      </span>
      <a href="./test.pdf" download>
        Условия использования данных
      </a>{" "}
    </div>
  );
}

export default Agreement;
