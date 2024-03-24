import ThirdChildComponent from "./ThirdChildComponent";

const SecondChildComponent = ({ id, name, email, age }: User) => {
  return <ThirdChildComponent id={id} name={name} email={email} age={age} />;
};

export default SecondChildComponent;
