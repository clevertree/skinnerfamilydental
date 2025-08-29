import LoginValidationForm from '@components/Session/LoginValidationForm';

import {loginEmailValidationAction} from '@util/emailActions';

export const metadata = {
    title: 'Email Login Validation',
};

interface LoginEmailValidationPageProps {
    searchParams: Promise<{
        email: string,
        code: string,
    }>;
}

export default async function LoginEmailValidationPage(
    {searchParams}: LoginEmailValidationPageProps
) {
    const {code: defaultCode, email} = await searchParams;
    // const session = await validateSession()

    return (
        <>
            <LoginValidationForm
                receiver={email}
                loginValidationAction={loginEmailValidationAction}
                defaultCode={defaultCode}
            />
        </>
    );
}
