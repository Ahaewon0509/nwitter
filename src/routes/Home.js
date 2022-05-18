import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";

const Home = ({ userObj }) => {
    //console.log(userObj);
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    //const getNweets = async () => {
        //const dbNweets = await dbService.collection("nweets").get();
        //console.log(dbNweets);
        //dbNweets.forEach((document) => {
            //const nweetObject = { ...document.data(), id: document.id };
        //setNweets((prev) => [nweetObject, ...prev])
    //});
    //};

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        });
        //getNweets();
    }, []);

    //console.log(nweets);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet("");
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setNweet(value);
    };

    return (
        <>
        <form onSubmit={onSubmit}>
            <input
            value={nweet}
            onChange={onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
            />
            <input type="submit" value="Nweet" />
        </form>
        <div>
            {nweets.map((nweet) => (
                //<div key={nweet.id}>
                    //<h4>{nweet.text}</h4>
                //</div>
                <Nweet key={nweet.id} nweetObj={nweet}/>
            ))}
        </div>
        </>
    );
};

export default Home;