import { Button, createTheme } from '@rneui/themed';

const theme = createTheme({
    components: {
        Button: {
            titleStyle: {
                color: 'red',
            },
        },
    },
});

export { theme };

