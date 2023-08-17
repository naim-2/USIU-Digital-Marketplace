import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import bot_img from "../images/bot_img.png";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 
const steps = [
    {
        id: '0',
        message: 'Hey there, welcome to USIU Digital Marketplace!',
        trigger: '1',
    }, {
        id: '1',
        message: 'Please write your name',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: "Hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
            { value: 1, label: 'View Clothes' },
            { value: 2, label: 'View Bags' },
            { value: 3, label: 'View Laptops' },
            { value: 4, label: 'View Shoes' },
            { value: 5, label: 'View Smartphones' },
            { value: 6, label: 'View Watches' },
            { value: 7, label: 'Log In' },
            { value: 8, label: 'Sign Up as a Buyer' },
            { value: 9, label: 'Sign Up as a Seller' },
        ],
        end: true
    }
];
 
const theme = {
    background: '#FFCB05',
    headerBgColor: '#000000',
    headerFontSize: '20px',
    botBubbleColor: '#2B3990',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#000000',
    userFontColor: 'white',
};
 
const config = {
    botAvatar: `${bot_img}`,
    floating: true,
};

function getOption(){
    if(steps[5].options.value==1){
        <Link to="./Clothes" target="_parent"></Link>
    }
}
 
function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="USIU Digital Marketplace"
                    steps={steps}
                    {...config}
 
                />
                {getOption}
            </ThemeProvider>
        </div>
    );
}
 
export default App;
