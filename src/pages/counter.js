import {Counter} from "../features/counter/Counter";
import React, {useContext} from "react";
import {MasterFrontContext} from "../Product1App";

function CounterPage() {
    const c = useContext(MasterFrontContext);
    return (
            <div className="App">
                <header className="App-header">
                    <Counter/>
                    It's from masterFront counter: {c}
                </header>
            </div>
    );
}

export default CounterPage;