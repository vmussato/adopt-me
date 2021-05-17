const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Pirata", animal: "Dog", breed: "Mut" }),
    React.createElement(Pet, { name: "Cacau", animal: "Dog", breed: "Mut" }),
    React.createElement(Pet, { name: "Barao", animal: "Dog", breed: "Mut" }),
    React.createElement(Pet, { name: "Nina", animal: "Dog", breed: "Mut" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
