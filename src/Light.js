function Light({status}) {
  return (
    <p className="Light">
      This light is {status ? "on" : "off"}!
    </p>
  );
}

export default Light;
