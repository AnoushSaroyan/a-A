import React from "react";
import { Route, Switch } from "react-router-dom";
import GodsList from "./gods/GodsList"; 
import EmblemsList from "./emblems/EmblemsList";
import AbodesList from "./abodes/AbodesList";
// import GodCreate from "./create/GodCreate";
import Create from "./create/create";
import GodDetail from "./gods/GodDetail";

const App = () => {
    return (
        <div>
            <Route exact path="/gods/:id" component={GodDetail} />
            <Route exact path="/gods" component={GodsList} />
            <Route exact path="/emblems" component={EmblemsList} />
            <Route exact path="/abodes" component={AbodesList} />
            {/* <Route exact path="/newGod" component={GodCreate} /> */}
            <Route exact path="/new" component={Create} />
        </div>
    );
};

export default App;