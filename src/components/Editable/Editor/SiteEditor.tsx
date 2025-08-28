'use client'
import {EditableContext} from "@components/Editable/Context/EditableContext";
import {useContext, useEffect, useState} from "react";
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
import {Close as CloseIcon, Save as SaveIcon} from "@mui/icons-material";

export interface EditorState {
    siteVarName: keyof SiteVariables,
    siteVarValue: string,
}

export default function SiteEditor({siteVarName, siteVarValue}: EditorState) {
    const {showEditor, closeEditor} = useContext(EditableContext);
    const [currentValue, setCurrentValue] = useState(siteVarValue || '');
    const [isDirty, setIsDirty] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [pendingAction, setPendingAction] = useState<'close' | 'save' | null>(null);

    // Update current value when siteVarValue prop changes
    useEffect(() => {
        setCurrentValue(siteVarValue || '');
        setIsDirty(false);
    }, [siteVarValue]);

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

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setCurrentValue(newValue);
        setIsDirty(newValue !== (siteVarValue || ''));
    };

    const handleSave = async () => {
        try {
            // Here you would implement your save logic
            // For example: await saveSiteVariable(siteVarName, currentValue);
            console.log(`Saving ${siteVarName}: ${currentValue}`);

            setIsDirty(false);
            if (pendingAction === 'close') {
                closeEditor();
            }
            setShowConfirmModal(false);
            setPendingAction(null);
        } catch (error) {
            console.error('Error saving:', error);
        }
    };

    const handleClose = () => {
        if (isDirty) {
            setPendingAction('close');
            setShowConfirmModal(true);
        } else {
            closeEditor();
        }
    };

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
        setCurrentValue(siteVarValue || '');
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

    if (!showEditor) {
        return null;
    }

    return (
        <>
            <Backdrop
                onClick={handleClose}
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                }}
                open={showEditor}
            />

            <Paper
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
                        Property: {siteVarName}
                    </Typography>

                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        variant="outlined"
                        label="Property Value"
                        value={currentValue}
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
                            ? `Are you sure you want to save and publish the changes to "${siteVarName}"?`
                            : `You have unsaved changes to "${siteVarName}". What would you like to do?`
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
