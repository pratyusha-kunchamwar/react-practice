// import {  useState } from "react";

// const Accordation = () => {
//   const [multiple, setMultiple] = useState(true);
//   const [openId, setOpenId] = useState([]);

//   function handlemultiple() {
//     if (!multiple) {
//       setOpenId([]);
//     }
//     setMultiple(!multiple);
//   }
//   function handleopenId(id) {
//     if (multiple) {
//       setOpenId((prev) =>
//         prev.includes(id) ? prev.filter((open) => open !== id) : [...prev, id]
//       );
//     } else {
//       setOpenId((prev) => (prev[0] === id ? [] : [id]));
//     }
//   }
//   return (
//     <>
//       <h2>CheckFor Single Or Multiple</h2>
//       <input type="checkbox" checked={multiple} onChange={handlemultiple} />
//       <div>
//         <div>
//           {[1, 2, 3].map((id) => (
//             <div key={id}>
//               <h1>Quetion :{id}</h1>
//               <button onClick={() => handleopenId(id)}>{"+"}</button>
//               {openId.includes(id) && (
//                 <p>
//                   Lorem ipsum dolor sit amet consec tetur, adipisicing elit.
//                   Nostrum, plac eat ea fuga fugit obcaecati accusamus molestias
//                   , atque, tenetur adipisci commodi cum quam numquam! Quas nemo,
//                   eum pariatur verit atis temporibus beatae?
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Accordation;
import React, { useState } from "react";

const Accordation = () => {
  const [multiple, setMultiple] = useState(false);
  const [openId, setOpenId] = useState([]);
  function handlecheck() {
    if (!multiple) {
      setOpenId([]);
    }
    setMultiple(!multiple);
  }
  function handleopenId(id) {
    if (multiple) {
      setOpenId((prev) =>
        prev.includes(id)
          ? prev.filter((target) => target !== id)
          : [...prev, id]
      );
    } else {
      setOpenId((prev) => (prev[0] === id ? [] : [id]));
    }
  }
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1>select the all items</h1>
        <input type="checkbox" value={multiple} onChange={handlecheck} />
        <div>
          {[1, 2, 3].map((id) => (
            <div key={id}>
              <h1>quetions</h1>
              <button onClick={() => handleopenId(id)} className="w-20 h-20 border border-red-400">{"+"}</button>
              {openId.includes(id)&&(
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate molestiae incidunt veniam illum expedita temporibus
                  assumenda ratione sit qui, eius laboriosam perferendis modi
                  fugiat sequi ea omnis soluta suscipit cum?
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordation;
