export const ParentComponent = () => {
  // return <h1>Hello Parent Component</h1>;
  return (
    <section>
      <h1>Component A</h1>
      <ChildComponent data="ReactJS" />
    </section>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h1>Hello, I am component B</h1>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <h1>Hello I am component C</h1>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <>
      <h1>Hello I love {props.data}</h1>
    </>
  );
};
