import ThirdChildComponent from "./ThirdChildComponent";

const SecondChildComponent = ({ user }: User) => {
  return <ThirdChildComponent user={user} />;
};

export default SecondChildComponent;
