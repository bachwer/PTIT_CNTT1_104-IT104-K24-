import "./App.css";
import "./index.css";
import Ex1 from "./components/Ex1_Exersice01"
import Ex2_Notification from "./components/Ex2_Notification.tsx";
import Ex3_changeState from "./components/Ex3_changeState.tsx";
import Ex4_blockRender from "./components/Ex4_blockRender.tsx";
import Ex5_getDataFrom from "./components/Ex5_getDataFrom.tsx"
import Ex6_typeRadio from "./components/Ex6_typeRadio.tsx";
import Ex8_signIn from "./components/Ex8_signIn.tsx";
import Ex7_FromSignAccount from "./components/Ex7_FromSignAccount"
function App() {
    return (
        <>
            <Ex1 />
            <Ex2_Notification />
            <Ex3_changeState />
            <Ex4_blockRender />
            <Ex5_getDataFrom />
            <Ex6_typeRadio />
            <Ex7_FromSignAccount />
            <Ex8_signIn />
        </>
    );
}

export default App;