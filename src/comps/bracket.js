import matches from "../data/matches";
export default function Bracket() {
  return (
    <>
      <div className="bracket">
        <div className="region-1 region">
          {matches
            .filter((r) => r.region === 1)
            .map((match) => {
              return (
                <ul
                  key={match.matchup}
                  className={`matchup matchup-${match.matchup}`}
                >
                  <li className="team team-top winner">
                    {match.tt.seed} {match.tt.name}
                  </li>
                  <li className="team team-bottom">
                    {match.tb.seed} {match.tb.name}
                  </li>
                </ul>
              );
            })}
        </div>
        <div className="region-2 region">
          {matches
            .filter((r) => r.region === 2)
            .map((match) => {
              return (
                <ul
                  key={match.matchup}
                  className={`matchup matchup-${match.matchup}`}
                >
                  <li className="team team-top winner">
                    {match.tt.seed} {match.tt.name}
                  </li>
                  <li className="team team-bottom">
                    {match.tb.seed} {match.tb.name}
                  </li>
                </ul>
              );
            })}
        </div>
        <div className="region-3 region">
          {matches
            .filter((r) => r.region === 3)
            .map((match) => {
              return (
                <ul
                  key={match.matchup}
                  className={`matchup matchup-${match.matchup}`}
                >
                  <li className="team team-top winner">
                    {match.tt.seed} {match.tt.name}
                  </li>
                  <li className="team team-bottom">
                    {match.tb.seed} {match.tb.name}
                  </li>
                </ul>
              );
            })}
        </div>
        <div className="region-4 region">
          {matches
            .filter((r) => r.region === 4)
            .map((match) => {
              return (
                <ul
                  key={match.matchup}
                  className={`matchup matchup-${match.matchup}`}
                >
                  <li className="team team-top winner">
                    {match.tt.seed} {match.tt.name}
                  </li>
                  <li className="team team-bottom">
                    {match.tb.seed} {match.tb.name}
                  </li>
                </ul>
              );
            })}
        </div>
        <div className="final-four">
          <ul className="matchup matchup-61">
            <li className="team team-top">11 Loyola-Chicago</li>
            <li className="team team-bottom">3 Michigan</li>
          </ul>
          <ul className="matchup matchup-62">
            <li className="team team-top">1 Villanova</li>
            <li className="team team-bottom ">1 Kansas</li>
          </ul>
          <ul className="matchup championship">
            <li className="team team-top">3 Michigan</li>
            <li className="team team-bottom">1 Villanova</li>
          </ul>
        </div>
      </div>
    </>
  );
}
