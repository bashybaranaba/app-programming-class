import SecondChildComponent from "./SecondChildComponent";

const FirstChildComponent = ({ id, name, email, age }: User) => {
  return <SecondChildComponent id={id} name={name} email={email} age={age} />;
};

export default FirstChildComponent;
