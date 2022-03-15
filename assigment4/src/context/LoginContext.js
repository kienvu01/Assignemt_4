import React from "react";

const LoginContext  = React.createContext(
    {
        login:false,
        setLogin:()=>{
            this.setState({login:true})
        },
    }
);

export default LoginContext;