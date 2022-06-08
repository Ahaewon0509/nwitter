import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";

const Home = ({ userObj }) => {
    //console.log(userObj);
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

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
        /* await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet(""); */
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setNweet(value);
    };

    //첨부 파일 정보 출력하는 코드
    const onFileChange = (event) => { 
        //console.log(event.target.files);
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            //console.log(finishedEvent);
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        };

        reader.readAsDataURL(theFile);
    };

    const onClearAttachment = () => setAttachment(""); //파일 선택 취소 버튼 만들기

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
            <input type="file" accept="image/*" onChange={onFileChange} /> 
            <input type="submit" value="Nweet" />
            {attachment && (
                <div>
                    <img src={attachment} width="50px" height="50px" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
        </form>
        <div>
            {nweets.map((nweet) => (
                //<div key={nweet.id}>
                    //<h4>{nweet.text}</h4>
                //</div>
                <Nweet key={nweet.id}
                nweetObj={nweet}
                isOwner={nweet.creatorId === userObj.uid} //내가 쓴 트윗은 나만 지우거나 수정할 수 있도록 만드는 코드
                />
            ))}
        </div>
        </>
    );
};

export default Home;