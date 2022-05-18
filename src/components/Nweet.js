const Nweet = ({ nweetObj }) => {
    return ( //<수정>,<삭제> 버튼 추가코드
        <div>
            <h4>{nweetObj.text}</h4>
            <button>Delete Nweet</button>
            <button>Exit Nweet</button>
        </div>
    );
};

export default Nweet;