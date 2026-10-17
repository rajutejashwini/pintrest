import PinGrid from '../components/PinGrid.jsx';
import { useApp } from '../context/AppContext.jsx';
import boards from '../data/boards.js';

export default function Profile() {
  const { currentUser, pins } = useApp();
  const mine = pins.filter((p) => p.author === currentUser.username);
  const myBoards = boards.filter((b) => b.owner === currentUser.username);
  return (
    <>
      <div className="profile-head">
        <img src={currentUser.avatar} alt={currentUser.name} />
        <h1>{currentUser.name}</h1><p className="muted">@{currentUser.username}</p><p>{currentUser.bio}</p>
      </div>
      <h2 className="page-title">Boards</h2>
      <div className="boards">
        {myBoards.map((b) => {
          const inBoard = pins.filter((p) => p.boardId === b.id);
          return (
            <div className="board" key={b.id}>
              {inBoard[0] && <img src={inBoard[0].imageUrl} alt="" />}
              <h3>{b.name}</h3><small>{inBoard.length} pins</small>
            </div>
          );
        })}
      </div>
      <h2 className="page-title">Created</h2>
      <PinGrid pins={mine} emptyText="You haven't created any pins yet." />
    </>
  );
}
