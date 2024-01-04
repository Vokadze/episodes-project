import React from "react";
import EpisodesList from "./components/episodesList";

const App = () => {
    return (
        <div className="App">
            <EpisodesList />
            <p>Compiled with warnings. Warning (2437:3) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.
            </p>
        </div>
    );
};

export default App;
