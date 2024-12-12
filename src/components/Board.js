import React from 'react';
import Genre from './Genre';
import BirthYear from './BirthYear';
import DebutYear from './DebutYear';
import MonthlyStreams from './MonthlyStreams';
import NumAlbums from './NumAlbums';
import Name from './Name';

function Board() {
    return (
        <div className="board-container">
            {/* Header Row */}
            <div className="header-row">
                <div className="header-item">Name</div>
                <div className="header-item">Genre</div>
                <div className="header-item">Birth Year</div>
                <div className="header-item">Debut Year</div>
                <div className="header-item">Monthly Streams</div>
                <div className="header-item"># of Albums</div>
            </div>

            {/* Data Rows */}
            <div className="board">
                {Array.from({ length: 6 }).map((_, attemptVal) => (
                    <div className="row" key={attemptVal}>
                        <Name attemptPos={0} attemptVal={attemptVal} />
                        <Genre attemptPos={1} attemptVal={attemptVal} />
                        <BirthYear attemptPos={2} attemptVal={attemptVal} />
                        <DebutYear attemptPos={3} attemptVal={attemptVal} />
                        <MonthlyStreams attemptPos={4} attemptVal={attemptVal} />
                        <NumAlbums attemptPos={5} attemptVal={attemptVal} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Board