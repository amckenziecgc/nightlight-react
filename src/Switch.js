function Switch({status, setStatus}) {
  
  return (
    <button onClick={() => setStatus(!status)}>Toggle</button>
  );
}

export default Switch;
