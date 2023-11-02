import React, { lazy, Suspense } from "react";
import "./styles.css";
import { mockData } from "./mockData";
import { orderData } from "./orderData";

const Custom_Lib = lazy(() => import("Custom_Lib/app"));

const App = () => {
  const [name, setName] = React.useState(null);

  return (
    <div className="App">
      <h1>Client App</h1>
      {name ? <p>You are searching For : {name}</p> : null}
      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <Custom_Lib
            value={name}
            onChange={(e) => setName(e.target.value)}
            data={mockData}
            orderData={orderData}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
