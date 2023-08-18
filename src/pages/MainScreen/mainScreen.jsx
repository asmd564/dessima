import React, {useEffect}  from "react";
import { Strength } from "../../components/strength/strength";

const MainScreen = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return(
        <main>
            <Strength callback={props.callback}/>
        </main>
        
    )
}

export default MainScreen;