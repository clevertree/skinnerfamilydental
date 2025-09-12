'use client';

import {SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/nextjs';
import React from 'react';
import {Box, Button} from "@mui/material";

export function ClerkSessionContent() {
    // const {user} = useUser();

    return (
        <Box className="flex items-center justify-center p-8">
            <SignedOut>
                <SignInButton forceRedirectUrl="/">
                    <Button variant='outlined' color='primary'>
                        Log in to Admin
                    </Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                You are currently logged in
                <UserButton
                    showName
                    appearance={{
                        elements: {
                            userButtonAvatarBox: 'w-6 h-6', // Example using Tailwind CSS classes for width and height
                        },
                    }}
                />
            </SignedIn>
        </Box>
    );
}
