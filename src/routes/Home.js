import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data()
            }));
            setNweets(newArray);
        });
    }, []);

    return (
        <>
            <NweetFactory userObj={userObj} /> //NweetFactory 컴포넌트를 포함시킴
            <div>
                {nweets.map((nweet) => (
                    <Nweet 
                    key={nweet.id}
                    nweetObj={nweet}
                    isOwner={nweet.creatorId === userObj.uid} //내가 쓴 트윗은 나만 지우거나 수정할 수 있도록 만드는 코드
                    />
                ))}
            </div>
        </>
    );
};

export default Home;