import {Container} from "@/shared/ui/container";
import {RegisterForm} from "@/features/auth/register";

export const RegisterPage = () => {
    return (
        <Container>
            <h2 className='text-center'>Register</h2>
            <RegisterForm/>
        </Container>
    )
}
