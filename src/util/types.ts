export type ActionResponse = {
    status: 'success' | 'error';
    message: string;
    redirectURL?: string;
};