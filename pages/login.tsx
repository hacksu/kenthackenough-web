
import Navigation from "views/navigation";
import Login from "views/login";

interface LoginPageProps {
    register?: boolean;
}

export default function LoginPage({ register }: LoginPageProps) {
    return (
        <div>
            <Navigation/>
            <h1>Login</h1>
            { register ? 'register' : 'login' }
            <Login/>
        </div>
    )
}