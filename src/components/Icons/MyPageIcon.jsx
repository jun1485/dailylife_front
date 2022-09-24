import { useNavigate } from "react-router-dom"

function MyPageIcon({ path }) {
    const navigate = useNavigate();
    return (
        <button type="button" onClick={() => {
            navigate(path)
        }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3C7.92471 3 3 7.92471 3 14C3 20.0753 7.92471 25 14 25C20.0753 25 25 20.0753 25 14C25 7.92471 20.0753 3 14 3Z" stroke="#42413C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.51562 20.6C5.51562 20.6 7.87277 16.6878 14.0007 16.6878C19.6585 16.8286 22.4871 20.6 22.4871 20.6M14.0007 14.7051C15.0683 14.7051 16.0922 14.2706 16.8471 13.4972C17.602 12.7238 18.0261 11.6749 18.0261 10.5811C18.0261 9.48737 17.602 8.43842 16.8471 7.66503C16.0922 6.89164 15.0683 6.45715 14.0007 6.45715C12.9331 6.45715 11.9092 6.89164 11.1543 7.66503C10.3994 8.43842 9.97528 9.48737 9.97528 10.5811C9.97528 11.6749 10.3994 12.7238 11.1543 13.4972C11.9092 14.2706 12.9331 14.7051 14.0007 14.7051Z" stroke="#42413C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg></button>

    )
}

export default MyPageIcon