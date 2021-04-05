import SubscriptionsStyle from "./subscriptions.module.css"

export default function Subscriptions() {
    return (
      <div className={SubscriptionsStyle.container}>
        <h2 className="content-header">Manage subscriptions</h2>

        <div className={SubscriptionsStyle.subContainer}>

          <div className={SubscriptionsStyle.subRow}>

            <div className={SubscriptionsStyle.subProvider}>
              <img className={SubscriptionsStyle.subLogo}
              alt="netflix logo"
              src="/images/DisneyPlusLogo.svg"
              />
              
              <div className={SubscriptionsStyle.subNamePrice}>
                <p>Netflix</p>
                <p>109,- per month</p>
              </div>

              <div className={SubscriptionsStyle.subActiveEdit}>
                <p className={SubscriptionsStyle.subActiveState}>Active</p>
                <p>Edit</p>
              </div>
            </div>

            <div className={SubscriptionsStyle.subProvider}>
              <img className={SubscriptionsStyle.subLogo}
              alt="netflix logo"
              src="/images/DisneyPlusLogo.svg"
              />
              
              <div className={SubscriptionsStyle.subNamePrice}>
                <p>NRK TV</p>
                <p>Free</p>
              </div>

              <div className={SubscriptionsStyle.subActiveEditNRK}>
                <p className={SubscriptionsStyle.subActiveState}>Active</p>
                <p>Edit</p>
              </div>
            </div>

            <div className={SubscriptionsStyle.subProvider}>
              <img className={SubscriptionsStyle.subLogo}
              alt="NRK logo"
              src="/images/DisneyPlusLogo.svg"
              />
              
              <div className={SubscriptionsStyle.subNamePrice}>
                <p>Viaplay</p>
                <p>109,- per month</p>
              </div>

              <div className={SubscriptionsStyle.subActiveEdit}>
                <p className={SubscriptionsStyle.subActiveState}>Active</p>
                <p>Edit</p>
              </div>
            </div>
            

          </div>

          <div className={SubscriptionsStyle.subRow}>

          </div>
          <div classsName={SubscriptionsStyle.subAddTotalRow}></div>
        </div>

      </div>


    );
  }