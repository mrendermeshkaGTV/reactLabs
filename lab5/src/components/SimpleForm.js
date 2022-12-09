import {Box, Paper, TextField, Button, ThemeProvider} from "@mui/material";
import {useState} from "react";
import {createTheme} from '@mui/material/styles';
import {cyan} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: cyan,
        secondary: cyan,
    },
});

export function SimpleForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleTopicChange = (e) => {
        setTopic(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({name, email, topic, message});
    }

    const isEmailValid = () => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(email) || email.length === 0;
    }

    return (
        <Box component="form" sx={{width: 500, m: "auto", mt: 5}} onSubmit={handleFormSubmit}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3} sx={{py: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <TextField value={name} onChange={handleNameChange} id="Name" label="Ім'я" variant="filled"
                               sx={{m: 1, width: 400}}/>
                    <TextField value={email} id="Email" label="E-mail" variant="filled" sx={{m: 1, width: 400}} required
                               onChange={handleEmailChange} error={!isEmailValid()}
                               helperText={!isEmailValid() ? "Неправильний E-mail" : ""}/>
                    <TextField value={topic} onChange={handleTopicChange} id="Topic" label="Тема" variant="filled"
                               sx={{m: 1, width: 400}} required/>
                    <TextField value={message} onChange={handleMessageChange} id="Message" label="Повідомлення"
                               variant="filled" sx={{m: 1, width: 400}} multiline rows={5}/>
                    <Button type="submit" variant="contained" disabled={!isEmailValid()}>Відправити</Button>
                </Paper>
            </ThemeProvider>
        </Box>
    );
}
