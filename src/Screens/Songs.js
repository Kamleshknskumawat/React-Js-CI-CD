import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SongAdd from './SongAdd';
function Songs() {
    const [song, setSong] = useState([
        {
            title: 'atmost home', id: 1
        },
        {
            title: 'memory hope', id: 2
        },
        {
            title: 'this wild darkness', id: 3
        },
    ]);

    const addSong = (title) => {
        console.log("addSong");
        setSong([...song, { title, id: uuidv4() }])
    }

    const removeSong = (id) => {
        console.log("remove" + id);
        // setSong([...song, { title, id: uuidv4() }])
    }





    return (
        <div className="song-list">

            <ul>
                {
                    song.map(song => {
                        return (<li key={song.id} onMouseDown={removeSong(song.id)}>{song.title}</li>);
                    })
                }
            </ul>
            {/* <button onClick={addSong}>  add song</button> */}
            <SongAdd addS={addSong} />
        </div>
    )

}
export default Songs;