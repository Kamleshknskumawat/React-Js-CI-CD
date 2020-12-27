import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
function SongAdd({ addS }) {
    const [title, setTitle] = useState("");

    const onSubmitSong = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(title);
        addS(title);
        setTitle("")
    }



    return (
        <div className="form-song">
            <form onSubmit={onSubmitSong}>
                <label>Song Name:</label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}></input>
                <input type="submit" value="add song" />

            </form>

        </div>
    )

}
export default SongAdd;