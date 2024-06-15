import Bannar from "./Bannar/Bannar";
import Categories from "./Categories/Categories";
import WhatNew from "./What_new/WhatNew";


const Home = () => {
    return (
        <div>
             <Bannar></Bannar>
             <hr />
             <WhatNew></WhatNew>
             <hr />
             <Categories></Categories>
        </div>
    );
};

export default Home;