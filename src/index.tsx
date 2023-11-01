import './index.css';
import {state} from "./redux/state";
import {renderEntireTree} from "./render";


renderEntireTree(state)

// ReactDOM.render(
//     <React.Fragment>
//         <BrowserRouter>
//              <GlobalStyle/>
//              <App state = {state}/>
//         </BrowserRouter>
//     </React.Fragment>
//     ,
//   document.getElementById('root')
// );