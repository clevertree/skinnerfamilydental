import {Stack} from '@mui/material';
import Link from 'next/link';
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
            <h1 className="m-auto text-[color:var(--gold-color)] italic"> Login</h1>

            <LoginValidationForm
                receiver={email}
                loginValidationAction={loginEmailValidationAction}
                defaultCode={defaultCode}
            />

            <Stack sx={{margin: 'auto'}} direction="column">
                <Link href="/login">Click here to log in as an </Link>
            </Stack>
        </>
    );
}
