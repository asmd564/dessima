import React, {useEffect}  from "react";
import { Strength } from "../../components/strength/strength";

const MainScreen = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return(
        <main>
            <Strength/>
        </main>
        
    )
}

export default MainScreen;