import { withRouter } from "react-router"

const Toast = ({message, success}) => {

    const style = {
        backgroundColor: success ? 'rgba(14, 131, 14, 0.527)' : 'rgba(204, 75, 75, 0.459)',
        color: 'white'
    }
    
    return (
        <>
            <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 5}}>
                <div id="liveToast" className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header" style={style}>
                        <strong className="me-auto">Žinutė</strong>
                    </div>
                    <div className="toast-body">
                        {message}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toast
