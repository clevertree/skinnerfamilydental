'use client'
import {EditableContext} from "@components/Editable/Context/EditableContext";
import {useRouter} from "next/navigation";
import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {SiteVariables} from "@util/editable";
import {
    Backdrop,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import {Close as CloseIcon, Logout as LogoutIcon, Save as SaveIcon} from "@mui/icons-material";
import Draggable from "react-draggable";
import {ActionResponse} from "@util/types";

export interface SiteEditorProps {
    onSubmit: (name: keyof SiteVariables, value: string) => Promise<void>,
    onLogOut: () => Promise<ActionResponse>
}

export default function SiteEditor({
                                       onSubmit,
                                       onLogOut
                                   }: SiteEditorProps) {
    const router = useRouter();
    const {
        showEditor, closeEditor,
        editVarName,
        editVarDefaultValue,
        editVarUpdatedValue,
        updateEditorValue
    } = useContext(EditableContext);
    const [isDirty, setIsDirty] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [pendingAction, setPendingAction] = useState<'close' | 'save' | null>(null);

    // Update current value when editVarValue prop changes
    useEffect(() => {
        setIsDirty(false);
    }, [editVarDefaultValue]);

    // Handle beforeunload event to warn about unsaved changes
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isDirty && showEditor) {
                e.preventDefault();
                e.returnValue = '';
            }
        };

        if (isDirty && showEditor) {
            window.addEventListener('beforeunload', handleBeforeUnload);
        }

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isDirty, showEditor]);

    const nodeRef = useRef(null);

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        updateEditorValue(newValue);
        setIsDirty(newValue !== editVarDefaultValue);
        updateEditorValue(newValue);
    };

    const handleSave = useCallback(async () => {
        if (!editVarName)
            throw new Error("Invalid editVarName")
        if (!editVarUpdatedValue)
            throw new Error("Invalid editVarUpdatedValue")
        try {
            console.log(`Saving ${editVarName}: ${editVarUpdatedValue}`);
            await onSubmit(editVarName, editVarUpdatedValue);

            setIsDirty(false);
            if (pendingAction === 'close' || pendingAction === 'save') {
                closeEditor();
            }
            setShowConfirmModal(false);
            setPendingAction(null);
            setTimeout(() => {
                console.log('Refreshing page...');
                router.refresh();
            }, 1000)
        } catch (error) {
            console.error('Error saving:', error);
        }
    }, [editVarName, editVarUpdatedValue, onSubmit, closeEditor, pendingAction, router]);

    const handleClose = useCallback(() => {
        if (isDirty) {
            setPendingAction('close');
            setShowConfirmModal(true);
        } else {
            closeEditor();
        }
    }, [closeEditor, isDirty]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isDirty) {
            setPendingAction('save');
            setShowConfirmModal(true);
        }
    };

    const handleConfirmSave = () => {
        handleSave();
    };

    const handleConfirmDiscard = () => {
        setIsDirty(false);
        setShowConfirmModal(false);
        if (pendingAction === 'close') {
            closeEditor();
        }
        setPendingAction(null);
    };

    const handleConfirmCancel = () => {
        setShowConfirmModal(false);
        setPendingAction(null);
    };

    const handleLogout = async () => {
        try {
            await onLogOut();
            router.refresh();
            window.location.reload(); // Force refresh
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    // Handle keyboard events
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!showEditor) return;

            if (event.key === 'Escape') {
                event.preventDefault();
                handleClose();
            } else if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (isDirty) {
                    handleSave().then();
                } else {
                    closeEditor();
                }
            }
        };

        if (showEditor) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showEditor, isDirty, handleClose, handleSave, closeEditor]);

    if (!showEditor) {
        return null;
    }

    return (
        <>
            {/* Floating Logout Button */}
            <IconButton
                title="Click to log out of the site editor."
                onClick={handleLogout}
                sx={{
                    position: 'fixed',
                    top: 20,
                    right: 20,
                    backgroundColor: 'error.main',
                    color: 'white',
                    zIndex: (theme) => theme.zIndex.modal + 1,
                    '&:hover': {
                        backgroundColor: 'error.dark',
                    },
                    boxShadow: 3
                }}
                size="large"
            >
                <LogoutIcon/>
            </IconButton>

            <Backdrop
                onClick={handleClose}
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                }}
                open={showEditor}
            />

            <Draggable
                nodeRef={nodeRef}>
                <Paper
                    ref={nodeRef}
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%',
                        maxWidth: 600,
                        zIndex: (theme) => theme.zIndex.modal,
                        p: 3,
                        maxHeight: '90vh',
                        overflow: 'auto'
                    }}
                    elevation={8}
                >
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
                        <Typography variant="h6" component="h2">
                            Edit Site Property
                        </Typography>
                        <IconButton onClick={handleClose} size="small">
                            <CloseIcon/>
                        </IconButton>
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <Typography variant="subtitle1" sx={{mb: 1, fontWeight: 'medium'}}>
                            Property: {editVarName}
                        </Typography>

                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            variant="outlined"
                            label="Property Value"
                            value={editVarUpdatedValue}
                            onChange={handleValueChange}
                            sx={{mb: 3}}
                            autoFocus
                            placeholder="Enter the site property value..."
                        />

                        <Box sx={{display: 'flex', gap: 2, justifyContent: 'flex-end'}}>
                            <Button
                                variant="outlined"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                startIcon={<SaveIcon/>}
                                disabled={!isDirty}
                            >
                                Save & Publish
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Draggable>

            {/* Confirmation Modal */}
            <Dialog
                open={showConfirmModal}
                onClose={handleConfirmCancel}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    {pendingAction === 'save' ? 'Save Changes?' : 'Unsaved Changes'}
                </DialogTitle>
                <DialogContent>
                    <Typography>
                        {pendingAction === 'save'
                            ? `Are you sure you want to save and publish the changes to "${editVarName}"?`
                            : `You have unsaved changes to "${editVarName}". What would you like to do?`
                        }
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmCancel} color="inherit">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDiscard} color="error">
                        Discard Changes
                    </Button>
                    <Button
                        onClick={handleConfirmSave}
                        variant="contained"
                        startIcon={<SaveIcon/>}
                    >
                        Save & Publish
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
