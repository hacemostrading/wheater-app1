import React, {PureComponent} from 'react'

class ErrorBoundary extends PureComponent{

    constructor(props){
        super(props)

        this.state = {
            hasError: false
        }

    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error,errorInfo){
    console.log("errorInfo", errorInfo)    }
   
    render(){
        return (
            this.state.hasError ?
            (<h1>HUBO UN ERROR</h1>)
            :
            (this.props.children)
        )
    }
}
export default ErrorBoundary