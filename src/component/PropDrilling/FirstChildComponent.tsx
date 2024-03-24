import SecondChildComponent from "./SecondChildComponent";

const FirstChildComponent = ({ user }: User) => {
  return <SecondChildComponent user={user} />;
};

export default FirstChildComponent;
