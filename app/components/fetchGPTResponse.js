import axios from 'axios';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchGPTResponse = async (prompt) => {
    try {
        const response = { "data": { "1": "adfadf", "2": "adfda" } };

        // await axios.post('https://api.openai.com/v1/audio/transcriptions', audioFile, {
        //     headers: {
        //         'Authorization': `Bearer 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`,
        //         'Content-Type': 'multipart/form-data',
        //     },
        //     data: {
        //         'prompt': 'i have some advice for you. multiple sentences help establish a pattern. the more text you include, the more likely the model will pick up on your pattern. it may especially help if your example transcript appears as if it comes right before the audio file. in this case, that could mean mentioning the contacts i stick in my eyes.'
        //     },
        //     form: {
        //         'model': 'whisper-1',
        //     }
        // });

        await sleep(3000);
        console.log(response["data"]);
        return response["data"];
    } catch (error) {
        console.error('Fetching data failed:', error);
    }

};

export default fetchGPTResponse;