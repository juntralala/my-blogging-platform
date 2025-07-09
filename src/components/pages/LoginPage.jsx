import { AuthBackground } from "../organisms/background/AuthBackground";
import { LoginForm } from "../organisms/LoginForm";

export function LoginPage() {
    return (
        <AuthBackground>
            <LoginForm />
        </AuthBackground>
    );
}