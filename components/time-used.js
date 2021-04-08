import TimeUsedStyle from "./time-used.module.css";

export default function TimeUsed() {
  return (
    <div className={TimeUsedStyle.container}>
      <h2 className="content-header">Time used</h2>

      <div className={TimeUsedStyle.subContainer}>
          <div className={TimeUsedStyle.timeRow}>
              <img
              className={TimeUsedStyle.subLogo}
              alt="Netflix logo"
              src="/images/DisneyPlusLogo.svg" 
              />
              <div className={TimeUsedStyle.text}>
                  <p className="thin-text">Netflix</p>
                  <p className="thin-text">This week: 6 h 32 min</p>
                  <p className="thin-text">Last watched</p>
              </div>

              <img
              className={TimeUsedStyle.subLogo}
              alt="Disney+ logo"
              src="/images/DisneyPlusLogo.svg" 
              />
              <div className={TimeUsedStyle.text}>
                  <p className="thin-text">Disney+</p>
                  <p className="thin-text">This week: 3 h 18 min</p>
                  <p className="thin-text">Last watched</p>
              </div>

              <img
              className={TimeUsedStyle.subLogo}
              alt="NRK logo"
              src="/images/DisneyPlusLogo.svg" 
              />
              <div className={TimeUsedStyle.text}>
                  <p className="thin-text">NRK TV</p>
                  <p className="thin-text">This week: 0 h 45 min</p>
                  <p className="thin-text">Last watched</p>
              </div>
          </div>
          <div className={TimeUsedStyle.timeRow2}>
          <img
              className={TimeUsedStyle.subLogo}
              alt="Viaplay logo"
              src="/images/DisneyPlusLogo.svg" 
              />
              <div className={TimeUsedStyle.text}>
                  <p className="thin-text">Viaplay</p>
                  <p className="thin-text">This week: 0 h 32 min</p>
                  <p className="thin-text">Last watched</p>
              </div>

              <img
              className={TimeUsedStyle.subLogo}
              alt="Tv2 Sumo logo"
              src="/images/DisneyPlusLogo.svg" 
              />
              <div className={TimeUsedStyle.text}>
                  <p className="thin-text">TV2 Sumo</p>
                  <p className="thin-text">This week: 0 h 0 min</p>
                  <p className="thin-text">Last watched</p>
              </div>
          </div>
      </div>
    </div>
  );
}
