import { useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";

const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");

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
    const nweetObj = {
        text: nweet,
        createAt: Data.now(),
        creatorId: userObj.uid,
        attachmentUrl,
    };
    await dbService.collection("nweets").add(nweetObj);
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
        reader.readAttachment = () => setAttachment("");

    return (
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
    );
};
};

export default NweetFactory;