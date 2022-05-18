import { dbService } from "fbase";

const Nweet = ({ nweetObj, isOwner }) => {
    const onDeleteClick = async () => { //버튼에 삭제 기능 추가, 아래 button: "Delete Nweet"부분에 onClick={onDeleteClick} 추가
        const ok = window.confirm("삭제하시겠습니까?");
        console.log(ok);
        if (ok) { //삭제를 <확인> 누르면, 트윗을 삭제하는 코드
            console.log(nweetObj.id);
            const data = await dbService.doc(`nweets/${nweetObj.id}`); // `표시는 숫자1 옆에있는 백틱
            console.log(data);
        }
    };

    return ( //<수정>,<삭제> 버튼 추가코드
        <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && ( //isOwner &&와 같이 연산자를 이용하여, isOwner가 true일 때만버튼이 나타나게 하는 코드
            <>
            <button onClick={onDeleteClick}>Delete Nweet</button>
            <button>Exit Nweet</button>
            </>
        )}
        </div>
    );
};

export default Nweet;