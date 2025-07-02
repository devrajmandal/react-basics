export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("Grandparent clicked");
  };
  const handleParentClick = (event) => {
    console.log("Parent clicked");
    event.stopPropagation();
  };
  const handleChildClick = (event) => {
    console.log(event);
    console.log("Child clicked");
    
  };
  return (
    <section className="main-div">
      <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};
