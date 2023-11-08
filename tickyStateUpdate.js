function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount((cs) => {
        return cs + 1;
      });
    }, 2000);
  };

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
