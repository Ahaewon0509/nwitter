const Nweet = ({ nweetObj }) => {
    return (
        <div>
            <h4>{nweetObj.text}</h4>
            <button>Delete Nweet</button>
            <button>Exit Nweet</button>
        </div>
    );
};

export default Nweet;