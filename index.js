const element = (
  <div className="elementContainer">
    <h1 className="heading">Super Over League</h1>
    <div class="imageContainer">
      <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" />
      <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" />
    </div>
  </div>
);
cont rootElement = document.getElementById("root");
rootElement.classList.add("bg-container");
ReactDOM.render(element, document.getElementById("root"));
