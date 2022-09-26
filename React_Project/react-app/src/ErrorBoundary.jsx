import React from 'react'

interface errorBoundaryProps{
    errorUI:React.ReactNode
}

interface errorBoundaryState{
    hassError:boolean;
    message:string;
}

class ErrorBoundary extends React.Component<errorBoundaryProps,errorBoundaryState>
{
    constructor(props:errorBoundaryProps){
        super(props);
        this.state = {
            hassError:false,
            message:''
        }
    }

    static getDerivedStateFromError(error:any){
        return{
            hassError:true,
            message:error
        }
    }

    componentDidCatch(error:AnalyserOptions,errorInfo:any){
        console.log(error);
    }

    render(){
        if(this.state.hassError){
            if(this.props.errorUI){
                return this.props.errorUI
            }else{
                return <h3>{this.state.message}</h3>
            }
        }else{
            return this.props.children;
        }
    }
}





export default ErrorBoundary;