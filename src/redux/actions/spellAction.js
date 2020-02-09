import dotenv from 'dotenv';
dotenv.config();

const spellActions = textToConvert => {
    var audioCtx = new AudioContext();
    var source = audioCtx.createBufferSource();
    const options = {
        method: "GET",
        headers: {
            ["x-rapidapi-host"]: `${process.env.SPELL_DATA_HOST}`,
            ["x-rapidapi-key"]: `${process.env.SPELL_DATA_KEY}`
        }
    };
    const URL = `${process.env.SPELL_DATA_URL}&src=${textToConvert}&hl=en-us&key=a8512ad7a466442a91e327d383337413`;
    fetch(URL, options)
        .then(response => {
            const reader = response.body.getReader();
            return new ReadableStream({
                start (controller) {
                    return pump();
                    function pump () {
                        return reader.read().then(({ done, value }) => {
                            if (done) {
                                controller.close();
                                return;
                            }
                            controller.enqueue(value);
                            return pump();
                        });
                    }
                }
            });
        })
        .then(stream => new Response(stream))
        .then(response => {
            return response.arrayBuffer();
        })
        .then(function (buffer) {
            audioCtx.decodeAudioData(buffer, function (decodedData) {
                source.buffer = decodedData;
                source.connect(audioCtx.destination);
            });
        })
        .catch(err => console.error(err));
    source.start(0);
};
export default spellActions;
