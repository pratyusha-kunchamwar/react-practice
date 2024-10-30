
// ----------------jsx------------
// const products = [
//   { title: "Cabbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 },
// ];   {list}

// const list = products.map((product) => <li>{product.title}</li>);

// --- single state- to another component----
// const [count, setCount] = useState({
//   button1: 0,
//   button2: 0,
// });
// const handleClick = (button) => {
//   setCount((prev) => ({ ...prev, [button]: prev[button] + 1 }));
// };
// return (
//   <>
//     <h1>Counters that update separately</h1>
//     <MyButton count={count.button1} onClick={() => handleClick("button1")} />
//     <MyButton count={count.button2} onClick={() => handleClick("button2")} />
//   </>
// );
// }

// --object---
// const [count, setCount] = useState({
//   increment: 0,
//   decrement: 0,
// });
// const handleClick = (button) => {
//   if (button == "increment")
//     setCount((prev) => ({ ...prev, [button]: prev[button] + 1 }));
// both at atime
// setCount((prev) => ({
//   ...prev,
//   [button]: button === "increment" ? prev[button] + 1 : prev[button] - 1,
// }));
//   else {
//     setCount((prev) => ({ ...prev, [button]: prev[button] - 1 }));
//   }
// };
// return (
//   <>
//     <h1>Counters that update separately</h1>
//     <button onClick={() => handleClick("increment")}>
//       {count.increment}
//     </button>
//     <button onClick={() => handleClick("decrement")}>
//       {count.decrement}
//     </button>
//   </>
// );

// --- array-- -
// /function App() {
//   const [count, setCount] = useState([0, 0]);
//   const handleClick = (index, change) => {
//     setCount((prev) => {
//       const newArr = [...prev];
//       if (change === "increment") {
//         newArr[index] = newArr[index] + 1;
//       } else {
//         newArr[index] = newArr[index] - 1;
//       }
//       return newArr;
//     });
//   };
//   return (
//     <>
//       <h1>Counters that update separately</h1>
//       <button onClick={() => handleClick(0, "increment")}>{count[0]}</button>
//       <button onClick={() => handleClick(1, "decrement")}>{count[1]}</button>
//     </>
//   );
// }
