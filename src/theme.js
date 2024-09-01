import { createTheme } from '@mui/material/styles';

const primarycolor = '#02363a';
const inputlabelcolor = 'rgb(32, 32, 32)';

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: primarycolor, // Custom hover border color
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: primarycolor, // Custom focus border color
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: inputlabelcolor, // Default label color (optional)
                      },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: primarycolor, // Custom label color when focused
                    },
                    '& .MuiInputLabel-root.Mui-focused:not(.Mui-error)': {
                        color: primarycolor, // Label color when focused and no error
                      },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: primarycolor, // Default primary button color
                    '&:hover': {
                        backgroundColor: '#011f22', // Hover primary button color
                    },
                },
                outlined: {
                    borderColor: primarycolor, // Default border color
                    color: primarycolor, // Default text color

                    '&:hover': {
                        borderColor: primarycolor,
                        backgroundColor: 'rgba(2, 54, 58, 0.02)', // Hover background color
                        boxShadow: `inset 0 0 0 0.4px ${primarycolor}`, // Subtle shadow for hover effect
                    },
                },

            },
        },

        MuiSelect: {
            styleOverrides: {
                root: {
                    // backgroundColor: '#f5f5f5', // Default background color for Select
                    // '& .MuiOutlinedInput-notchedOutline': {
                    //       borderColor: 'red', // Default border color
                    // },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1b4d4f', // Hover border color
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: primarycolor, // Focus border color
                    },
                },
                select: {
                    '&:focus': {
                        backgroundColor: '#f5f5f5', // Maintain background color when focused
                    },
                },
                icon: {
                    color: primarycolor, // Dropdown arrow icon color
                },
                menu: {
                    '& .MuiMenu-paper': {
                        backgroundColor: '#ffffff', // Dropdown menu background color
                        color: '#000000', // Dropdown text color
                    },
                    '& .MuiMenuItem-root': {
                        '&:hover': {
                            backgroundColor: '#f0f0f0', // Hover color for dropdown items
                        },
                    },
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#9e9e9e', // Default label color
                    '&.Mui-focused': {
                        color: primarycolor, // Label color when focused
                    },
                    '&.Mui-disabled': {
                        color: '#bdbdbd', // Label color when disabled
                    },
                },
            },
        },

        MuiRadio: {
            styleOverrides: {
                root: {
                    color: '#9e9e9e', // Default color for unselected radio buttons
                    '&.Mui-checked': {
                        color: primarycolor, // Color for selected radio buttons
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(2, 54, 58, 0.08)', // Hover effect color (slightly tinted background)
                    },
                },
            },
        },
    },
});

export default theme;
