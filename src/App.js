import "./App.css";
import Routing from "./routing/Routing";

function App() {
    //ckeck if there is a remembered user and log him in if there is, using refresh token for authentication and recieve new access token
    useEffect(() => {
      const handleRememberedUser = async () => {
        if (!localStorage.getItem("refreshToken")) return;
  
        const response = await ApiRequest.refresh(
          localStorage.getItem("refreshToken")
        );
        if (!response.accessToken) return;
  
        if (response.accessToken) {
          //save tokens in sessionStorage to keep user logged in only for development purposes, in production, token should be saved in state and passed to context
          sessionStorage.setItem("accessToken", response.accessToken);
          sessionStorage.setItem("userId", response.id);
          sessionStorage.setItem("role", response.role);
        }
      };
      (async () => handleRememberedUser())();
    });

  return <Routing />;
}

export default App;
