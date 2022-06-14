import { dbService, storageService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";
import { v4 as uuidv4 } from "uuid";

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
        let attachmentUrl = "";
        if (attachment !== "") {
        const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
        const response = await attachment.putString(attachment, "data_url");
        attachmentUrl = await response.ref.getDownloadURL();
    }
        await dbService.collection("nweets").add({
            text: nweet,
            createAt: Data.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        });
        setNweet("");
        setAttachment("");
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
        <NweetFactory /> //NweetFactory 컴포넌트를 포함시킴
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